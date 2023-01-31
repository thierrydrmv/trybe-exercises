require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const isBodyValid = (username, password) => username.length > 4 && password.length > 4;

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    
    if(!isBodyValid(username, password)) {
      return res.status(401).json({ message: 'É necessário usuário e senha com mais de 5 digitos para fazer login' });
    }
    
    const jwtConfig = {
      expiresIn: '1h',
    }

    let admin;
    
    if (username === process.env.ADMIN && password === process.env.PASSWORD) {
      admin = true;
    } else {
      admin = false;
    }
    const token = jwt.sign({ username, admin }, secret, jwtConfig)
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'erro interno', error: err.message });
  }
}


module.exports = login;