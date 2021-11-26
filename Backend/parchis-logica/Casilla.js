

const TipoCasilla = require('./TipoCasilla')

// const TipoCasilla = {
//     NORMAL : 0,
//     SEGURA : 1,
//     INICIO : 2,
//     PASILLO: 3,_[]
//     META : 4
// }


module.exports = class Casilla{
    constructor(tipo,color = null,numero = null){
        this.tipo = tipo;
        this.fichas = [];
        this.color = color;
        this.numero = numero;

    }

    colocarFicha(ficha){
        if(this.fichas.length > 0 ){
            if(this.tipo === TipoCasilla.NORMAL){
                console.log("Se comio una ficha");
                fichaTemp = this.fichas.pop();
                fichaTemp.regresarCasa();
            }
        } 
        else{
            ficha.sumarMovimientos();
            ficha.cambiarPosicion();
            this.fichas.push();
        }
    }

    sePuedeColocarFicha(){
        return this.fichas.length !== 2;
    }

    sacarFicha(ficha){
        if (this.fichas.length > 0){
            ficha.cambiarPosicion(ficha.posicion+1);
            const index = this.fichas.indexOf(ficha);
            if (index > -1) {
                this.fichas.splice(index, 1);
            }

        }
    }


}