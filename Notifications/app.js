const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongoConnection = require('./config/dbConnection')
const config = require('./config/config')
require('./subscribers/redis/subscribers')

mongoConnection(mongoose, config, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).connectToMongo()

app.listen(config.PORT, ()=> {
    console.log(`Notification server started on ${config.PORT}`)
})