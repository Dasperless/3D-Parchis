const servidorPython = require('./python-module/server-game');
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 6969;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })

// Clases
const Ficha = require('./parchis-logica/Ficha')
const Casilla = require('./parchis-logica/Casilla');
const Jugador = require('./parchis-logica/Jugador');

let partidas = [] // lista de partidasl


wss.on('connection', function connection(ws) {

  ws.on('message', function incoming(data) {

    dataString = data.toString(); //buffer a string
    datosObj = JSON.parse(dataString); //string a JSON
    if(datosObj.tipo === 'crearPartida'){
        partidas.push(datosObj); // agrega nueva partida a la lista
        
        servidorPython.nuevaPartida(datosObj);// comunicacion con python
    }
    else if(datosObj.tipo === 'unirsePartida'){
     servidorPython.unirsePartida(datosObj);
    }
    else if(datosObj.tipo === 'verRanking'){
      servidorPython.ranking(datosObj);
    }
   
    // console.log(datosObj.tipo);


    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {

        client.send(data.toString());
      }
    })


  })
})

server.listen(port, function() {
  console.log(`Server is listening on ${port}!`)
})


function jugar(){
  console.log("juando");
  const ficha = new Ficha();
  const casilla = new Casilla();
  const jugador = new Jugador('Juan');

}