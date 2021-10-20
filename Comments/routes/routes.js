const commentRoutes = require('./commentRoutes')

module.exports = function routes(app, express) {
    app.use("/comment", commentRoutes(express))
}