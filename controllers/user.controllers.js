const User = require('../models/User.model')

module.exports.userController = {
    postUser: (req, res) => {
        User.create({
            name: req.body.name ,
            paseword: req.body.paseword ,
            nickname: req.body.nickname
        }).then((user) => {
            res.json(user)
        })
    },
    patchUser: (req, res) => {
        User.findByIdAndUpdate({_id: req.params.userId},{$push: {Tweet: req.body.Tweet}},{new: true}).then((user) => {
            res.json(user)
        })
    },
    defaultUser: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.json('delete')
        })
    },
    getAllUser: (req, res) => {
        User.find({}).then((user) => {
            res.json(user)
        })
    },
    getUserById: (req, res) => {
        User.findById(req.body.userId).then((user) => {
            res.json(user)
        })
    },
    gitUserUpdate: (req, res) => {
        User.find({}).populate('Seve').then((a) => {
            res.json(a)
        })
    }
}