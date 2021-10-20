const createUser = require('../services/user/createUser')
const createPost = require('../services/user/createPost')
const createComment = require('../services/user/createComment')

module.exports = {
    NewUser: (req, res, next) => {
        // validate data
        createUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }).then((user) => {
            res.json({msg:"new user created", user})
        }).catch((err) => {
            next(err)
        });
    },
    AddPost: (req, res, next) => {
        createPost({
            title: req.body.title,
            content: req.body.content,
            createdAt: new Date(),
            isPublished: req.body.publish,
            authorId: req.body.userId
        }).then((post) => {
            res.json(post)
        }).catch((err) => {
            next(err)
        });
    },
    MakeComment: (req, res, next) => {
        createComment({
            postId: req.body.postId,
            writerName: req.body.writerName,
            content: req.body.content,
            createAt: new Date()
        }).then((comment) => {
            res.json(comment)
        }).catch((err) => {
            next(err)
        });
    }
}