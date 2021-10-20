const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config/config')
const routes = require('./routes/index')
const mongoConnection = require('./config/dbConnection')

mongoConnection(mongoose, config, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).connectToMongo()

//=========body-parser ============
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
routes(app, express)
app.listen(config.PORT, ()=> {
    console.log(`server running on ${config.PORT}`)
})