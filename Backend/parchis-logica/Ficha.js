const EstadoFicha = require("./EstadoFicha");

module.exports = class Ficha {
	constructor(color = null) {
		this.color = color;
		this.movimientos = 0;
		this.posicion = 0;
		this.estado = EstadoFicha.CASA;
	}

    /**
     * Suma un movimiento a la ficha
     */
	sumarMovimientos() {
		this.movimientos += 1;
	}

    /**
     * Cambia la posicion de la ficha.
     * @param {Int} nuevaPos Nueva posición de la ficha
     */
	cambiarPosicion(nuevaPos) {
		this.posicion = nuevaPos;
	}

    /**
     * Regresa una ficha a su casa.
     */
	regresarCasa() {
		this.posicion = 0;
		this.movimientos = 0;
		this.estado = EstadoFicha.CASA;
	}

    /**
     * Retorna la información de la ficha.
     * @returns {String} información de la ficha
     */
	toString() {
		return "Estado: " + this.estado + " Posicion: " + this.movimientos;
	}
};
