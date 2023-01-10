
const Sequelize =  require("sequelize");
const { DB, USERNAME, PASSWORD, HOST, PORT, DIALECT } = require("./config");

const sequelize = new Sequelize(DB,USERNAME,PASSWORD,{
    host: HOST,
    port:PORT,
    dialect:DIALECT,
});

sequelize.sync();
const db = {
    sequelize,
    Sequelize
}




module.exports =db;