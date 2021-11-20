from Casilla import TipoCasilla
from Casilla import Casilla
from Jugador import Color

class Tablero:
	jugadores = []
	tablero = []
	pasilloAmarillo = []
	pasilloAzul = []
	pasilloRojo = []
	pasilloVerde = []

	def __init__(self):
		self.crearTablero()
		self.crearPasillos()
	
	#agrega un jugador al tablero
	def agregarJugador(self,jugador):
		if(len(self.jugadores)<4):
			self.jugadores.append(jugador)

	#crea el tablero de parchis
	def crearTablero(self):
		casillasSeguras = [12,17,29,34,46,51,63,68]
		for i in range(68):
			if(i== 5):
				self.tablero.append(Casilla(TipoCasilla.inicio,Color.Amarillo))
			elif(i== 22):
				self.tablero.append(Casilla(TipoCasilla.inicio,Color.Azul))
			elif(i== 39):
				self.tablero.append(Casilla(TipoCasilla.inicio,Color.Rojo))
			elif(i== 56):
				self.tablero.append(Casilla(TipoCasilla.inicio,Color.Verde))
			elif(i in casillasSeguras):
				self.tablero.append(Casilla(TipoCasilla.segura))
			else:
				self.tablero.append(Casilla(TipoCasilla.normal))
	
	#Crea los pasillos de cada color
	def crearPasillos(self):
		for i in range(8):
			if(i<7):
				self.pasilloAmarillo.append(Casilla(TipoCasilla.pasillo))
				self.pasilloAzul.append(Casilla(TipoCasilla.pasillo))
				self.pasilloRojo.append(Casilla(TipoCasilla.pasillo))
				self.pasilloVerde.append(Casilla(TipoCasilla.pasillo))
			else:
				self.pasilloAmarillo.append(Casilla(TipoCasilla.meta))
				self.pasilloAzul.append(Casilla(TipoCasilla.meta))
				self.pasilloRojo.append(Casilla(TipoCasilla.meta))
				self.pasilloVerde.append(Casilla(TipoCasilla.meta))