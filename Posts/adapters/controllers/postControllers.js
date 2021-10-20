const createPost = require("../../application/usecases/post/createPost");
const deletePost = require("../../application/usecases/post/deletePost");
const getOnePost = require("../../application/usecases/post/getOnePost");
const getPosts = require("../../application/usecases/post/getPosts");
const updatePost = require("../../application/usecases/post/updatePost");
module.exports = function postControllers(postRepository, postRepositoryImpl, redisClient){
    const dbRepository = postRepository(postRepositoryImpl())

    const AddNewPost = (req, res, next) => {
        redisClient.publish('postNotification', "new post created alert our users")
        createPost({
            title: req.body.title,
            content: req.body.content,
            createdAt: req.body.createdAt,
            isPublished: req.body.publish,
            authorId: req.body.authorId,
            postRepository: dbRepository
        }).then((post) => {
            res.json({msg: "new post added", post})
            redisClient.publish('notify-subscribers', JSON.stringify({title: req.body.title, message: "checkout our new post"}))
        }).catch((err) => {
            next(err)
        });
    }

    const FindPost = (req, res, next) => {
        getPosts(dbRepository).then((post) => {
            if(!post) res.json({msg: "no posts found"})
            res.json(post)
        }).catch((err) => {
            next(err)
        });
    }

    const FindOnePost = (req, res, next) => {
        getOnePost(req.params.id, dbRepository).then((post) => {
            if(!post) res.json({msg: "post not found"})
            res.json(post)
        }).catch((err) => {
            next(err)
        });
    }

    const UpdatePost = (req, res, next) => {
        updatePost({
            id: req.params.id,
            title: req.body.title,
            content: req.body.content,
            createdAt: req.body.createdAt,
            isPublished: req.body.isPublished,
            authorId: req.body.authorId,
            postRepository: dbRepository
        }).then((post) => {
            res.json(post)
        }).catch((err) => {
            next(err)
        });
    }

    const DeletePost = (req, res, next) => {
        deletePost(req.params.id, dbRepository).then(() => {
            res.json({msg: "post successfully deleted"})
        }).catch((err) => {
            next(err)
        });
    }

    return {
        AddNewPost,
        FindPost,
        FindOnePost,
        UpdatePost,
        DeletePost
    }
}