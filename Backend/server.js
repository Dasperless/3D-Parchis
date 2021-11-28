const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 6969;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })


// import  Clases-logica
const Ficha = require('./parchis-logica/Ficha')
const Casilla = require('./parchis-logica/Casilla');
const Jugador = require('./parchis-logica/Jugador');
const Parchis = require('./parchis-logica/Parchis');

let partidas = [] // lista de partidas
var partidaParchis = new Parchis();



// WebSocket server
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    var dataString = data.toString(); //buffer a string
    var datosObj = JSON.parse(dataString); //string a JSON

    if(datosObj.tipoMensaje === 'crearPartida'){
       crearNuevaPartida(datosObj);
       datosObj = partidas[partidas.length-1];
       console.log(datosObj);
    }


    else if(datosObj.tipoMensaje === 'unirsePartida'){
      unirJugadorPartida(datosObj);
    }

    else if(datosObj.tipoMensaje === 'verRanking'){
      // servidorPython.ranking(datosObj);
    }

   

    wss.clients.forEach(function each(client) {
      // if (client !== ws && client.readyState === WebSocket.OPEN) {
        
      // }
      if(datosObj.tipoMensaje === 'crearPartida'){
        datosObj.tipoMensaje = 'partidaCreada';
        enviarPartidaNueva(client,datosObj);
      }
      else if(datosObj.tipoMensaje === 'unirsePartida'){
        datosObj.tipoMensaje = 'unirsePartida';
        enviarDatosPartida(client,datosObj);
      }
      else if(datosObj.tipoMensaje === 'getPartidas'){
        enviarPartidas(client);
      }
      
      
    })


  })
})
server.listen(port, function() {
  console.log(`Server is listening on ${port}!`)
})


// ****************************************************************************************
// Funciones de mensajeria 

function enviarPartidaNueva(socketClient,datosJson){
  socketClient.send(JSON.stringify(datosJson));
}

function enviarDatosPartida(socketClient,datosJson){
    var idPartida = datosJson.idPartida;
    var partida = buscarPartida(idPartida);
    socketClient.send(JSON.stringify(partida));
}

function enviarPartidas(socketClient){
  socketClient.send(JSON.stringify(partidas));

}



// *****************************************************************************************
// Funciones de manejo de datos 

// Funcion para buscar una partida especifica
function buscarPartida(identificador){
  var res;
  partidas.forEach(element => {
    if(element.identificador === identificador){
      res = element;
    }

  });
  return res;
}


// Funcion encargada de unir un jugador a una partida
function unirJugadorPartida(datosJson){
  console.log(datosJson);
    var nombreJugador = datosJson.nickname;
    var idPartida = datosJson.idPartida;
    var partida = buscarPartida(idPartida);
    if(partida === undefined){
      console.log("[ERROR] = Partida no encontrada");
      return;
    }
    partida.listaJugadores.push(nombreJugador);
    partida.cantidadJugadoresUnidos = partida.cantidadJugadoresUnidos*1;
    partida.cantidadJugadoresUnidos+=1;
    
    unirJugadorPartidaLogica(nombreJugador); // une un jugador a la clase Parchis

    console.log("Datos Partida: " ,partida);
    
}


// Funcion encargada de crear una nueva partida y almacenarla en la lista de partidas
function crearNuevaPartida(datosJson){
  var numeroRandom = Math.floor(Math.random() * 10000);
  var idPartida = numeroRandom + datosJson.nickname ;
  datosJson.identificador = idPartida;
  partidas.push(datosJson); // agrega nueva partida a la lista
  // console.log(partidas);
}






// *************************************************************************************************
// Funciones de manejo de objetos y logica

function unirJugadorPartidaLogica(nombre){
  partidaParchis.agregarJugador(nombre);
  console.log("Jugadores en partida(Clase parchis):  " , partidaParchis.jugadores);
  iniciarPartidaLogica();
}


function iniciarPartidaLogica(){
  partidaParchis.iniciarPartida();
}