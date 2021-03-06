let controller = require('../controllers/posts');
let multer  = require('multer');
let upload = multer({dest: 'uploads/'});

module.exports = function(app){
    app.get('/api/posts', controller.getPosts);
    app.get('/api/posts/:id', controller.getPostById);
    app.post('/api/posts', upload.single('content'), controller.insertPost);
    app.get('/api/stations/:id/posts', controller.getPostsFromStation);
    app.get('/api/user/:id/posts', controller.getPostsFromUser);
    app.get('/api/posts/:id/likes', controller.getLikes);
    app.put('/api/posts/:id', controller.updatePost);
    app.put('/api/posts/:id/like', controller.likePost);
    app.delete('/api/posts/:id', controller.deletePost);
}
