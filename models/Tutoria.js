
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');
const User = require('./Users');

const Tutoria = sequelize.define('Tutoria', {
  clases_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tutor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  asignatura: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  locacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  modalidad: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  disponibilidad: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  cupos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imagenUrl: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

User.hasMany(Tutoria, { foreignKey: 'tutor_id' });
Tutoria.belongsTo(User, { foreignKey: 'tutor_id' });

module.exports = Tutoria;
