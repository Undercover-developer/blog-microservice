const Post = require('../../../entities/post')
module.exports = function updatePost({
    id,
    title,
    content,
    createdAt,
    isPublished,
    authorId,
    postRepository
}) {
    const updatedPost = Post({
        title,
        content,
        createdAt,
        isPublished,
        authorId,
    })
    return postRepository.findOnePost(id).then((found) => {
        if(!found) throw new Error('post not found')
        return postRepository.updatePost(id, updatedPost)
    })
}