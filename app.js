


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 10000;

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);


// Comprobación de la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;



/*
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 10000;

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
      rejectUnauthorized: false
    }
  }
});

app.use('/', routes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});

module.exports = app;


*/


/*
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
