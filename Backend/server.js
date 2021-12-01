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
let ranking = require('./ranking.json')


// WebSocket server
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    var dataString = data.toString(); //buffer a string
    var datosObj = JSON.parse(dataString); //string a JSON
    var datosTemp;

    // Manejo de datos e informacion al recibir mensajes
    if(datosObj.tipoMensaje === 'crearPartida'){
       crearNuevaPartida(datosObj);
      //  datosObj = partidas[partidas.length-1];
       console.log(datosObj);
    }
    else if(datosObj.tipoMensaje === 'unirsePartida'){
      unirJugadorPartida(datosObj);
    }
    else if(datosObj.tipoMensaje === 'verRanking'){
      // servidorPython.ranking(datosObj);
    }
    else if(datosObj.tipoMensaje === 'iniciarPartida'){
        // iniciarPartidaLogica
       
        ordenarJugadores();
        iniciarPartidaLogica();
    }
    else if(datosObj.tipoMensaje === 'jugandoPartida'){
      // servidorPython.ranking(datosObj);
    }
    else if(datosObj.tipoMensaje === 'tirarDado'){
      // servidorPython.ranking(datosObj);
      
    }
    else if(datosObj.tipoMensaje === 'moverFicha'){
      // servidorPython.ranking(datosObj);
      datosTemp = moverFicha(datosObj);
      
    }
    
   


    wss.clients.forEach(function each(client) {
      // if (client !== ws && client.readyState === WebSocket.OPEN) {
        
      // }

      // Manejo de envio de informacion con respecto a un mensaje especifico
      if(datosObj.tipoMensaje === 'crearPartida'){
        // datosObj.tipoMensaje = 'nuevoJuego';
        // var partida = partidas[partidas.length-1];
        // enviarPartidaNueva(client,partida);
        enviarPartidas(client);
      }
      else if(datosObj.tipoMensaje === 'unirsePartida'){
        // datosObj.tipoMensaje = 'unirsePartida';
        // enviarDatosPartida(client,datosObj);
        enviarPartidas(client);
      }
      else if(datosObj.tipoMensaje === 'getPartidas'){
        enviarPartidas(client);
      }
      else if(datosObj.tipoMensaje === 'iniciarPartida'){
        enviarPartidaIniciada(client,datosObj);
      }
      else if(datosObj.tipoMensaje === 'tirarDado'){
        enviarResultadoDado(client,datosObj);
      }
      else if(datosObj.tipoMensaje === 'moverFicha'){
        enviarDatosFicha(client,datosTemp);
      }
      else if(datosObj.tipoMensaje === 'estadisticas'){
        datosEstadistica(client,datosObj)
      }
      else if(datosObj.tipoMensaje === 'verRanking'){
        // servidorPython.ranking(datosObj);
        enviarDatosRanking(client);
      }
      
      
    })


  })
})
server.listen(port, function() {
  console.log(`Server is listening on ${port}!`)
})


// ****************************************************************************************
// Funciones de mensajeria 

function enviarDatosFicha(socketClient,datosJson){
  socketClient.send(JSON.stringify(datosJson));
}


function enviarResultadoDado(socketClient,datosJson){
  var resDado = tirarDado(datosJson);
  var resultadoDado = 4;
  const resultado = {
    tipoMensaje : 'resultadoDado',
    nickname : datosJson.nickname,
    resultadoDado: resDado
  }
  socketClient.send(JSON.stringify(resultado));
}



function enviarPartidaIniciada(socketClient,datosJson){
  var idPartida = datosJson.idPartida;
  var partida = buscarPartida(idPartida);
  var jugadores = partidaParchis.jugadores;
  var colores = [];

  for (let i = 0; i < partidaParchis.jugadores.length; i++) {
    const jugador = partidaParchis.jugadores[i];

    

    let objeto = {
      nickname: jugador.nombre,
      color: jugador.color
    }
    colores.push(objeto);
  }

  const datosPartida = {
    tipoMensaje: "juegoIniciado",
    idPartida: idPartida,
    turnoDe: jugadores[0].nombre,
    color: colores
  }
  socketClient.send(JSON.stringify(datosPartida));
}


