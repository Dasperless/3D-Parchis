const Tablero = require("./Tablero")
const Jugador = require("./Jugador")
const Color = require("./Color")
const EstadoFicha = require("./EstadoFicha")

module.exports = class Parchis {
	constructor(game) {
		this.tablero = new Tablero();
		this.jugadores = [];
	}

	// Verifica si hay empate en el dado de los jugadores
	empateDado(jugadores) {
		for (let i = 0; i < jugadores.length -1; i++) {
			if (jugadores[i][1] == jugadores[i+1][1]) {
				return true;
			}
		}
		return false;
	}

	// Ordena los jugadores en base al número de dado o el nombre
	ordenarJugadores(){
		let orden = [];
		for(let jugador in this.jugadores){
			dadoJugador = [jugador, jugador.tirarDado()];
			orden.push(dadoJugador);
		}

		if(this.empateDado(orden)){
			orden.sort(this.compararNombre);
		}else{
			orden.sort(this.compararDado);
		}
	}

	// Verifica si hay un ganador en la partida
	hayGanador(){
		for (let jugador in this.jugadores){
			if(jugador.haGanado()){
				return true;
			}
		}
		return false;
	}

	// Compara el nombre de los jugadores
	compararNombre(a,b){
		if(a[0].nombre === b[0].nombre){
			return 0;
		}else{
			return a[0].nombre < b[0].nombre ? 1 : -1;
		}
	}

	// Compara el número de dado de los jugadores
	compararDado(a,b){
		if(a[1] === b[1]){
			return 0;
		}else{
			return a[1] < b[1] ? 1 : -1;
		}
	}



	iniciarPartida(){
		this.ordenarJugadores
		while (!this.hayGanador()) {
			for (let jugador in this.jugadores){
				dado = jugador.tirarDado();
				console.log("\nTurno de: " + jugador.nombre + " con dado: " + dado);
				jugador.imprimirFichas();
				ficha = jugador.elegirFicha(0);
				this.moverFicha(jugador, ficha, dado);
				this.tablero.imprimirTablero();
			}
		}		
	}

	//Agrega un jugador a la partida
	agregarJugador(nombre){
		this.jugadores.push(new Jugador(nombre));
	}

	// Obtiene la posicion inicial del jugador
	obtenerPosInicial(jugador){
		const posIniciales = {'AMARILLO':5, 'AZUL':22, 'ROJO':39, 'VERDE':56}
		return posIniciales[jugador.color];
	}

	verificarMovimiento(jugador, ficha, movimientos){
		if (ficha.estado == EstadoFicha.CASA){
			posicionNueva = this.obtenerPosInicial(jugador);
		}else{
			posicionNueva = ficha.posicion;
		}

		for(let i = 0; i < movimientos; i++){
			if (!this.tablero.obtenerCasilla(posicionNueva).sePuedeColocarFicha()){
				return false;
			}
			posicionNueva += 1;
		}
		return true;

	}

	moverFicha(jugador, ficha, casillasAMover){
		if(this.verificarMovimiento(jugador, ficha, casillasAMover)){
			for(let i=casillasAMover; i >= 0; i--){
				if(ficha.movimientos > 29){
					if (ficha.estado = EstadoFicha.TABLERO){
						ficha.estado = EstadoFicha.PASILLO;
					}
					this.tablero.obtenerPasillo(jugador, ficha.posicion).colocarFicha(ficha);
				}else if(ficha.estado == EstadoFicha.Casa){
					ficha.estado = EstadoFicha.TABLERO;
					this.tablero.obtenerCasilla(this.obtenerPosInicial(jugador)).colocarFicha(ficha);
				}else if(ficha.estado == EstadoFicha.TABLERO){
					this.tablero.obtenerPasillo(jugador, ficha.posicion).colocarFicha(ficha);
				}

				if(i>0){
					if (ficha.Estado == EstadoFicha.TABLERO){	
						this.tablero.obtenerCasilla(ficha.posicion).sacarFicha(ficha)
					}else if(ficha.estado == EstadoFicha.PASILLO){
						this.tablero.obtenerPasillo(jugador, ficha.posicion).sacarFicha(ficha)
					}
				}

			}
		}else{
			console.log("No se puede mover la ficha");
		}

	}

}