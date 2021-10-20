const redisClient = require('./redisClient')
const notificationService = require('../../services/notifySubscribers')

redisClient.subscribe('notify-subscribers', (err, channel) => {
    console.log(`subcribed to ${channel}`)
})
redisClient.on('message', (channel, message)=> {
    switch(channel) {
        case 'notify-subscribers':
            console.log(JSON.parse(message))
            notificationService(JSON.parse(message).title, JSON.parse(message).message )
    }
})