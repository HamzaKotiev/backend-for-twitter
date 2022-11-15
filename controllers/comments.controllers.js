const Comment = require('../models/Comments.model');

module.exports.commentSchema = {
    postComment: (req, res) => {
        Comment.create({
            user: req.body.user,
            text: req.body.text,
            tweets: req.body.tweets
        }).populate('Like').then((comment) => {
            res.json(comment)
        })
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndDelete(req.params.commentId).then(() => {
            res.json('comment delete')
        })
    },
    patchComment: (req, res) => {
        Comment.findByIdAndUpdate({_id: req.params.commentId},{$push: {Like: req.body.Like}},{new: true})
    },
    getComment: (req, res) => {
        Comment.find({}).then((comment) => {
            res.json(comment)
        })
    }
}