const EstadoFicha = require("./EstadoFicha");
const Parchis = require("./Parchis")

let parchis = new Parchis();
parchis.agregarJugador("Juan");
parchis.agregarJugador("Pedro");

parchis.ordenarJugadores();
// while (true) {
	var movimientos = 2;
	var jugador = parchis.retornarTurno();

	var ficha1 = jugador.fichas[0];
	var ficha2 = jugador.fichas[1];
	var ficha3 = jugador.fichas[1];
	ficha1.movimientos = 62
	ficha2.movimientos = 63
	ficha3.movimientos = 63
	ficha1.estado = EstadoFicha.TABLERO;
	ficha2.estado = EstadoFicha.PASILLO;
	ficha3.estado = EstadoFicha.PASILLO;
	
	parchis.tablero.obtenerCasilla(68).colocarFicha(ficha1,1);
	parchis.tablero.obtenerPasillo(jugador,ficha2.posicion).colocarFicha(ficha2,1);
	// parchis.tablero.obtenerPasillo(jugador,ficha3.posicion).colocarFicha(ficha3,1);
	parchis.tablero.imprimirTablero();
	
	
	var ficha = jugador.fichas[0];


	parchis.moverFicha(jugador,ficha,movimientos);
	// parchis.pasarTurno();

	parchis.tablero.imprimirTablero();
// }
