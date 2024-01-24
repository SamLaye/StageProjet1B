const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretKey = process.env.JWT_SECRET

// REGISTER 
async function registerUser (req, res) {
    let {firstName, lastName, userName, password} = req.body
    try{
        const duplicate = await User.find({userName});
        if(duplicate && duplicate.length > 0){
            return res.status(400).send({message: "User already registered with this userName"})
        }
        let user = new User({firstName, lastName, userName, password});
        let result = await user.save();
        console.log(result)
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}

// LOGIN
async function loginUser (req, res) {
    try{
        const {userName, password} = req.body
        const user = await User.findOne({userName})
        if(!user){
            return res.status(400).send({message: "Authentification failed! (sss)"})
        }
        const isPasswordValid = await user.comparePassWord(password)
        if(!isPasswordValid){
            return res.status(400).send({message: "Wrong password (sss)"})
        }
        const token = jwt.sign({userId: user?._id}, secretKey, {expiresIn: "1h"})
        const finalData = {
            userId: user?._id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            userName: user?.userName,
            token
        }
        res.send(finalData)
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}


const AuthControllers = {
    registerUser,
    loginUser
}

module.exports = AuthControllers;