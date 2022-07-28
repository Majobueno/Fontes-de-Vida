require("dotenv").config()

const express = require('express');
const index = require('./routes/index.js');
const fontes = require('./routes/fontesRoutes.js');
const mongoose = require('./database/dbConnect.js');


const app = express()
mongoose.connect()

app.use(express.json())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
});

app.use('/', index);
app.use('/fontes', fontes);


module.exports = app