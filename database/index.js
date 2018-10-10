const Sequelize = require('sequelize');
const sequelize = new Sequelize('donDataBase','root','', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const User = sequelize.define('user', {
  newColumn: {
    type: Sequelize.STRING
  },
  secondColumn: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

User.findAll()
.then(users => {
  console.log(users, 'we did it!');
});

sequelize
.authenticate()
.then(() => {
  console.log('database connected!');
})
.catch((err) => {
  console.log(`can't connect to database`, err);
});

module.exports.User = User;