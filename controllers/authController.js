
const db = require('../db'); // Importar la conexión a la base de datos

exports.register = async (req, res) => {
  try {
    const { username, password, email, firstName, lastName, phoneNumber, role } = req.body;
    
    // Verificar si el nombre de usuario ya existe en la base de datos
    const existingUser = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Insertar el nuevo usuario en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO users (username, password, email, firstName, lastName, phoneNumber, role) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [username, hashedPassword, email, firstName, lastName, phoneNumber, role]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};

/*
const User = require('../models/Users'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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

module.exports = {
  login
};
*/
