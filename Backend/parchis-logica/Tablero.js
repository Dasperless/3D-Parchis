const Color = require("./Color")
const Casilla = require("./Casilla")
const TipoCasilla = require("./TipoCasilla")

module.exports = class Tablero {
    
    constructor(){
        this.tablero = [];
        this.pasilloAmarillo = []
        this.pasilloAzul = []
        this.pasilloRojo = []
        this.pasilloVerde = []
        this.crearTablero();
    }

    /**
     * Crea el tablero de parchis
     */
    crearTablero(){
        var casillas = [12,17,29,34,46,51,63,68];
        for (let i =1; i<69; i++){
            if(i==5){
                this.tablero.push(new Casilla(TipoCasilla.INICIO,Color.AMARILLO,i))
            }else if(i==22){
                this.tablero.push(new Casilla(TipoCasilla.INICIO,Color.AZUL,i))
            }else if(i==39){
                this.tablero.push(new Casilla(TipoCasilla.INICIO,Color.ROJO,i))
            }else if(i==56){
                this.tablero.push(new Casilla(TipoCasilla.INICIO,Color.VERDE,i))
            }else if(casillas.includes(i)){
                this.tablero.push(new Casilla(TipoCasilla.SEGURA,null,i))
            }else{
                this.tablero.push(new Casilla(TipoCasilla.NORMAL,null,i))
            }
        }
        for (let i =1; i<9; i++){
            this.pasilloAmarillo.push(new Casilla(TipoCasilla.PASILLO,Color.AMARILLO,i));
            this.pasilloAzul.push(new Casilla(TipoCasilla.PASILLO,Color.AZUL,i));
            this.pasilloRojo.push(new Casilla(TipoCasilla.PASILLO,Color.ROJO,i));
            this.pasilloVerde.push(new Casilla(TipoCasilla.PASILLO,Color.VERDE,i));
        }
    }

    /**
     * Devuelve la casilla en la posicion indicada, de forma circular (1 es el primer indice)
     * @param {int} posicion La posicion de la casilla que se quiere obtener.
     * @returns {Casilla} La casilla en la posicion indicada.
     */
    obtenerCasilla(posicion){
        return this.tablero[(posicion-1)%this.tablero.length];
    }

    /**
     * Devuelve el pasillo de un color indicado
     * @param {Color} color El número del color del pasillo que se quiere obtener.
     * @returns Una lista con las casillas del pasillo.
     */
    obtenerListaPasillo(color){
        if(color == Color.AMARILLO){
            return this.pasilloAmarillo;
        }else if(color == Color.AZUL){
            return this.pasilloAzul;
        }else if(color == Color.ROJO){
            return this.pasilloRojo;
        }else if (color == Color.VERDE){
            return this.pasilloVerde;
        }
    }

    /**
     * Obtiene el pasillo de un jugador
     * @param {Jugador} jugador El jugador del que se quiere obtener el pasillo.
     * @param {int} posicion La posicion del pasillo que se quiere obtener.
     * @returns {Casilla} La casilla del pasillo.
     */
    obtenerPasillo(jugador, posicion){
        let lista = this.obtenerListaPasillo(jugador.color);
        if(lista.length < lista.length){
            return lista[posicion];
        }
    }

    /**
     * Crea los pasillos de cada color
     */
    crearPasillos(){
        for(let i=1; i<8; i++){
            if(i<7){
                this.pasilloAmarillo.push(new Casilla(TipoCasilla.PASILLO));
                this.pasilloAzul.push(new Casilla(TipoCasilla.PASILLO));
                this.pasilloRojo.push(new Casilla(TipoCasilla.PASILLO));
                this.pasilloVerde.push(new Casilla(TipoCasilla.PASILLO));
            }else{
                this.pasilloAmarillo.push(new Casilla(TipoCasilla.META));
                this.pasilloAzul.push(new Casilla(TipoCasilla.META));
                this.pasilloRojo.push(new Casilla(TipoCasilla.META));
                this.pasilloVerde.push(new Casilla(TipoCasilla.META));
            }
        }
    }

    /**
     * Imprime el tablero en consola
     */
    imprimirTablero(){
        for(let i=0; i<this.tablero.length; i++){
            if (this.tablero[i].fichas.length > 0){
                this.tablero[i].fichas.forEach(ficha => {
                    console.log("casilla: " + this.tablero[i].numero + " ficha: " + ficha.color);
                });
            }
        }
    }
}