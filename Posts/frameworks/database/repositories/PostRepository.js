const Post = require('../models/Post')

module.exports = function postRepository() {
    const addPost = (post) => {
        const newPost = new Post({
            title: post.getTitle(),
            content: post.getContent(),
            createdAt: post.getCreatedAt(),
            isPublished: post.getIsPublished(),
            authorId: post.getAuthorId()
        })
        return newPost.save()
    }

    const findAllPosts = () => Post.find()

    const findOnePost = (id) => Post.findOne({_id: id})

    const updatePost = (id, post) => {
        const updatedPost = {
            title: post.getTitle(),
            content: post.getContent(),
            createdAt: post.getCreatedAt(),
            isPublished: post.getIsPublished(),
            authorId: post.getAuthorId()
        }
        
        return Post.findOneAndUpdate({_id: id}, updatedPost)
    }

    const deletePost = (id) => Post.findOneAndDelete({_id: id})

    return {
        addPost,
        findAllPosts,
        findOnePost,
        updatePost,
        deletePost
    }
}