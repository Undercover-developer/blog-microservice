const redis = require('redis')
const redisClient = redis.createClient()
redisClient.on('connect', () => {
    console.log('connected to redis')
})
redisClient.on('error', (err) => {
    console.log('ERROR: ', err)
})

module.exports = redisClient