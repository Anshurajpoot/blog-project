const secretKey = 'your-secret-key';
const jwt = require('jsonwebtoken');
// const router = require('../routes');



function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Failed to authenticate token' });
    }
    req.user = decoded;
    next();
  });
}


function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(422).json({ message: 'Please provide a valid token' });
  }

  const token = authHeader.split(' ')[1];
  try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded; 
      next(); 
  } catch (error) {
      return res.status(403).json({ error: 'Failed to authenticate token' });
  }
}

module.exports={verifyToken}