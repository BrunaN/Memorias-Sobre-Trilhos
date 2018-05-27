let controller = require('../controllers/users');

module.exports = function(app){
    app.get('/api/users', controller.getUsers);
    app.get('/api/users/:id', controller.getUserById);
    app.post('/api/users', controller.insertUser);
    app.post('/api/users/login', controller.returnUser);
}