function enviarPartidaNueva(socketClient,datosJson){
  socketClient.send(JSON.stringify(datosJson));
}

function enviarDatosPartida(socketClient,datosJson){
    var idPartida = datosJson.idPartida;
    var partida = buscarPartida(idPartida);
    socketClient.send(JSON.stringify(partida));
}



function enviarPartidas(socketClient){
  // partidas[0].tipoMensaje = 'totalPartidas';
  socketClient.send(JSON.stringify(partidas));

}

function enviarDatosEstadistica(socketClient,datos){
  socketClient.send(JSON.stringify(datos));
}


function enviarDatosRanking(socketClient){
  socketClient.send(JSON.stringify(ranking));
}


// *****************************************************************************************
// Funciones de manejo de datos 





function datosEstadistica(socketClient,datosJson){
  var identificadorPartida = datosJson.idPartida;
  console.log("idPartida:",identificadorPartida);
  var partida = buscarPartida(identificadorPartida);

  const datosPartida = {
    tipoMensaje: 'datosEstadistica',
    idPartida: identificadorPartida,
    creador: partida.nickname,
    jugadores: partida.listaJugadores
  }

  enviarDatosEstadistica(socketClient,datosPartida);


}




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
  partidaParchis = new Parchis();
  var numeroRandom = Math.floor(Math.random() * 10000);
  var idPartida = numeroRandom + datosJson.nickname ;
  datosJson.identificador = idPartida;
  partidas.push(datosJson); // agrega nueva partida a la lista

  var nombre = datosJson.nickname;

  unirJugadorPartidaLogica(nombre);
  // console.log(partidas);
}




// *************************************************************************************************
// Funciones de manejo de objetos y logica


function moverFicha(datosJson){

  // console.log("Turno: ",partidaParchis.turno);
  var dado = datosJson.dado;
  var idFicha = datosJson.idFicha.slice(-1);
  var jugador = partidaParchis.retornarTurno();
  var ficha = jugador.fichas[idFicha];


  partidaParchis.moverFicha(jugador,ficha,dado);

  // if(ficha.comioFicha()){
  //   console.log("Entra en comio ficha")
  //   dado = 20;
  // }else{
    partidaParchis.pasarTurno();
  // }


  var posFicha = ficha.posicion;

  // partidaParchis.pasarTurno();
  // console.log("turno nuevo: ",partidaParchis.turno);
  var jugadorNuevoTurno = partidaParchis.retornarTurno();


  var turnoNuevo = jugadorNuevoTurno.nombre;
  // console.log("Jugador nuevo turno: ",turnoNuevo);

  var colorPasillo = jugador.color;
  
  var pasillo= 0 ;

  if(ficha.movimientos >= 64){
    pasillo = 1
  }

  const datos = {
    tipoMensaje: 'movimientoFicha',
    idFicha: datosJson.idFicha,
    posFicha: posFicha,
    color: colorPasillo,
    turnoJugador: turnoNuevo,
    enPasillo: pasillo

  }

  console.log("Datos enviados en enviarFicha: ",datos);

  console.log("Imprimiendo tablero: " );
  partidaParchis.tablero.imprimirTablero();
  return datos;
  // enviarDatosFicha(socketClient,datos);


}


function tirarDado(datosJson){
  var nombre = datosJson.nickname;
  var jugador = partidaParchis.retornarTurno();
  var resDado = jugador.tirarDado();
  return resDado;

}


function unirJugadorPartidaLogica(nombre){
  partidaParchis.agregarJugador(nombre);
  // console.log("Jugadores en partida(Clase parchis):  " , partidaParchis.jugadores);
  // iniciarPartidaLogica();
}


function ordenarJugadores(){
  partidaParchis.ordenarJugadores();
}


// Inicia partida a nivel logico
function iniciarPartidaLogica(){
  // partidaParchis.iniciarPartida();


}