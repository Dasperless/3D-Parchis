

module.exports = {
    
    nuevaPartida : function(datosJson){
        console.log("Crear nueva partida");
        console.log(datosJson);
    },

    unirsePartida : function (datosJson){
        console.log("Unirse a  partida");
        console.log(datosJson);
    },

    ranking : function(datosJson){
        console.log("Ver ranking");
        console.log(datosJson);
    }

};


// // Funcion en encargada de crear la nueva partida y enviar los datos a Python
// export function crearNuevaPartida(datosJson){
//     // crear nueva partida en python
//     console.log("Crear nueva partida");
//     console.log(datosJson);

// }


// //Funcion encargada de unir un jugador a una partida
// export function unirsePartida(datosJson){
//     console.log("Unirse a partida");
//     console.log(datosJson);
// }


// //Funcion encargada de recopilar y retornar los datos de ranking
// export function verRanking(datosJson){
//     console.log("verRanking");
//     console.log(datosJson);
// }