const userService = require('../service/validateUserService');

const createUser = async (request, response) => {
    try {
        const { displayName, email, password, image } = request.body;
        // console.log('controller ');
        const { getToken } = await userService.createUser({ displayName, email, password, image });
        console.log(getToken, ' linha 8 controller');
        return response.status(201).json({ getToken });
    } catch (error) {
       return response.status(409).json({ message: 'User already registered' });
        }
};

module.exports = { 
    createUser,

};