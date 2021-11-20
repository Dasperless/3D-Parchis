from Tablero import Tablero
from Jugador import Jugador
from logica.Ficha import EstadoFicha
class Parchis:
	tablero = Tablero()
	jugadores = []

	def __init__(self):
		pass

	def agregarJugador(self, nombre):
		self.jugadores.append(Jugador(nombre))

	def obtenerPosInicial(self, jugador):
		posIniciales = {'amarillo':5, 'azul':22, 'rojo':39, 'verde':56}
		return posIniciales[jugador.color.name]

	def moverFicha(self, jugador, ficha, casillasAMover):
		if(ficha.estado == EstadoFicha.casa	):
			self.tablero.tablero[self.obtenerPosInicial(jugador)].colocarFicha(ficha)
		