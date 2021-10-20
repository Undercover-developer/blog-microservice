const controller = require('../controllers/commentControllers')

module.exports = (express) => {
    const router = express.Router()
    router.post("/new", controller.AddComment)
    router.get("/all", controller.GetAllComments)
    router.get("/:id", controller.GetOneComment)
    router.delete("/delete/:id", controller.DeleteComment)
    return router
}