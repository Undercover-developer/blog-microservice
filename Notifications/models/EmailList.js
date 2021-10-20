const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmailListSchema = new Schema({
    email: String
});

const EmailList = mongoose.model('EmailList', EmailListSchema );

module.exports = EmailList
