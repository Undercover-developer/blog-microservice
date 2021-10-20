const userRoutes = require('./userRoutes')

module.exports = function routes(app, express) {
    app.use("/user", userRoutes(express))
}