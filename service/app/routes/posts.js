let controller = require('../controllers/posts');

module.exports = function(app){
    app.get('/api/posts', controller.getPosts);
    app.get('/api/posts/:id', controller.getPostById);
    app.post('/api/posts', controller.insertPost);
    app.get('/api/stations/:id/posts', controller.getPostsFromStation);
}