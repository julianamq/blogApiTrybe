const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const validateTokenLogin = async (request, response, next) => {
  const token = request.headers.authorization;
  // console.log(token, 'linha 09 validação');
  if (!token) {
    return response.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    request.user = decoded;
    next();
  } catch (err) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateTokenLogin,
};