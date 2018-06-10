let mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            require: true
        },
        station: {
            type: mongoose.Schema.ObjectId,
            ref: 'Station',
            require: true
        },
        content: {
            type: String
        },
        description: {
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
    })
    return mongoose.model('Post', schema);
}();
