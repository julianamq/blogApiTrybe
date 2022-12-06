const { createToken } = require('../auth/jwt');
const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {    
    const createUserOne = await User.create({ displayName, email, password, image });
    const { password: _, ...loginWithoutPassword } = createUserOne.dataValues;
    const getToken = await createToken(loginWithoutPassword); // retornar sem a senha
    return { getToken };
};

module.exports = { 
    createUser,

};