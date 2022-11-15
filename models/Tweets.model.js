const mongoose = require('mongoose');

const tweetsSchema = mongoose.Schema({
    title: String,
    text: String,
    userid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    comment:[{type: 'ObjectId', ref: 'Comment'}]
})

const Tweets = mongoose.model('Tweets', tweetsSchema);

module.exports = Tweets;