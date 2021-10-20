module.exports = (mongoose, config, options) => {
    function connectToMongo(){
        mongoose.connect(config.MONGO_URL, options).then(() => {
           
        },
        (err)=>{
            if(err) console.error("MongoDb Error: ", err)
        }).catch((err) => {
            console.error("Error", err)
        });
    }
    mongoose.connection.on('connected', () => {
        console.info("Conected to MongoDb")
    })

    return {
        connectToMongo
    }
}