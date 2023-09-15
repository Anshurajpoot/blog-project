const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/routes');

app.use('/', routes)

app.use('/uploads', express.static('uploads'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





// ...


// ...

// function decryptPassword(encryptedPassword) {
//   const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
//   return bytes.toString(CryptoJS.enc.Utf8);
// }

// app.get('/getusers', async (req, res) => {
//   try {
//     const users = await prisma.userr.findMany();
//     const usersWithFollowRequests = users.map(user => ({...user,
//       request: false, 
//     }));

//     // usersWithFollowRequests.forEach(user => {
//     //   user.request = true;
     
//     // });

//     res.json(usersWithFollowRequests);
//   } catch (error) {
//     console.error('Failed to fetch users:', error);
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// });



// Login API
// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await prisma.userr.findFirst({
//       where: {
//         email
//       }
//     });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

    
//     const decryptedPassword = decryptPassword(user.password);

//     if (decryptedPassword !== password) {
//       return res.status(401).json({ error: 'Invalid password' });
      
//     }

//     console.log(password);

//     const expiresInMinutes = 2;
//     const expirationTimeInSeconds = expiresInMinutes * 60;
    

//     const token = jwt.sign(
//              { id: user.id, name: user.name, email: user.email, roles: user.roles },
//            secretKey,
//           { expiresIn: expirationTimeInSeconds }
          
//          );
//          await prisma.userr.update({
//                 where: { id: user.id },
//                 data: { token }
//               });

//     res.json({ token });
//   } catch (error) {
//     console.error('Login failed:', error);
//     res.status(500).json({ error: 'Login failed' });
//   }
// });

// app.post('/createusers', upload.single('user_file'), async (req, res) => {
//   try {
//     const { name, email, password, roles } = req.body;
//     const file = req.body.file;
//     console.log(file);
//     const url = file;

//     const user = await prisma.userr.create({
//       data: {
//         name,
//         email,
//         password,
//         roles,
//         url,
//       },
//     });
//     res.json(user);
//   } catch (error) {
//     console.error('Failed to create user:', error);
//     res.status(500).json({ error: 'Failed to create user' });
//   }
// });






// Get a single user by ID
// app.get('/singleUsers/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await prisma.userr.findUnique({
//       where: { id: parseInt(id) },
//     });
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     res.status(500).json({ error: 'Failed to fetch user' });
//   }
// });


// Update a user by ID
// app.put('/updateUsers/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email, password, roles } = req.body;
//     const user = await prisma.userr.update({
//       where: { id: parseInt(id) },
//       data: {
//         name,
//         email,
//         password,
//         roles,
//       },
//     });
//     res.json(user);
//   } catch (error) {
//     console.error('Failed to update user:', error);
//     res.status(500).json({ error: 'Failed to update user' });
//   }
// });

// delete a user by id
// app.delete('/deleteUsers/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await prisma.userr.delete({
//       where: { id: parseInt(id) },
//     });
//     res.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     console.error('Failed to delete user:', error);
//     res.status(500).json({ error: 'Failed to delete user' });
//   }
// });

// Login API
// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await prisma.userr.findFirst({
//       where: {
//         email
//       }
//     });


//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }


//     if (user.password !== password) {
//       return res.status(401).json({ error: 'Invalid password' });
//     }

//     const token = jwt.sign(
//       { id: user.id, name: user.name, email: user.email, roles: user.roles },
//       secretKey,
//       { expiresIn: '1h' }
//     );


//     await prisma.userr.update({
//       where: { id: user.id },
//       data: { token }
//     });


//     res.json({ token });
//   } catch (error) {
//     console.error('Login failed:', error);
//     res.status(500).json({ error: 'Login failed' });
//   }
// });

// get specific user with token

// app.get('/get-user', async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(422).json({ message: 'Please provide a valid token' });
//     }

//     const token = authHeader.split(' ')[1];
//     console.log(token);

//     try {
//       const decoded = jwt.verify(token, secretKey);
//       const userId = decoded.id;

//       const user = await prisma.userr.findUnique({ where: { id: userId } });

//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }


//       if (!user.token) {
//         return res.status(401).json({ error: 'Token expired' });
//       }

//       return res.json({ error: false, data: user, message: 'Fetch Successful' });
//     } catch (error) {
//       return res.status(403).json({ error: 'Failed to authenticate token' });
//     }
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     return res.status(500).json({ error: 'Failed to fetch user' });
//   }
// });



// app.post('/logout', async (req, res) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(422).json({ message: 'Please provide a valid token' });
//     }

//     const token = authHeader.split(' ')[1];
//     const user = await prisma.userr.findFirst({
//       where: {
//         token
//       }
//     });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     if (!user.token) {
     
//       return res.json({ message: 'User is already logged out' });
//     }

//     await prisma.userr.update({
//       where: { id: user.id },
//       data: { token: null }
//     });

//     return res.json({ message: 'Logged out successfully' });
//   } catch (error) {
//     console.error('Logout failed:', error);
//     return res.status(500).json({ error: 'Logout failed' });
//   }
// });

// app.get('/image/:id', async (req, res) => {
//   let id = req.params.id
//   try {
//     const posts = await prisma.post.findUnique({
//       where: {
//         id: parseInt(id)
//       }
//     });
//     res.send(posts.url);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching posts.' });
//   }
// });
// app.get('/getposts', async (req, res) => {
//   try {
//     const posts = await prisma.post.findMany();
//     res.json(posts);
//   } catch (error) {
//     console.error('Failed to fetch posts:', error);
//     res.status(500).json({ error: 'Failed to fetch posts' });
//   }
// });

// createcomment
// app.post('/createcomment', async (req, res) => {
//   try {
//     const { content, postId } = req.body;
//     let userId = null;
//     let name = 'Unknown';

//     const authHeader = req.headers.authorization;
//     if (authHeader && authHeader.startsWith('Bearer ')) {
//       const token = authHeader.split(' ')[1];
     
//       try {
//         const decoded = jwt.verify(token, secretKey);
//         userId = decoded.id;
//         name = decoded.name;
//       } catch (error) {
//         console.error('Failed to authenticate token:', error);
//         res.status(401).json({ error: 'Failed to authenticate token' });
//         return;
//       }
//     } else {
//       userId = 100;
//     }

//     const comment = await prisma.comment.create({
//       data: {
//         content,
//         postId: parseInt(postId),
//         userId,
//         name,
//       },
//     });

//     res.json("Comment created successfully");
//   } catch (error) {
//     console.error('Failed to create comment:', error);
//     res.status(500).json({ error: 'Failed to create comment' });
//   }
// });

// app.post('/publicComment', async (req, res) => {
//   try {
//     const { content, postId } = req.body;
//     const userId = 100; 

//     let comment;

//     if (postId) {
//       comment = await prisma.comment.create({
//         data: {
//           content,
//           postId: parseInt(postId),
//           userId,
//         },
//       });
//     } else {
//       comment = await prisma.comment.create({
//         data: {
//           content,
//           userId,
//         },
//       });
//     }

//     res.json("Comment created successfully");
//   } catch (error) {
//     console.error('Failed to create comment:', error);
//     res.status(500).json({ error: 'Failed to create comment' });
//   }
// });
// app.get('/getcomments', async (req, res) => {
//   try {
//     const comments = await prisma.comment.findMany();
//     res.json(comments);
//   } catch (error) {
//     console.error('Failed to fetch comments:', error);
//     res.status(500).json({ error: 'Failed to fetch comments' });
//   }
// });
// app.get('/user/:id/stats', async (req, res) => {
//   try {
//     const { id } = req.params;

//     const postCount = await prisma.post.count({
//       where: { userId: parseInt(id) },
//     });

//     const commentCount = await prisma.comment.count({
//       where: { userId: parseInt(id) },
//     });

//     res.json({ postCount, commentCount });
//   } catch (error) {
//     console.error('Failed to fetch user statistics:', error);
//     res.status(500).json({ error: 'Failed to fetch user statistics' });
//   }
// });
// app.get('/protected', verifyToken, (req, res) => {
//   res.json({ message: 'Protected route accessed successfully' });
// });


// function verifyToken(req, res, next) {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   const token = authHeader.split(' ')[1];
//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ error: 'Failed to authenticate token', err });
//     }

//     req.user = decoded;
//     next();
//   });
// }


// app.post('/createpost', upload.single("user_file"), verifyToken, async (req, res) => {
//   try {
//     const content = req.body.content;
//     const header = req.body.header;
//     const userId = req.user.id;
//     if (userId !== req.body.userId) {
//       return res.status(403).json({ error: 'Invalid user ID' });
//     }

//     const url = 'http://localhost:4000/uploads/' + req.body.file
//     // console.log(url)


//     const post = await prisma.post.create({
//       data: {
//         content,
//         header,
//         url,
//         userId
//       },
//     });

//     res.json('Post created');
//   } catch (error) {
//     console.error('Failed to create post:', error);
//     res.status(500).json({ error: 'Failed to create post' });
//   }
// });




// app.post('/forgot-password', async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await prisma.userr.findFirst({
//       where: {
//         email: email,
//       },
//     });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const otp = randomstring.generate({
//       length: 4,
//       charset: 'numeric',
//     });

//     await prisma.userr.update({
//       where: { id: user.id },
//       data: { OTP: parseInt(otp) }, 
//     });

//     const transporter = nodemailer.createTransport({
//       service : 'gmail',
//       host: process.env.WEALTHMAKER_SMTP_HOST,
//       port: process.env.WEALTHMAKER_SMTP_PORT,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USERNAME,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });


//     const mailOptions = {
//       from: 'anshurajpoot71@gmail.com',
//       to: email,
//       subject: 'Password Reset OTP',
//       text: `Your OTP for password reset is: ${otp}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log('Error sending email:', error);
//         res.status(500).json({ error: 'Failed to send OTP email' });
//       } else {
//         console.log('OTP email sent:', info.response);
//         res.json({ message: 'OTP sent successfully' });
//       }
//     });
//   } catch (error) {
//     console.error('Forgot password failed:', error);
//     res.status(500).json({ error: 'Forgot password failed' });
//   }
// });
//otp reset password
// app.post('/reset-password', async (req, res) => {
//   const { email, otp, newPassword } = req.body;

//   try {
//     const user = await prisma.userr.findFirst({
//       where: {
//         email: email,
//       },
//     });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const storedOTP = user.OTP;
//     if (!storedOTP || storedOTP !== parseInt(otp)) {
//       return res.status(401).json({ error: 'Invalid OTP' });
//     }

//     await prisma.userr.update({
//       where: { id: user.id },
//       data: { password: newPassword, OTP: null }, 
//     });

//     res.json({ message: 'Password reset successful' });
//   } catch (error) {
//     console.error('Password reset failed:', error);
//     res.status(500).json({ error: 'Password reset failed' });
//   }
// });


//normal reset password
// app.post('/reset-passwordd', async (req, res) => {
//   const userEmail = req.body.email;
//   const oldPassword = req.body.oldPassword;
//   const newPassword = req.body.newPassword;

//   try {
//     const user = await prisma.userr.findFirst({ where: { email: userEmail } });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found.' });
//     }

   
//     const storedPassword = CryptoJS.AES.decrypt(user.password, secretKey).toString(CryptoJS.enc.Utf8);
//     if (storedPassword !== oldPassword) {
//       return res.status(401).json({ message: 'Old password is incorrect.' });
//     }

//     const encryptedNewPassword = CryptoJS.AES.encrypt(newPassword, secretKey).toString();

  
//     await prisma.userr.update({
//       where: { id: user.id },
//       data: {
//         password: encryptedNewPassword,
//       },
//     });

//     res.status(200).json({ message: 'Password reset successful!' });
//   } catch (error) {
//     console.error('Error updating password:', error);
//     res.status(500).json({ message: 'An error occurred while updating the password.' });
//   }
// });

// app.get('/combined-data', async (req, res) => {
//   try {
//     const usersWithFollowRequests = await prisma.userr.findMany({
//       include: {
//         requestedFollows: true,
//         receivedFollows: true,
//       },
//     });
//     res.json(usersWithFollowRequests);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


// app.get('/follow-requestsdata', async (req, res) => {
//   try {
//     const followRequests = await prisma.followRequest.findMany();
//     res.json(followRequests);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });




// app.get('/follow-requests/:requesterId', async (req, res) => {
//   try {
//     const { requesterId } = req.params;
//     console.log(requesterId);

//     const followRequests = await prisma.followRequest.findMany({
//       where: {
//         requesterId: parseInt(requesterId),
//       },
//       select: {
//         targetId: true,
//         status: true, 
//       },
//     });
    

//     res.json(followRequests); 
//   } catch (error) {
//     console.error('Failed to get follow requests:', error);
//     res.status(500).json({ error: 'Failed to get follow requests' });
//   }
// });

    // Validate the status 
// app.put('/follow-requests-status/:requestId', async (req, res) => {
//       try {
//         const { requestId } = req.params;
//         const { status } = req.body;
    
//         if (!['accepted', 'deleted', 'pending'].includes(status)) {
//           return res.status(400).json({ error: 'Invalid status. Status should be "accepted", "deleted", or "pending"' });
//         }
    
        
//         if (status === 'deleted') {
//           await prisma.followRequest.delete({
//             where: {
//               id: parseInt(requestId),
//             },
//           });
    
//           return res.json({ message: 'Follow request deleted successfully' });
//         }
    
//         const followRequest = await prisma.followRequest.update({
//           where: {
//             id: parseInt(requestId),
//           },
//           data: {
//             status: status,
//           },
//         });
    
//         res.json(followRequest);
//       } catch (error) {
//         console.error('Failed to update follow request status:', error);
//         res.status(500).json({ error: 'Failed to update follow request status' });
//       }
// });
        
// Get the follow status for all users
// app.get('/follow-status', async (req, res) => {
//   try {
//     const { requesterId, targetId } = req.body;

//     if (!requesterId || !targetId) {
//       return res.status(400).json({ error: 'Both requesterId and targetId are required query parameters' });
//     }

//     const followRequest = await prisma.followRequest.findMany({
//       where: {
//         requesterId: parseInt(requesterId),
//         targetId: parseInt(targetId),
//       },
//       select: {
//         status: true,
//       },
//     });

//     if (!followRequest) {
//       return res.status(404).json({ error: 'Follow request not found' });
//     }

//     res.json(followRequest);
//   } catch (error) {
//     console.error('Failed to fetch follow request status:', error);
//     res.status(500).json({ error: 'Failed to fetch follow request status' });
//   }
// });

// Get headers of all posts
// app.get('/post-headers', async (req, res) => {
//   try {
//     const posts = await prisma.post.findMany();
//     const postHeaders = posts.map(post => post.header);
//     res.json(postHeaders);
//   } catch (error) {
//     console.error('Failed to fetch post headers:', error);
//     res.status(500).json({ error: 'Failed to fetch post headers' });
//   }
// });


// app.get('/check-token-expiration', async (req, res) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(422).json({ message: 'Please provide a valid token' });
//     }

//     const token = authHeader.split(' ')[1];

//     try {
//       const decoded = jwt.verify(token, secretKey);
//       const currentTimeInSeconds = Math.floor(Date.now() / 1000);

//       if (decoded.exp < currentTimeInSeconds) {
//         return res.json({ expired: true });
//       } else {
//         return res.json({ expired: false });
//       }
//     } catch (error) {
//       return res.status(403).json({ error: 'Failed to authenticate token' });
//     }
//   } catch (error) {
//     console.error('Failed to check token expiration:', error);
//     return res.status(500).json({ error: 'Failed to check token expiration' });
//   }
// });


