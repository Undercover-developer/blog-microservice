module.exports = (app, config) => {
    function startServer() {
        app.listen(config.PORT, ()=> {
            console.log(`server started on port ${config.PORT}`)
        })
    }
    return {
        startServer
    }
}