require("dotenv").config();

module.exports={
    HOST : "127.0.0.1",
    PORT : 3306,
    DIALECT : "mysql",
    DB: "bookcrud",
    USERNAME:"root",
    PASSWORD: process.env.PASSWORD

}