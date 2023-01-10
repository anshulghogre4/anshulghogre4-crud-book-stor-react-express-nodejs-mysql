const { json } = require("body-parser");
const User = require("../models/user");

exports.login = async (req, res)=>{
        const {email,password} = req.body
      const user = await User.findOne({where:{email, password}})
      res.status(200),json({
        user,
        message:"user found"
      })


}