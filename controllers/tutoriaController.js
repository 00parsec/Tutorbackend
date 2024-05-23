const Tutoria = require('../models/Tutoria');

exports.createTutoria = async (req, res) => {
  try {
    const newTutoria = await Tutoria.create(req.body);
    res.status(201).json(newTutoria);
  } catch (error) {
    console.error("Error al crear la tutoría:", error);
    res.status(500).json({ message: 'Error al crear la tutoria', error });
  }
};


exports.getTutorias = async (req, res) => {
  try {
    const tutorias = await Tutoria.findAll();
    res.json(tutorias);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tutorias', error });
  }
};

exports.getTutoriaById = async (req, res) => {
  try {
    const tutoria = await Tutoria.findByPk(req.params.id);
    if (!tutoria) {
      return res.status(404).json({ message: 'Tutoria no encontrada' });
    }
    res.json(tutoria);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la tutoria', error });
  }
};
