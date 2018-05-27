let User = require('../models/user');

module.exports.getUsers = function(req, res){
    let promise = User.find();
    promise.then(
        function(users){
            res.json(users);
        }
    ).catch(
        function(error){
            res.status(500).end();
        }
    )
}

module.exports.getUserById = function(req, res){
    let id = req.params.id;
    let promise = User.findById(id);
    promise.then(
        function(user){
            res.json(user);
        }
    ).catch(
        function(error){
            res.status(404).send("Não existe");
        }
    )
}

module.exports.insertUser = function(req, res){
    let promise = User.create(req.body)
    promise.then(
        function(user){
            res.status(201).json(user);
        }
    ).catch(
        function(error){
            res.status(500).end();
        }
    )
}

module.exports.returnUser = function(req, res){
    let criterio = {'email': req.body.email, 'password': req.body.password};
    let promise = User.find(criterio);
    promise.then(
        function(user){
            res.json(user);
        }
    ).catch(
        function(error){
            res.status(404).send("Não existe");
        }
    )
}