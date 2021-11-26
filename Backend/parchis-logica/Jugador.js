const Ficha = require("./Ficha");


module.exports = class Jugador {

    constructor(nombre,color = null){
        this.dado = [1,2,3,4,4,5,5,6,6]
        this.nombre = nombre;
        this.fichas = [];
        this.color = color;
        this.crearFicha(3);
    }

    establecerColor(color){
        for(var i=0 ; i<this.fichas.length; i++){
            var ficha = this.fichas[i];
            ficha.color = color;
        }
        this.color = color;
    }

    haGanado(){
        for(var i=0 ; i<this.fichas.length; i++){
            var ficha = this.fichas[i];
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


    tirarDado(){
        var index = Math.floor(Math.random() * this.dado.length);
        return this.dado[index];
    }

    elegirFicha(ficha){
        if(ficha >=0 && ficha<= this.fichas.length){
            return this.fichas[ficha];
        }
    }



    imprimirFichas(){
        for(var i=0 ; i<this.fichas.length; i++){
            var ficha = this.fichas[i];
            console.log("Ficha #",i,ficha.toString());
        }
    }

    


}