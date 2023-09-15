const express = require('express');
const { PrismaClient } = require('@prisma/client');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');

const CryptoJS = require('crypto-js');
const prisma = new PrismaClient();
const app = express();
const randomstring = require('randomstring');
require('dotenv').config();

const secretKey = 'your-secret-key';
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(cors())

app.use('/uploads', express.static('uploads'));

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(422).json({ message: 'Please provide a valid token' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Attach user data to the request object
        next(); // Continue to the protected route
    } catch (error) {
        return res.status(403).json({ error: 'Failed to authenticate token' });
    }
}

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Failed to authenticate token', err });
        }

        req.user = decoded;
        next();
    });
}

function decryptPassword(encryptedPassword) {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

async function getusers(req, res) {
    try {
        const users = await prisma.userr.findMany();
        res.json(users);
    } catch (error) {
        console.error('Failed to fetch users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

async function createusers(req, res) {
    try {
        const { name, email, password, roles } = req.body;
        const user = await prisma.userr.create({
            data: {
                name,
                email,
                password,
                roles,
            },
        });
        res.json(user);
    } catch (error) {
        console.error('Failed to create user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }

}

function decryptPassword(encryptedPassword) {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await prisma.userr.findFirst({
            where: {
                email
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }


        const decryptedPassword = decryptPassword(user.password);

        if (decryptedPassword !== password) {
            return res.status(401).json({ error: 'Invalid password' });

        }

        console.log(password);

        const expiresInMinutes = 60;
        const expirationTimeInSeconds = expiresInMinutes * 60;


        const token = jwt.sign(
            { id: user.id, name: user.name, email: user.email, roles: user.roles },
            secretKey,
            { expiresIn: expirationTimeInSeconds }

        );
        await prisma.userr.update({
            where: { id: user.id },
            data: { token }
        });

        res.json({ token });
    } catch (error) {
        console.error('Login failed:', error);
        res.status(500).json({ error: 'Login failed' });
    }
}

async function getuserbyid(req, res) {
    try {
        const { id } = req.params;
        const user = await prisma.userr.findUnique({
            where: { id: parseInt(id) },
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Failed to fetch user:', error);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
}

async function getuserupdaterbyid(req, res) {
    try {
        const { id } = req.params;
        const { name, email, password, roles } = req.body;
        const user = await prisma.userr.update({
            where: { id: parseInt(id) },
            data: {
                name,
                email,
                password,
                roles,
            },
        });
        res.json(user);
    } catch (error) {
        console.error('Failed to update user:', error);
        res.status(500).json({ error: 'Failed to update user' });
    }
}

async function deleteUserbyid(req, res) {
    try {
        const { id } = req.params;
        await prisma.userr.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Failed to delete user:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
}

async function getuserbytoken(req, res) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(422).json({ message: 'Please provide a valid token' });
        }

        const token = authHeader.split(' ')[1];
        console.log(token);

        try {
            const decoded = jwt.verify(token, secretKey);
            const userId = decoded.id;

            const user = await prisma.userr.findUnique({ where: { id: userId } });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }


            if (!user.token) {
                return res.status(401).json({ error: 'Token expired' });
            }

            return res.json({ error: false, data: user, message: 'Fetch Successful' });
        } catch (error) {
            return res.status(403).json({ error: 'Failed to authenticate token' });
        }
    } catch (error) {
        console.error('Failed to fetch user:', error);
        return res.status(500).json({ error: 'Failed to fetch user' });
    }
}

async function logout(req, res) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(422).json({ message: 'Please provide a valid token' });
        }

        const token = authHeader.split(' ')[1];


        const user = await prisma.userr.findFirst({
            where: {
                token
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }


        if (!user.token) {

            return;
        }


        await prisma.userr.update({
            where: { id: user.id },
            data: { token: null }
        });

        return res.json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error('Logout failed:', error);
        return res.status(500).json({ error: 'Logout failed' });
    }
}

async function imagebyid(req, res) {
    let id = req.params.id
    try {
        const posts = await prisma.post.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        res.send(posts.url);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching posts.' });
    }
}

async function getposts(req, res) {
    try {
        const posts = await prisma.post.findMany();
        res.json(posts);
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}

async function createcomment(req, res) {
    try {
        const { content, postId } = req.body;
        let userId = null;
        let name = 'Unknown';

        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            try {
                const decoded = jwt.verify(token, secretKey);
                userId = decoded.id;
                name = decoded.name;
            } catch (error) {
                console.error('Failed to authenticate token:', error);
                res.status(401).json({ error: 'Failed to authenticate token' });
                return;
            }
        } else {
            userId = 100;
        }

        const comment = await prisma.comment.create({
            data: {
                content,
                postId: parseInt(postId),
                userId,
                name,
            },
        });

        res.json("Comment created successfully");
    } catch (error) {
        console.error('Failed to create comment:', error);
        res.status(500).json({ error: 'Failed to create comment' });
    }


}

async function publiccomment(req, res) {
    try {
        const { content, postId } = req.body;
        const userId = 100; // Static userId value

        let comment;

        if (postId) {
            comment = await prisma.comment.create({
                data: {
                    content,
                    postId: parseInt(postId),
                    userId,
                },
            });
        } else {
            comment = await prisma.comment.create({
                data: {
                    content,
                    userId,
                },
            });
        }

        res.json("Comment created successfully");
    } catch (error) {
        console.error('Failed to create comment:', error);
        res.status(500).json({ error: 'Failed to create comment' });
    }
}

async function getcomments(req, res) {
    try {
        const comments = await prisma.comment.findMany();
        res.json(comments);
    } catch (error) {
        console.error('Failed to fetch comments:', error);
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
}

async function postandcommentbyid(req, res) {

    try {
        const { id } = req.params;

        const postCount = await prisma.post.count({
            where: { userId: parseInt(id) },
        });

        const commentCount = await prisma.comment.count({
            where: { userId: parseInt(id) },
        });

        res.json({ postCount, commentCount });
    } catch (error) {
        console.error('Failed to fetch user statistics:', error);
        res.status(500).json({ error: 'Failed to fetch user statistics' });
    }

}

function protected(req, res) {
    res.json({ message: 'Protected route accessed successfully' });
}

async function createpost(req, res) {
    try {
        const content = req.body.content;
        const header = req.body.header;
        const userId = req.user.id;
        if (userId !== req.body.userId) {
            return res.status(403).json({ error: 'Invalid user ID' });
        }
        const url = 'http://localhost:4000/uploads/' + req.body.file

        const post = await prisma.post.create({
            data: {
                content,
                header,
                url,
                userId
            },
        });

        res.json('Post created');
    } catch (error) {
        console.error('Failed to create post:', error);
        res.status(500).json({ error: 'Failed to create post' });
    }
}

async function forgotpassword(req, res) {
    {
        try {
            const { email } = req.body;
            const user = await prisma.userr.findFirst({
                where: {
                    email: email,
                },
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const otp = randomstring.generate({
                length: 4,
                charset: 'numeric',
            });

            await prisma.userr.update({
                where: { id: user.id },
                data: { OTP: parseInt(otp) },
            });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: process.env.WEALTHMAKER_SMTP_HOST,
                port: process.env.WEALTHMAKER_SMTP_PORT,
                secure: false,
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });


            const mailOptions = {
                from: 'anshurajpoot71@gmail.com',
                to: email,
                subject: 'Password Reset OTP',
                text: `Your OTP for password reset is: ${otp}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                    res.status(500).json({ error: 'Failed to send OTP email' });
                } else {
                    console.log('OTP email sent:', info.response);
                    res.json({ message: 'OTP sent successfully' });
                }
            });
        } catch (error) {
            console.error('Forgot password failed:', error);
            res.status(500).json({ error: 'Forgot password failed' });
        }
    };
}

async function forgotpasswordd(req, res) {
    const userEmail = req.body.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    try {
        const user = await prisma.userr.findFirst({ where: { email: userEmail } });

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }


        const storedPassword = CryptoJS.AES.decrypt(user.password, secretKey).toString(CryptoJS.enc.Utf8);
        if (storedPassword !== oldPassword) {
            return res.status(401).json({ message: 'Old password is incorrect.' });
        }

        const encryptedNewPassword = CryptoJS.AES.encrypt(newPassword, secretKey).toString();


        await prisma.userr.update({
            where: { id: user.id },
            data: {
                password: encryptedNewPassword,
            },
        });

        res.status(200).json({ message: 'Password reset successful!' });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ message: 'An error occurred while updating the password.' });
    }
};

async function combineddata(req, res) {
    try {
        const usersWithFollowRequests = await prisma.userr.findMany({
            include: {
                requestedFollows: true,
                receivedFollows: true,
            },
        });
        res.json(usersWithFollowRequests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function postheaders(req, res) {
    try {
        const posts = await prisma.post.findMany();
        const postHeaders = posts.map(post => post.header);
        res.json(postHeaders);
    } catch (error) {
        console.error('Failed to fetch post headers:', error);
        res.status(500).json({ error: 'Failed to fetch post headers' });
    }
};



module.exports = {
    getusers,
    createusers,
    getuserbyid,
    getuserupdaterbyid,
    deleteUserbyid,
    login,
    getuserbytoken,
    logout,
    imagebyid,
    getposts,
    createcomment,
    publiccomment,
    postandcommentbyid,
    getcomments,
    protected,
    createpost,
    forgotpassword,
    forgotpasswordd,
    combineddata,
    postheaders
}