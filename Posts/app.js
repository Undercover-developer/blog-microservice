const express = require('express')
const mongoose = require('mongoose')
const redis = require('redis')
const server = require('./frameworks/webserver/server')
const config = require('./config/config')
const app = express()
const expressConfig = require('./frameworks/webserver/express')
const mongoConnection = require('./frameworks/database/connection')
const redisConnection = require('./frameworks/database/redisClient')
const routes = require('./frameworks/webserver/routes')

expressConfig(express, app, config)
server(app, config).startServer()
mongoConnection(mongoose, config, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).connectToMongo()
const redisClient = redisConnection(redis, config)
routes(app, express, redisClient)
module.exports = app
