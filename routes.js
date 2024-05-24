
const express = require('express');
const router = express.Router();

const tutoriaController = require('./controllers/tutoriaController');
const reservaController = require('./controllers/reservaController');
const userController = require('./controllers/userController');

// Rutas de tutorías
router.post('/api/tutorias', tutoriaController.createTutoria);
router.get('/api/tutorias', tutoriaController.getTutorias);
router.get('/api/tutorias/:id', tutoriaController.getTutoriaById);

// Rutas de reservas
router.post('/api/reservas', reservaController.createReserva);
router.get('/api/reservas', reservaController.getReservas);

// Rutas de usuarios
router.post('/api/register', userController.register);
router.post('/api/login', userController.login);

module.exports = router;


/*

const express = require('express');
const router = express.Router();

const tutoriaController = require('./controllers/tutoriaController');
const reservaController = require('./controllers/reservaController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

// Rutas de tutorías
router.post('/api/tutorias', tutoriaController.createTutoria);
router.get('/api/tutorias', tutoriaController.getTutorias);
router.get('/api/tutorias/:id', tutoriaController.getTutoriaById);

// Rutas de reservas
router.post('/api/reservas', reservaController.createReserva);
router.get('/api/reservas', reservaController.getReservas);

// Rutas de usuarios y autenticación
router.post('/api/register', userController.register);
router.post('/api/login', authController.login);

module.exports = router;

*/
