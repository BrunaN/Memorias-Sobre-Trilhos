let controller = require('../controllers/comments');

module.exports = function(app){
    app.get('/api/comments', controller.getComments);
    app.get('/api/comments/:id', controller.getCommentById);
    app.post('/api/comments', controller.insertComment);
    app.get('/api/post/:id/comments', controller.getCommentsFromPost);
}