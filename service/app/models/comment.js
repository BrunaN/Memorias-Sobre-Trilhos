let mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        post: {
            type: mongoose.Schema.ObjectId,
            ref: 'Post'
        },
        text: {
            type: String,
            require: true
        },
        date: {
            type: Date,
            require: true
        },
        likes: {
            type: [mongoose.Schema.ObjectId],
            ref: 'User'
        }
    });
    return mongoose.model('Comment', schema);
}();
