const Sequelize = require("sequelize");

const sequelize = new Sequelize('deboraagj','admin','admin', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}