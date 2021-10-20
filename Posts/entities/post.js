module.exports = function post({
    title,
    content,
    createdAt,
    isPublished = false,
    authorId 
}) {
    return {
        getTitle: () => title,
        getContent: () => content,
        getCreatedAt: () => createdAt,
        getIsPublished: () => isPublished,
        getAuthorId: () => authorId
    }
}