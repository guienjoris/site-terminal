const express = require('express');
const dotenv = require("dotenv");
var cors = require('cors');
var bodyParser = require('body-parser');

const route = require('./Routes/index.js');
const qrCodeRouter = require('./Routes/qrcode-router.js')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', 
route,
qrCodeRouter
);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3001))
});