const Post = require('../../../entities/post')
module.exports = function createPost({
    title,
    content,
    createdAt,
    isPublished,
    authorId,
    postRepository
}) {
    const newPost = Post({
        title,
        content,
        createdAt,
        isPublished,
        authorId
    })
    return postRepository.addPost(newPost)
}