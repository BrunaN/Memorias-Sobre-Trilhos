//Para executar basta fazer ./mongo < estacoes.js

use memoriasobretrilhos;
db.stations.drop();

var estacoes = ["Fortaleza", "Pacatuba", "Baturité", "Caio Prado", "Quixadá", "Quixaramobim", "Senador Pompeu", "Piquet Carneiro", "Acopiara", "Iguatu", "Baixio"];

for(var i=0, s=estacoes.length; i<s; i++){
  var estacao = {id: ""+(i+1), name:estacoes[i], photo:"station"+(i+1)+".jpg", users:[], posts: []};
  db.stations.insert(estacao);
}
