// const express = require('express');
// const bodyParser = require('body-parser');
// // const db = require('./db');
// const jwt = require('jsonwebtoken');
// const { check } = require('express-validator');
// const controller = require('./routes/routes')

// const app = express();
// const port = 4000;
// const secretKey = 'your-secret-key';

// app.use(bodyParser.json());

// // Login API
// app.post('/api/login', 
// [
//     check('username')
//     .notEmpty().withMessage('Username is required')
//     .isAlpha().withMessage('Username must only contain alphabetic characters')
//     .isLength({ min: 4, max: 20 }).withMessage('Username must be between 4 and 20 characters'),

//     check('password')
//       .notEmpty().withMessage('Password is required')
//       .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
//       .matches(/\d/).withMessage('Password must contain at least one digit')
//       .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
//   ], controller.login);


// // Protected Route API for middleware to verify token 
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (token == null) {
//     return res.status.json({ message: 'Unauthorized' });
//   }

//   jwt.verify(token, secretKey, (err, user) => {
//     if (err) {
//       return res.status.json({ message: 'Invalid token' });
//     }

//     req.user = user;
//     next();
//   });
// }

// app.get('/api/protected', authenticateToken, (req, res) => {
//   const user = req.user;
//   res.json({ message: 'Hello, ' + user.username });
// });

// // Registration API
// app.post('/api/register', 
// [
//     check('username')
//     .notEmpty().withMessage('Username is required')
//     .isAlpha().withMessage('Username must only contain alphabetic characters')
//     .isLength({ min: 4, max: 20 }).withMessage('Username must be between 4 and 20 characters'),

//     check('password')
//       .notEmpty().withMessage('Password is required')
//       .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
//       .matches(/\d/).withMessage('Password must contain at least one digit')
//       .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
//   ], controller.register);


//   app.post('/api/reopen', controller.reopen);



// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
