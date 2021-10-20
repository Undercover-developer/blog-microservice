
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    content: String,
    createdAt: String,
    isPublished: Boolean,
    authorId: String
    // authorId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'user'
    // }
});

const Post = mongoose.model('Post', PostSchema );

module.exports = Post