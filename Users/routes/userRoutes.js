const controller = require('../controllers/userControllers')

module.exports = (express) => {
    const router = express.Router()
    router.post("/new", controller.NewUser)
    router.post("/post/new", controller.AddPost)
    router.post("/comment/new", controller.MakeComment)
    return router
}