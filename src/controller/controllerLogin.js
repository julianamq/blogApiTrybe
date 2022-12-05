require('dotenv/config');
const jwt = require('jsonwebtoken');
const createLoginService = require('../service/loginService');
// const createToken = require('../auth/jwt');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';
const validBody = (email, password) => email && password;

const createLogin = async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!validBody(email, password)) {
      return response.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await createLoginService.getEmail(email); // vai acessar a função do create e pegar a função getEmail. 
    if (!user || user.password !== password) {
      return response.status(400).json({ message: 'Invalid fields' });
    }
    const jwtConfig = {
      algorithm: 'HS256',
      expiresIn: '2d',
    };
    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig); // parametros passados para o token , vai gerar um token aleatorio e devolver
    return response.status(200).json({ token });
  } catch (error) {
    return response.status(500).json({ message: 'Error interno', error: error.message });
  }
};

// const validLogin = (request, response, next) => {
//   const { email, password } = request.body;
//   if (!email || !password) {
//     return response.status(400).json({ message: 'Some required fields are missing' });
//   }
//   next();
// };

module.exports = createLogin;
