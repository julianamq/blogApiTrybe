const { User } = require('../models');

const createLoginService = async ({ email, password }) => {
  const login = await User.create({ email, password });
//  console.log(login, ' create linha 5 service'); // anjo Laura me ajudouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu! uhuuuuu! kkk
  return login;
};

const getEmail = async (email) => {
  const emailValid = await User.findOne({ where: { email } });
  // console.log(emailValid, 'email válido linha 11');
  return emailValid;
};

module.exports = {
  createLoginService,
  getEmail,
};