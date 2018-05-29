let mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        station: {
            type: mongoose.Schema.ObjectId,
            ref: 'Station'
        },
        content: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        }
        // data: {

        // },
        // usersLikes: {
        //     type: mongoose.Schema.ObjectId,
        //     ref: 'User'
        // }
    })
    return mongoose.model('Post', schema);
}();