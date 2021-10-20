const post = require("./post")

module.exports = function routes(app, express, redisClient) {
    app.use("/post", post(express, redisClient))
}