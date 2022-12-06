const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '2d',
};

const createToken = async (loginWithoutPassword) => {
  const token = jwt.sign({ data: loginWithoutPassword }, secret, jwtConfig);
  return token;
};

const validateToken = (token) => {
  try {
    if (!token) return { error: 'Token not found' };
    const validation = jwt.verify(token, secret);
    if (!jwtConfig.expiresIn) return { error: 'Expired or invalid token' };
    return validation;
  } catch (err) {
    return { error: err.message };
  }
};

module.exports = {
  createToken,
  validateToken,
};