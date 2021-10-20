const axiosClient = require('axios').default

module.exports = function createComment(comment) {
    return axiosClient.post('http://localhost:7000/comment/new', comment).then((res)=> res.data)
}