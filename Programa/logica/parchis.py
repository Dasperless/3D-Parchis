from Tablero import Tablero
from Jugador import Jugador
class Parchis:
	tablero = Tablero()
	jugadores = []

	def __init__(self):
		pass

	def agregarJugador(self, nombre):
		self.jugadores.append(Jugador(nombre))

	def moverFicha(self, jugador, casillasAMover):
		jugador.moverFicha(self.tablero, casilla)