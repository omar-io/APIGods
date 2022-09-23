const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sqlite://db.sqlite');

//al trabajar con módulos, al final de cada JS
//hay que indicar a qué tendrán accesos otros módulos con:
module.exports = sequelize;