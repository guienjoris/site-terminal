const mongoose = require('mongoose');

const birthdayModel = new mongoose.Schema( {
dateNaissance: String,
date: String,
who: String
})

module.exports = birthdayModel;
