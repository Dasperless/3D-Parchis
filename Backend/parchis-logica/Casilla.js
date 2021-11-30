const TipoCasilla = require("./TipoCasilla");
module.exports = class Casilla {
	constructor(tipo, color = null, numero = null) {
		this.tipo = tipo;
		this.fichas = [];
		this.color = color;
		this.numero = numero;
	}

    /**
     * Coloca una ficha en la casilla.
     * @param {Ficha} ficha La ficha a colocar.
	 * @param {Int}	movimientos  los movimientos sobrantes de la ficha.
     */
	colocarFicha(ficha, movimientos) {
		if (this.fichas.length > 0 && this.fichas.length < 2 && movimientos === 1) {
			if (this.tipo === TipoCasilla.NORMAL && this.fichas[0].color !== ficha.color) {
				var fichaTemp = this.fichas.pop();
				fichaTemp.regresarCasa();
				console.log("Ficha: ",ficha.color, " se comio a ficha ", fichaTemp.color);
				ficha.comio();
			}
		}
        ficha.sumarMovimientos();
        ficha.cambiarPosicion(this.numero);
        this.fichas.push(ficha);
	}

    /**
     * Verifica si se puede colocar una ficha en la casilla.
     * @returns true si se puede colocar la ficha, false en caso contrario.
     */
	sePuedeColocarFicha() {
		return this.fichas.length !== 2;
	}

    /**
     * Quita una ficha de la casilla.
     * @param {Ficha} ficha la ficha a quitar.
     */
	sacarFicha(ficha) {
		if (this.fichas.length > 0) {
			ficha.cambiarPosicion(ficha.posicion + 1);
			const index = this.fichas.indexOf(ficha);
			if (index > -1) {
				this.fichas.splice(index, 1);
			}
		}
	}
};
