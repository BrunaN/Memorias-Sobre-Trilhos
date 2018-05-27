let Post = require('../models/post');

let Station = require('../models/station');
let User = require('../models/user');
let Comment = require('../models/comment');

module.exports.getPosts = function(req, res){
    let promise = Post.find()
                    .populate('user')
                    .populate('station')
                    .populate('comment');
    promise.then(
        function(posts){
            res.json(posts);
        }
    ).catch(
        function(error){
            res.status(500).send(error);
        }
    );
}

module.exports.getPostById = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id);
    promise.then(
        function(post){
            res.json(post);
        }
    ).catch(
        function(error){
            res.status(500).send("Não existe");
        }
    );
}

module.exports.insertPost = function(req, res){
    let promise = Post.create(req.body);
    promise.then(
        function(post){
            res.status(201).json(post);
        }
    ).catch(
        function(error){
            res.status(500).send(error);
        }
    );
}