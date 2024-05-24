
--inicia sin sesion
const User = require('../models/Users'); 
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { username, password, email, firstName, lastName, phoneNumber, role } = req.body;
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
      firstName,
      lastName,
      phoneNumber,
      role
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};

const login = async (req, res) => {
  try {
    // Aquí puedes implementar la lógica de inicio de sesión sin token, por ejemplo, validar las credenciales y devolver un mensaje de éxito
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
};

module.exports = {
  register,
  login
};



/*
-- no inicia
const User = require('../models/Users'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  try {
    const { username, password, email, firstName, lastName, phoneNumber, role } = req.body;
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
      firstName,
      lastName,
      phoneNumber,
      role
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};


const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
};


const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching user profile' });
  }
};

module.exports = {
  register,
  login,
  getProfile
};

*/

