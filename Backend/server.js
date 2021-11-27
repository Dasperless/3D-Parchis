const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 6969;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })

// Clases-logica
const Ficha = require('./parchis-logica/Ficha')
const Casilla = require('./parchis-logica/Casilla');
const Jugador = require('./parchis-logica/Jugador');
// const servidorPython = require('./python-module/server-game');


let partidas = [] // lista de partidas

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    dataString = data.toString(); //buffer a string
    datosObj = JSON.parse(dataString); //string a JSON
    if(datosObj.tipoMensaje === 'crearPartida'){
       crearNuevaPartida(datosObj);
       datosOBj = partidas.at(-1);
    }

    else if(datosObj.tipoMensaje === 'unirsePartida'){
    //  servidorPython.unirsePartida(datosObj);
    }

    else if(datosObj.tipoMensaje === 'verRanking'){
      // servidorPython.ranking(datosObj);
    }

    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        datosOBj.tipoMensaje = 'partidaCreada';
        client.send(datosObj.toString());
      }
    })


  })
})

server.listen(port, function() {
  console.log(`Server is listening on ${port}!`)
})


// *****************************************************************************************
// Funciones de creacion de objetos



// Funcion encargada de crear una nueva partida y almacenarla en la lista de partidas
function crearNuevaPartida(datosJson){
  var numeroRandom = Math.floor(Math.random() * 10000);
  var idPartida = numeroRandom + datosJson.nickname ;
  datosJson.identificador = idPartida;
  partidas.push(datosJson); // agrega nueva partida a la lista
  console.log(partidas);
}




function jugar(){
  console.log("juando");
  const ficha = new Ficha();
  const casilla = new Casilla();
  const jugador = new Jugador('Juan');

}