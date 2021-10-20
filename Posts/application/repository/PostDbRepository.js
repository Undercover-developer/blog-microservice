module.exports = function postDbRepository(repository) {
    const addPost = (post) => repository.addPost(post)
    const findAllPosts = () => repository.findAllPosts()
    const findOnePost = (id) => repository.findOnePost(id)
    const updatePost = (id, post) => repository.updatePost(id, post)
    const deletePost = (id) => repository.deletePost(id)
    return {
        addPost,
        findAllPosts,
        findOnePost,
        updatePost,
        deletePost
    }
}