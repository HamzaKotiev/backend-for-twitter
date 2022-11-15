const Tweet = require('../models/Tweets.model');

module.exports.tweetController = {
    postTweet: (req, res) => {
        Tweet.create({
            title: req.body.title,
            text: req.body.text,
            userid: req.body.userid,

        }).populate('Like').then((tweet) => {
            res.json(tweet)
        })
    },
    defaultTweet: (req, res) => {
        Tweet.findByIdAndDelete(req.params.tweetId).then(() => {
            res.json('delete')
        })
    },
    getAllTweet: (req, res) => {
        Tweet.find({}).then((tweet) => {
            res.json(tweet)
        })
    },
    getTweetById: (req, res) => {
        Tweet.findById(req.body.tweetId).then((tweet) => {
            res.json(tweet)
        })
    },
    patchTweetAddCommet: (req, res) => {
        Tweet.findByIdAndUpdate({_id: req.params.tweetId},{$push: {Comment: req.body.Comment}},{new: true}).then((tweet) => {
            res.json(tweet)
        })
    },
    addLikeById: (req, res) => {
        Tweet.findByIdAndUpdate({_id: req.params.tweetId},{$push: {Like: req.body.Like}},{new: true}).then((tweet) => {
            res.json(tweet)
        })
    }
}