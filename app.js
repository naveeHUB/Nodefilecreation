const express = require('express');
const APP_SERVER = express();

// REGISTER ALL THE CONTROLLER IN APP SERVER
APP_SERVER.use('/File', require('./Controllers/files.controllers'));



module.exports = APP_SERVER;