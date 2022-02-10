const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemaDeCadastro', 'root','160402Mv+',{
    dialect: 'mysql',
    host: 'localhost',
    dialectOptions: {
        socketPath: "/var/run/mysqld/mysqld.sock"
    }
})

module.exports = sequelize;