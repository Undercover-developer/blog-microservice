const axiosClient = require('axios').default

module.exports = function createPost(post) {
    return axiosClient.post('http://localhost:1000/post/new', post).then((res) => res.data)
}