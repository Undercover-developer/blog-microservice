module.exports = {
    PORT: process.env.PORT || "7000",
    MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/blog-micro-service",
    REDIS_PORT: 6379
}