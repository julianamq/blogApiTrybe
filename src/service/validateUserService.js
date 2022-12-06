const { createToken } = require('../auth/jwt');
const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {    
//    console.log(displayName, email, password, 'disp');
    const createUserOne = await User.create({ displayName, email, password, image });
    // console.log(createUserOne, 'linha 6 create service'); // retornando undefined
    const { password: _, ...loginWithoutPassword } = createUserOne.dataValues;
    const getToken = await createToken(loginWithoutPassword); // retornar sem a senha
    // console.log(getToken, ' sem a senha'); // token tipo string
    // console.log(createUserOne.dataValues, 'linha 11 create service');
    return { getToken };
};
const getUser = async () => {
     const usuarios = await User.findAll({ attributes: { exclude: ['password'] } });
    //  https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
     return usuarios;
};

module.exports = { 
    createUser,
    getUser,

};