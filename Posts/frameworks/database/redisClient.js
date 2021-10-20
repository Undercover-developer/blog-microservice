module.exports = (redis, config) => {
    const redisClient = redis.createClient()
    redisClient.on('connect', () => {
        console.log('connected to redis')
    })
    redisClient.on('error', (err) => {
        console.log('ERROR: ', err)
    })
    return redisClient
}