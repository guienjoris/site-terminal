const express = require('express');
const dotenv = require("dotenv").config();
var cors = require('cors');
var bodyParser = require('body-parser');

const route = require('./Routes/index.js');
const qrCodeRouter = require('./Routes/qrcode-router.js');
const birthDayRouter = require("./Routes/birthday-router.js");
const app = express();
const mongoose = require("mongoose");
const dbUrlBirthDay = process.env.URL_MONGO_BIRTHDAY;
const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrlBirthDay, options, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Your database is operational...");
  }
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', 
route,
qrCodeRouter,
birthDayRouter
);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3001))
});