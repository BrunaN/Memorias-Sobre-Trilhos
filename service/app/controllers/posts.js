let Post = require('../models/post');

let Station = require('../models/station');
let User = require('../models/user');
let Comment = require('../models/comment');

module.exports.getPosts = function(req, res){
    let promise = Post.find()
                    .populate('user' , '-password')
                    .populate('station')
                    .populate('comment').exec();
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
    let promise = Post.findById(id)
                    .populate('user' , '-password')
                    .populate('station')
                    .populate('comment').exec();
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
    let promise = Post.create(req.body)
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

module.exports.getPostsFromStation = function(req, res){
    let id = req.params.id;
    let criterio = {'station': id}
    let promise = Post.find(criterio)
                    .populate('user' , '-password')
                    .populate('station')
                    .populate('comment')
                    .populate('likes').exec();
    promise.then(
        function(post){
            res.json(post);
        }
    ).catch(
        function(error){
            res.status(500).send("Não contém posts");
        }
    );
}


module.exports.getLikes = function(req, res){
    let id = req.params.id;

    let promise = Post.findById(id).exec();
    promise.then(
        function(post){
            res.status(200).json(post.likes);
        }
    ).catch(
        function(erro){
            res.status(500).send(error);
        }
    )
}

module.exports.updatePost = function(req, res){
    let id = req.params.id;

    let post = new Post({
        user: req.body.user,
        station: req.body.station,
        description: req.body.description,
        date: req.body.date,
        likes: req.body.likes,
        _id: id,
    })

    let promise = Post.findByIdAndUpdate(id, post);
    promise.then(
        function(post){
            res.status(200);
        }
    ).catch(
        function(error){
            res.status(500).send(error);
        }
    )
}