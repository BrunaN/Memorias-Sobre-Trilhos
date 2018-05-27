let mongoose = require('mongoose');
module.exports = function(){
    let schema = mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        photo: {
            type: String,
            require: true
        },
        users: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        posts: {
            type: mongoose.Schema.ObjectId,
            ref: 'Post'
        }
    });
    return mongoose.model('Station', schema);
}();