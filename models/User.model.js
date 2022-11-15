const mongoose = require('mongoose');
const Tweets = require('./Tweets.model');

const userSchema = mongoose.Schema({
    name: String,
    password: Number,
    nickname: String,
    tweets:[{type: 'ObjectId', ref: 'Tweet'}]
})

const User = mongoose.model('User', userSchema);

module.exports = User;