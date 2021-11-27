const EstadoFicha = require('./EstadoFicha')

// const EstadoFicha = {
//     CASA: 0,
//     TABLERO : 1,
//     PASILLO : 2,
//     GANO : 3
// }


module.exports = class Ficha {
    constructor(color = null){
        
        this.color = color; 
        this.movimientos = 0;
        this.posicion = 0;
        this.estado = EstadoFicha.CASA;
    }

    sumarMovimientos(){
        this.movimientos +=1;
    }

    cambiarPosicion(nuevaPos){
        this.posicion = nuevaPos;
    }

    regresarCasa(){
        this.posicion = 0;
        this.movimientos =0;
        this.estado = EstadoFicha.CASA;
    }

    toString(){
        console.log("Estado: ",this.estado,"Posicion: "+ this.movimientos);
    }

}

