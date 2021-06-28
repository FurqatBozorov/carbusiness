const express = require("express");
const bodyParser = require('body-parser'); 
const mongoose = require("mongoose");
const app = express();

app.use('/', require('./server/router/router'))

require('./server/database/database')()

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, ()=>{
    console.log("Server is runnig on port 3000");
});