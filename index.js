const express = require('express');
const http =require('http')
const HTTP_SERVER = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// CONFIGURING CORS
HTTP_SERVER.use(cors());

// CONFIGURING BODY-PARSER
HTTP_SERVER.use(bodyParser.json());
// parse application/x-www-form-urlencoded
HTTP_SERVER.use(bodyParser.urlencoded({ extended: false }));

// BASIC SERVER CONFIGS
const port = 5000;
const localhost= '0.0.0.0'

HTTP_SERVER.listen(port, localhost, () => {
  console.log("SERVER STARTED IN ",`${localhost}:${port}` );
});

// INJECTING API SERVER
HTTP_SERVER.use('/', require('./app'));