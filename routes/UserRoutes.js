const express = require("express")
const userModel = require('../model/UserModel.js');
const app = express.Router()

/*
{
    "username": "avia",
    "email": "avia2@abc.ca",
    "password": "helloworld"
}
*/

// /api/user/signup
app.post('/signup', async (req, res) => {

    const newUser = new userModel(req.body);
    try{
        await newUser.save()
        res.status(201).send(newUser)
    }catch(error){
        res.status(500).send({message: "Unable to sign up"})
    }
       
});

// /api/user/login
app.post('/login', async (req, res) => {
    try{
        const findUser = userModel.findById(req.params.content)
        res.status(201).send({status: true, findUser, message: "User logged in successfully"})
    }catch(error){
        res.status(500).send({status: false, message: "Invalid Username and password"})
    }
    
});


module.exports = app