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
const validatePost = (request, response, next) => {
  const { title, content, categoryIds } = request.body;
  if (!title || !content || !categoryIds) { 
    return response.status(400).json({ message: 'Some required fields are missing' });
  }
  if (!categoryIds.length === 0) {
    return response.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  return next();
};

module.exports = {
  validateTokenLogin, validatePost,
};