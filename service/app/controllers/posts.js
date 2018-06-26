let Post = require('../models/post');
let Station = require('../models/station');
let User = require('../models/user');
let Comment = require('../models/comment');

module.exports.getPosts = function (req, res) {
    let promise = Post.find()
        .populate('user', '-password')
        .populate('station')
        .populate('comment').exec();
    promise.then(
        function (posts) {
            res.json(posts);
        }
    ).catch(
        function (error) {
            res.status(500).send(error);
        }
    );
}

module.exports.getPostById = function (req, res) {
    let id = req.params.id;
    let promise = Post.findById(id)
        .populate('user', '-password')
        .populate('station')
        .populate('comment').exec();
    promise.then(
        function (post) {
            res.json(post);
        }
    ).catch(
        function (error) {
            res.status(500).send("Não existe");
        }
    );
}

module.exports.insertPost = function (req, res) {

    let post = req.body;

    if (req.file) {
        post.content = req.file.filename;
        console.log(req.file);
        /*let type = req.file.mimetype.split("/");
        type = type[type.length - 1];
        post.content += "." + type;*/
    }

    let promise = Post.create(post);

    promise.then(
        function (post) {
            res.status(201).json(post);
        }
    ).catch(
        function (error) {
            res.status(500).send(error);
        }
    );
}

module.exports.getPostsFromStation = function (req, res) {
    let id = req.params.id;
    let criterio = { 'station': id };
    let promise = Post.find(criterio)
        .populate('user', '-password')
        .populate('comment').exec();
    promise.then(
        function (post) {
            res.json(post);
        }
    ).catch(
        function (error) {
            res.status(500).send("Não contém posts");
        }
    );
}

module.exports.getPostsFromUser = function (req, res) {
    let id = req.params.id;
    let criterio = { 'user': id };
    let promise = Post.find(criterio)
        .populate('station')
        .populate('comment').exec();
    promise.then(
        function (post) {
            res.json(post);
        }
    ).catch(
        function (error) {
            res.status(500).send("Não contém posts");
        }
    );
}


module.exports.getLikes = function (req, res) {
    let id = req.params.id;

    let promise = Post.findById(id).exec();
    promise.then(
        function (post) {
            res.status(200).json(post.likes);
        }
    ).catch(
        function (erro) {
            res.status(500).send(error);
        }
    )
}

module.exports.updatePost = function (req, res) {
    let id = req.params.id;

    let post_updated = {
        user: req.body.user,
        station: req.body.station,
        description: req.body.description,
        date: req.body.date,
        likes: req.body.likes,
        _id: id,
    };

    let promise = Post.findById(id);
    promise.then(
        function (post) {
            let promise2 = Post.findByIdAndUpdate(post._id, req.body);
            promise2.then(
                function (post) {
                    res.status(200).json("Post updated");
                }
            ).catch(
                function (error) {
                    res.status(500).send(error);
                }
            )
        }
    ).catch(
        function (error) {
            res.status(500).send(error);
        }
    )
}


module.exports.likePost = function (req, res) {
    let id = req.params.id;

    let promise = Post.findById(id);
    promise.then(
        function (post) {
            let i;
            for (i = 0; i < post.likes.length; i++) {
                if (post.likes[i] == req.body.user._id) {
                    break;
                }
            }
            if (i == post.likes.length) {
                post.likes.push(req.body.user);
            } else {
                post.likes.splice(i, 1)
            }

            let promise2 = Post.findByIdAndUpdate(id, post);
            promise2.then(
                function (new_post) {
                    let promise3 = Post.findById(id)
                        .populate('user', '-password')
                        .populate('station').exec();
                    promise3.then(
                        function (post) {
                            res.status(200).json(post);
                        }
                    ).catch(
                        function (error) {
                            res.status(500);
                        }
                    )
                }
            ).catch(
                function (error) {
                    res.status(500);
                }
            )
        }
    ).catch(
        function (error) {
            res.status(404).send("Post not found");
        }
    )
}


module.exports.deletePost = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    promise.then(
        function (post){
            if(req.query.user == post.user){
                let promise1 = Post.remove({ '_id': id }).exec()
                promise1.then(
                    function (post_remove) {
                        res.status(200).json("Post removed");
                    }
                ).catch(
                    function (erro){
                        res.status(500).send(erro);
                    }
                )
            }else{
                res.status(401).send("Usuario inválido");
            }
        }
    ).catch (
        function(error){
            res.status(500).json(error);
        }   
    )
}