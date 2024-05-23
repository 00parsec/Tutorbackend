
const Reserva = require('../models/Reserva');

exports.createReserva = async (req, res) => {
  try {
    const newReserva = await Reserva.create(req.body);
    res.status(201).json(newReserva);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la reserva', error });
  }
};

exports.getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las reservas', error });
  }
};
