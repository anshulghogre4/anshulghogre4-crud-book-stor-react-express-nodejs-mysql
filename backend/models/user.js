const {sequelize,Sequelize} = require("../config/db");
const {STRING} = Sequelize.DataTypes;

const User =  sequelize.define("users",{
    name: STRING,
    email:{
        type:STRING,
        unique: true,
    },
    password:STRING,
},{
    timestamps: false
})

module.exports ={User}