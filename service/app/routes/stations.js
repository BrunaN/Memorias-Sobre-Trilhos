let controller = require('../controllers/stations');

module.exports = function(app){
    app.get('/api/stations', controller.getStations);
    app.get('/api/stations/:id', controller.getStationById);
    app.post('/api/stations', controller.insertStation);
}