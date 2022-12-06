const validationLogin = async (request, response, next) => {
    const { email, password } = request.body;
    if (!email || !password) {
        return response.status(400).json({
            message: 'Invalid request' });
  }
        if (!email && !password) {
            return response.status(400).json({
                message: 'Invalid fiels',
            });
        }
  
    return next();
};
module.exports = { validationLogin };