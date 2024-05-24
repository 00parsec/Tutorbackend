const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 10000;  // Usa la variable de entorno PORT

app.use(bodyParser.json());
app.use(cors());

// Configuración de Sequelize
const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

// Uso de las rutas definidas
app.use('/', routes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(port, '0.0.0.0', () => {  // Escuchar en todas las interfaces
    console.log(`Server running on port ${port}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});

module.exports = app;


/*
--2
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 10000;  // Usa la variable de entorno PORT

app.use(bodyParser.json());
app.use(cors());

// Configuración de Sequelize
const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

// Uso de las rutas definidas
app.use('/', routes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(port, '0.0.0.0', () => {  // Escuchar en todas las interfaces
    console.log(`Server running on port ${port}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});

module.exports = app;

*/

/*
--1
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const routes = require('./routes');

require('dotenv').config();

const app = express();
//const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 10000

app.use(bodyParser.json());
app.use(cors());

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Esto puede ser necesario dependiendo de la configuración de tu base de datos
    }
  }
});

// Aquí debes definir tus modelos y asociaciones usando sequelize.define()

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});

module.exports = app;
*/
