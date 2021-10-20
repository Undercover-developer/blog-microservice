module.exports = function dbService(Model) {
    const create = (data) => {
        const newEntry = new Model(data)
        return newEntry.save()
    }
    const find = () => Model.find()
    const findOne = (id) => Model.findOne({_id: id})
    const update = (id, data) => Model.findOneAndUpdate({_id: id}, data)
    const deleteOne = (id) => Model.findOneAndDelete()
    
    return {
        create,
        find,
        update,
        deleteOne
    }
}