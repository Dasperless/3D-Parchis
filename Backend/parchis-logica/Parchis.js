const Tablero = require("./Tablero")
const Jugador = require("./Jugador")
const Color = require("./Color")
const EstadoFicha = require("./EstadoFicha")

module.exports = class Parchis {
	constructor() {
		this.tablero = new Tablero();
		this.jugadores = [];
		this.turno = 1;
	}

	/**
	 * Verifica si hay empate en el dado de los jugadores
	 * @param {Array} jugadores Arreglo de jugadores
	 * @returns true si hay empate, false si no
	 */
	empateDado(jugadores) {
		for (let i = 0; i < jugadores.length -1; i++) {
			if (jugadores[i][1] == jugadores[i+1][1]) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Retorna el jugador que tiene el turno
	 * @param {String} nombre el nombre del jugador
	 * @returns {Jugador} el jugador que tiene el turno
	 */
	obtenerJugador(){
		var jugador = this.tablero[(turno-1)%this.tablero.length]
		this.turno += 1;
		return  jugador;
	}


	pasarTurno(){
	   this.turno += 1;
   }

	retornarTurno(){
	   var jugador = this.jugadores[(this.turno-1)%this.jugadores.length];
	   return  jugador;
   }	

	/**
	 * Ordena los jugadores en base al número de dado o el nombre
	 */
	ordenarJugadores(){
		let orden = [];

		// Agrega el objeto jugador y el número de dato en un array
		this.jugadores.forEach(jugador => {
			var dadoJugador = [jugador, jugador.tirarDado()];
			orden.push(dadoJugador);
		});

		// Verifica si existe un empate en los dados y los ordena
		// en base al número de dado o el nombre (en caso de empate)
		if(this.empateDado(orden)){
			orden.sort(this.compararNombre);
		}else{
			orden.sort(this.compararDado);
		}

		// Cambia el color de los jugadores según su nombre
		this.jugadores = [];
        let color = 1;
        orden.forEach(jugador => {
            jugador[0].establecerColor(color);
            this.jugadores.push(jugador[0]);
            color += 1;
        });
	}

	/**
	 * Verifica si hay un ganador en la partida
	 * @returns {boolean} true si hay un ganador, false si no
	 */
	hayGanador(){
		this.jugadores.forEach(jugador => {
			if(jugador.haGanado()){
				return true;
			}
		});
		return false;
	}

	// Compara el nombre de los jugadores
	compararNombre(a,b){
		if(a[0].nombre === b[0].nombre){
			return 0;
		}else{
			return a[0].nombre < b[0].nombre ? -1 : 1;
		}
	}

	// Compara el número de dado de los jugadores
	compararDado(a,b){
		if(a[1] === b[1]){
			return 0;
		}else{
			return a[1] < b[1] ? -1 : 1;
		}
	}

	/**
	 * Inicia la partida de parchis.
	 */
	iniciarPartida(){
		this.ordenarJugadores();
		while (!this.hayGanador()) {
			this.jugadores.forEach(jugador => {
				var dado = jugador.tirarDado();
				// console.log("\nTurno de: " + jugador.nombre + " con dado: " + dado);
				// jugador.imprimirFichas();
				var ficha = jugador.elegirFicha(0);
				this.moverFicha(jugador, ficha, dado);

				if(ficha.haComido()){
					ficha.comio = false;	
					var ficha = jugador.elegirFicha(0);
					this.moverFicha(jugador, ficha, 20);
				}
				// this.tablero.imprimirTablero();
			});
		}		
	}

	/**
	 * 
	 * @param {string} nombre El nombre(nickname) del jugador
	 */
	agregarJugador(nombre){
		var jugador = new Jugador(nombre);
		this.jugadores.push(jugador);
	}

	/**
	 * Obtiene la posicion inicial del jugador
	 * @param {Array} jugador Jugador que se desea obtener la posicion inicial
	 * @returns {int} posicion inicial del jugador
	 */
	obtenerPosInicial(jugador){
		const posIniciales = {1:5, 2:22, 3:39, 4:56}
		// console.log("Posiniciales:",posIniciales[jugador.color]);
		// console.log("Jugador.color: ",jugador.color);
		return posIniciales[jugador.color];
	}

	/**
	 * Verifica el movimiento de un jugador
	 * @param {Jugador} jugador El jugador está jugando
	 * @param {Ficha} ficha Ficha que se desea mover
	 * @param {Int} movimientos La cantidad de casillas que se desea mover
	 * @returns 
	 */
	verificarMovimiento(jugador, ficha, movimientos){
		var posicionNueva;
		if (ficha.estado === EstadoFicha.CASA){
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

	/**
	 * Quita la ficha del tablero al iniciar el turno o cuando 
	 * se muevw en el tablero
	 * @param {Jugador} jugador El jugador que está jugando
	 * @param {Ficha} ficha La ficha que se desea quitar
	 */
	quitarFichaTablero(jugador,ficha){
		if (ficha.estado === EstadoFicha.TABLERO){	
			this.tablero.obtenerCasilla(ficha.posicion).sacarFicha(ficha)
		}else if(ficha.estado === EstadoFicha.PASILLO){
			this.tablero.obtenerPasillo(jugador, ficha.posicion).sacarFicha(ficha)
		}
	}


	/**
	 * 
	 * @param {Jugador} jugador El jugador actual
	 * @param {Ficha} ficha Ficha que se desea mover
	 * @param {Int} casillasAMover La cantidad de casillas que se desea mover
	 */
	moverFicha(jugador, ficha, casillasAMover){
		
		this.quitarFichaTablero(jugador, ficha);//Quita la ficha del tablero al iniciar el turno
		if(ficha.haComido()){
			ficha.comio = false;
		}
		//Verifica si el movimiento es válido
		if(this.verificarMovimiento(jugador, ficha, casillasAMover)){
			//Mueve la ficha en el tablero
			for(let i=casillasAMover; i > 0; i--){
				if(ficha.movimientos > 63){
					if (ficha.estado === EstadoFicha.TABLERO){
						ficha.colocarPasillo();
					}
					var pasillo = this.tablero.obtenerPasillo(jugador, ficha.posicion);
					if(pasillo !== undefined){
						pasillo.colocarFicha(ficha);
					}else{
						ficha.estado = EstadoFicha.GANO;
					}
					console.log(this.tablero.obtenerPasillo(jugador, ficha.posicion));
				}else if(ficha.estado === EstadoFicha.CASA){
					ficha.estado = EstadoFicha.TABLERO;
					this.tablero.obtenerCasilla(this.obtenerPosInicial(jugador)).colocarFicha(ficha);
				}else if(ficha.estado === EstadoFicha.TABLERO){
					this.tablero.obtenerCasilla(ficha.posicion).colocarFicha(ficha);
				}

				if(i>1){
					this.quitarFichaTablero(jugador, ficha);
				}

			}
		}else{
			console.log("No se puede mover la ficha");
		}

	}

}