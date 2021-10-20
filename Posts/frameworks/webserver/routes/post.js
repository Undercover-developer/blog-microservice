const postControllers = require("../../../adapters/controllers/postControllers");
const PostDbRepository = require("../../../application/repository/PostDbRepository");
const PostDbRepositoryImpl = require("../../database/repositories/PostRepository");

module.exports = function postRouter(express, redisClient){
    const router = express.Router()
    const controller = postControllers(PostDbRepository, PostDbRepositoryImpl, redisClient)
    router.post("/new", controller.AddNewPost)
    router.get("/all", controller.FindPost)
    router.get("/:id", controller.FindOnePost)
    router.post("/update/:id", controller.UpdatePost)
    router.delete("/delete/:id", controller.DeletePost)
    
    return router
}
