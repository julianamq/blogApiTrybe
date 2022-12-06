const userService = require('../service/validateUserService');

const createUser = async (request, response) => {
    try {
        const { displayName, email, password, image } = request.body;
        // console.log('controller ');
        const { getToken } = await userService.createUser({ displayName, email, password, image });
        // console.log({ getToken }, ' linha 8 controller'); // trazendo o token
        return response.status(201).json({ token: getToken });
    } catch (error) {
        return response.status(409).json({ message: 'User already registered' });
    }
};
const getUser = async (_request, response) => {
    const users = await userService.getUser();
    console.log(users, 'controller log linha 16S');
    return response.status(200).json(users);
};

module.exports = {
    createUser,
    getUser,

};