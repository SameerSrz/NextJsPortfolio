const express = require("express")
const path = require("path")
const router = express.Router();

const sendMail = require('./sendMail');

router.post('/contact_api',async(req,res)=>{
    const {name,email,subject,message} = req.body;
    console.log(req.body)

    try{
        await sendMail({
            email: `${email}`,
            subject: `${subject}`,
            message: `${message}`,
            name: `${name}`,
        })
        res.status(201).json({
            success: true,
            message: `Email has been sent.`
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err,
        })
    }

})