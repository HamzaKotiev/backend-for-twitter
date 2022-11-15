const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    text: String,
    tweets: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Tweets'
    }
})

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;