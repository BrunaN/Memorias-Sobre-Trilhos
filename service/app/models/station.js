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
        }
    });
    return mongoose.model('Station', schema);
}();
