let controller = require('../controllers/upload');
let multer  = require('multer');
let upload = multer({dest: 'uploads/'});

module.exports = function(app){
    app.post('/api/uploadImage', upload.single('image'), controller.uploadImage);
}
