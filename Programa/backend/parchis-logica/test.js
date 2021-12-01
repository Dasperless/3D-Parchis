const EstadoFicha = require("./EstadoFicha");
const Parchis = require("./Parchis")

let parchis = new Parchis();
parchis.agregarJugador("Juan");
parchis.agregarJugador("Pedro");
parchis.ordenarJugadores();
// for( let i = 0; i < 76; i++ ){
// 	var movimientos = 1;
// 	var jugador = parchis.retornarTurno();
// 	var ficha = jugador.fichas[0];
	
// 	parchis.moverFicha(jugador,ficha,movimientos);
// 	// parchis.pasarTurno();

// 	parchis.tablero.imprimirTablero();
// }
parchis.ordenarJugadores();
// while (true) {
	var movimientos = 2;
	var jugador1 = parchis.jugadores[0];
	var jugador2 = parchis.jugadores[1];

	var ficha1 = jugador1.fichas[0];
	var ficha2 = jugador2.fichas[0];

	// ficha1.movimientos = 62
	// ficha2.movimientos = 63
	// ficha3.movimientos = 63
	// ficha1.estado = EstadoFicha.TABLERO;
	// ficha2.estado = EstadoFicha.TABLERO	;
	// ficha3.estado = EstadoFicha.PASILLO;
	
	parchis.tablero.obtenerCasilla(6).colocarFicha(ficha1,1);
	parchis.tablero.imprimirTablero();
	parchis.tablero.obtenerCasilla(6).colocarFicha(ficha2,1);
	parchis.tablero.imprimirTablero();
	// parchis.tablero.obtenerPasillo(jugador,ficha3.posicion).colocarFicha(ficha3,1);
	
	
	var ficha = jugador.fichas[0];


	parchis.moverFicha(jugador,ficha,movimientos);
	// parchis.pasarTurno();

	parchis.tablero.imprimirTablero();
// }
