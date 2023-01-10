

const User = require("../models/user").User

exports.login = async (req, res)=>{
       
    try {
        const {email,password} = req.body
        const user = await User.findOne({where:{email, password}})

           user.password =undefined

        if (user) {
            res.status(200).json({
                user,
                message:"user found",
                status:true
              })
        } else return res.send("no user found")
        

    } catch (error) {
        console.log(error)
        res.status(400).json({
            message:"user not found",
          status:false
          })
    }
   


}