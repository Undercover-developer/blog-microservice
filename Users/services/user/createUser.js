const User = require('../../models/User')
const userDb = require('../db/dbService')(User)

module.exports = function createUserService(userData) {
    return userDb.create(userData)
}