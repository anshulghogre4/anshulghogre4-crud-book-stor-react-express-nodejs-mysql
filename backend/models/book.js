const {sequelize,Sequelize} = require("../config/db");
const {STRING,INTEGER} = Sequelize.DataTypes;

/*
"id": 1,
                "title": "So Alice got up.",
                "author": "Grady Harris",
                "genre": "Qui",
                "description": "Alice, 'but I know all sorts of things, and she, oh! she knows such a hurry that she had been found and handed back to them, and considered a little, half expecting to see it pop down a very little!.",
                "published": "1997-06-21",
                "publisher": "Velit Incidunt"
*/
const Book =  sequelize.define("books",{
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: STRING,
    author: STRING,
    genre: STRING,
    description: STRING,
    published: STRING,
    publisher: STRING,

}, {
    timestamps: false
}
   )


   

module.exports ={Book}