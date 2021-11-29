const Parchis = require("./Parchis")

let parchis = new Parchis();
parchis.agregarJugador("Juan");
parchis.agregarJugador("Pedro");

parchis.ordenarJugadores();
while (true) {
	var movimientos = 1;
	var jugador = parchis.retornarTurno();
	var ficha = jugador.fichas[0];

	parchis.moverFicha(jugador,ficha,movimientos);
	// parchis.pasarTurno();

	parchis.tablero.imprimirTablero();
}
