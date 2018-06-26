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
    let user = req.body;
    console.log(user);
    if(req.file){
      user.avatar = req.file.filename;
    }

    let promise = User.create(user)
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
    let promise = User.findOne(criterio);
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

module.exports.updateUser = function(req, res){
    let id = req.params.id;

    let user = req.body;
    if(req.file){
      user.avatar = req.file.filename;
    };

    console.log(user.avatar);

    let promise = User.findByIdAndUpdate(id, user);
    promise.then(
        function(user){
            let promise2 = User.findById(user._id);
            promise.then(
                function(new_user){
                    res.status(200).json(new_user);
                }
            ).catch(
                function(error){
                    res.status(404).send("Não existe");
                }
            )
        }
    ).catch(
        function(error){
            res.status(404).send("Não existe");
        }
    )
}
