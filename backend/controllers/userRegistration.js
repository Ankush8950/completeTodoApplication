const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const User = require("../model/UserForm")

exports.home = (req, res) => {
    res.send("This is Home Page");
};

exports.register = async (req,res) => {
   try {
     const {firstname,lastname, email, password} = req.body

    if(!(firstname && lastname && email && password)){
       return res.send("All details are required")
    }

    const existingUser = await User.findOne({email})

    if(existingUser){
       return res.status(401).send("User already exist in database")
    }

    const EncryPassword = await bcrypt.hash(password,10)

     const user = await User.create({
        firstname,
        lastname,
        email,
        password: EncryPassword
    });

    console.log(user);
    const token = jwt.sign({
        id:user._id,email
    }, process.env.SECRET,{
        expiresIn: "2h"
    })

    user.token = token
    user.password = undefined

    res.status(201).json({
        success: true,
        message:"user registration successfull",
        user
    })
   } catch (error) {
    console.log(error)
        res.status(400).json({
            success: false,
            message: "user registration faild",
        })
   }
}


exports.login = async(req,res) =>{
    try {
        const {email,password} = req.body
        
        if(!(email && password)){
         return res.status(401).send("email and password required")
        }

        const findUser = await User.findOne({email})


        if(findUser && (await bcrypt.compare(password,findUser.password))){
            const token = jwt.sign({
                id: findUser._id,
                email
            },process.env.SECRET,{
                expiresIn: "2h"
            })

            findUser.token = token
            findUser.password = undefined

            const option = {
                expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
                httpOnly : true
            }

            // console.log(findUser);

            return res.status(201).cookie("token" ,token,option).json({
                success:true,
                message: "user login successful", 
                token,
                findUser
            })

        }
        res.status(401).send("user details incorrect")
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"user login faild"
        })
    }
}



exports.logOut = async (req, res) => {
   try {
     res.cookie("cookie", null, {
         expires: new Date(Date.now()),
         httpOnly: true
     })
     res.status(200).json({
         success: true,
         massage: "Logged Out"
     })
   } catch (error) {
    console.log(error);
   }
}