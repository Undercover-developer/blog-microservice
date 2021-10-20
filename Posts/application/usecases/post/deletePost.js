module.exports = function deletePost(id, postRepository) {
    return postRepository.deletePost(id)
}