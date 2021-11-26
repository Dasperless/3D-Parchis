const Ficha = require("./Ficha");


module.exports = class Jugador {

    constructor(nombre,color = null){
        this.nombre = nombre;
        this.fichas = [];
        this.color = color;
        this.crearFicha(3);
    }

    establecerColor(color){
        for(var i=0 ; i<this.fichas.length; i++){
            ficha = this.fichas[i];
            ficha.color = color;
        }
        this.color = color;
    }

    haGanado(){
        for(var i=0 ; i<this.fichas.length; i++){
            ficha = this.fichas[i];
            if(ficha.estado !== EstadoFicha.GANO){
                return false;
            }
        }
        return true;
    }


    crearFicha(cantidad){
        for(var i=0 ; i<cantidad; i++){
            var ficha = new Ficha();
            this.fichas.push(ficha);
        }
    }

    


}