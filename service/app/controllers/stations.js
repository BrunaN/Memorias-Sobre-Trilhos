let Station = require('../models/station');

let User = require('../models/user');
let Post = require('../models/post');

module.exports.getStations = function(req, res){
    let promise = Station.find()
                    .populate('user')
                    .populate('post');
    promise.then(
        function(stations){
            res.json(stations);
        }
    ).catch(
        function(error){
            res.status(500).end();
        }
    )
}

module.exports.getStationById = function(req, res){
    let id = req.params.id;
    let criterio = {'id': id};
    let promise = Station.findOne(criterio)
                          .populate('user')
                          .populate('post');
    promise.then(
        function(station){
            res.json(station);
        }
    ).catch(
        function(error){
            res.status(404).send("Não existe");
        }
    )
}

module.exports.insertStation = function(req, res){
    let promise = Station.create(req.body)
    promise.then(
        function(station){
            res.status(201).json(station);
        }
    ).catch(
        function(error){
            res.status(500).send(error);
        }
    );
}

module.exports.UpdateStation = function(req, res){
    let id = req.params.id;
    let novo = req.params.novo;
    let promise = Station.findByIdAndUpdate(id, novo);
    promise.then(
        function(station){
            res.status(201).json(station);
        }
    ).catch(
        function(error){
            res.status(500).end();
        }
    )
}
