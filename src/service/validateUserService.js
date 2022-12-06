const { createToken } = require('../auth/jwt');
const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {    
   console.log(displayName, email, password, 'disp');
    const createUserOne = await User.create({ displayName, email, password, image });
    // console.log(createUserOne, 'linha 6 create service');
    const { password: _, ...loginWithoutPassword } = createUserOne.dataValues;
    const getToken = await createToken(loginWithoutPassword); // retornar sem a senha
    // console.log(loginWithoutPassword, ' sem a senha');
    return { getToken };
};

module.exports = { 
    createUser,

};