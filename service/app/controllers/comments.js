let Comment = require('../models/comment');

let User = require('../models/user');
let Post = require('../models/post');

module.exports.getComments = function(req, res){
    let promise = Comment.find()
                    .populate('user')
                    .populate('post');
    promise.then(
        function(comments){
            res.json(comments);
        }
    ).catch(
        function(error){
            res.status(500).send(error);
        }
    );
}

module.exports.getCommentById = function(req, res){
    let id = req.params.id;
    let promise = Comment.findById(id);
    promise.then(
        function(comment){
            res.json(comment);
        }
    ).catch(
        function(error){
            res.status(500).send("Não existe");
        }
    );
}

module.exports.insertComment = function(req, res){
    let promise = Comment.create(req.body);
    promise.then(
        function(comment){
            res.status(201).json(comment);
        }
    ).catch(
        function(error){
            res.status(500).send(error);
        }
    );
}

module.exports.getCommentsFromPost = function(req, res){
    let id = req.params.id;
    let criterio = {'post': id};
    let promise = Post.find(criterio)
                    .populate('user' , '-password').exec();
    promise.then(
        function(comments){
            res.json(comments);
        }
    ).catch(
        function(error){
            res.status(500).send(error);
        }
    );
}