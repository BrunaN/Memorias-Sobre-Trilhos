let mongoose = require('mongoose');
module.exports = function(){
    let schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
        // state: {
        //     type: mongoose.Schema.ObjectId,
        //     ref:'',
        //     required: true
        // },
        // city: {
        //     type: mongoose.Schema.ObjectId,
        //     ref: '',
        //     required: true
        // },
        // posts: {
        //     type: mongoose.Schema.ObjectId,
        //     ref: ''
        // }
    });
    return mongoose.model('User', schema);
}();