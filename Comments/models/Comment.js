const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    postId:{
        type: Schema.Types.ObjectId,
        ref: 'post'
    },
    writerName: String,
    content: String,
    createAt: String
});

const Comment = mongoose.model('Comment', CommentSchema );
module.exports = Comment