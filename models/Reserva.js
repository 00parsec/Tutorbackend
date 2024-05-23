
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');
const User = require('./Users');
const Tutoria = require('./Tutoria');

const Reserva = sequelize.define('Reserva', {
  reserva_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  clases_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Tutoria,
      key: 'clases_id'
    }
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

User.hasMany(Reserva, { foreignKey: 'usuario_id' });
Reserva.belongsTo(User, { foreignKey: 'usuario_id' });

Tutoria.hasMany(Reserva, { foreignKey: 'clases_id' });
Reserva.belongsTo(Tutoria, { foreignKey: 'clases_id' });

module.exports = Reserva;
