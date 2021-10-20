module.exports = (express, app, config) => {
    //=========body-parser ============
    app.use(express.json())
    app.use(express.urlencoded({
        extended: false
    }))
}