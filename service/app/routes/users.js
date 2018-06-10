let controller = require('../controllers/users');
let multer  = require('multer');
let upload = multer({dest: 'uploads/'});

module.exports = function(app){
    app.get('/api/users', controller.getUsers);
    app.get('/api/users/:id', controller.getUserById);
    app.post('/api/users', upload.single('avatar'), controller.insertUser);
    app.post('/api/users/login', controller.returnUser);
    // app.get('/api/users', controller.getUsersFromStation);
}
