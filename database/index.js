const Sequelize = require('sequelize');
const sequelize = new Sequelize('database','username','password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize
.authenticate()
.then(() => {
  console.log('database connected!');
})
.catch((err) => {
  console.log(`can't connect to database`, err);
})