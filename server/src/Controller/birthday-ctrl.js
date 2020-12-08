const axios = require('axios');
const birthdays = require('../Models/birthdayModel');
const mongoose= require('mongoose');
const Birthdays = mongoose.model('Birthdays',birthdays);
getBirthday = async (req,res) =>{
    Birthdays.find({},(err,birthdays)=>{
        if(err){
            console.log(err);
        }else{
            res.status(200).json(birthdays)
        }
    })
}

module.exports= {
    getBirthday
};