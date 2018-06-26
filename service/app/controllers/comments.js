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
    let promise = Comment.find(criterio)
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

module.exports.deleteComment = function(req, res){
    let id = req.params.id;
    let promise = Comment.findById(id).exec();
    promise.then(
        function (comment){
            if(req.query.user == comment.user){
                let promise1 = Comment.remove({ '_id': id }).exec()
                promise1.then(
                    function (comment_remove) {
                        res.status(200).json("Comment removed");
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


module.exports.likeComment = function (req, res) {
    let id = req.params.id;

    let promise = Comment.findById(id);
    promise.then(
        function (comment) {
            let i;
            for (i = 0; i < comment.likes.length; i++) {
                if (comment.likes[i] == req.body.user._id) {
                    break;
                }
            }
            if (i == comment.likes.length) {
                comment.likes.push(comment.body.user);
            } else {
                comment.likes.splice(i, 1)
            }

            let promise2 = Comment.findByIdAndUpdate(id, post);
            promise2.then(
                function (new_comment) {
                    let promise3 = Comment.findById(id)
                        .populate('user', '-password')
                        .populate('post').exec();
                    promise3.then(
                        function (comment) {
                            res.status(200).json(comment);
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
