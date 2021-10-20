const Comment = require('../models/Comment')

module.exports = {
    AddComment: (req, res, next) => {
        const newComment = new Comment({
            postId: req.body.postId,
            writerName: req.body.writerName,
            content: req.body.content,
            createAt: new Date()
        })

        newComment.save()
        res.json({msg: "comment added successfully"})
    },
    GetAllComments: (req, res, next) => {
        Comment.find().then((post)=>{
            res.json(post)
        })
    },
    GetOneComment: (req, res, next) => {
        Comment.findOne({_id: req.params.id}).then((post)=>{
            if(!post) res.json({msg:"comment not found"})
            res.json(post)
        })
    },
    DeleteComment: (req, res, next) => {
        Comment.findOneAndDelete({_id: req.params.id}).then(()=>{
            res.json({msg:"comment successfully removed"})
        })
    }
}