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
		for i in range(1,69):
			if(i== 5):
				self.tablero.append(Casilla(TipoCasilla.inicio,Color.Amarillo,i))
			elif(i== 22):
				self.tablero.append(Casilla(TipoCasilla.inicio,Color.Azul,i))
			elif(i== 39):
				self.tablero.append(Casilla(TipoCasilla.inicio,Color.Rojo,i))
			elif(i== 56):
				self.tablero.append(Casilla(TipoCasilla.inicio,Color.Verde,i))
			elif(i in casillasSeguras):
				self.tablero.append(Casilla(TipoCasilla.segura,None,i))
			else:
				self.tablero.append(Casilla(TipoCasilla.normal,None,i))
	
	#Devuelve la casilla en la posicion indicada, de forma circular (1 es el primer indice)
	def obtenerCasilla(self,posicion):
		return self.tablero[(posicion-1)%len(self.tablero)]

	#Devuelve el pasillo de un color
	def obtenerListaPasillo(self,color):
		if(color == Color.Amarillo):
			return self.pasilloAmarillo
		elif(color == Color.Azul):
			return self.pasilloAzul
		elif(color == Color.Rojo):
			return self.pasilloRojo
		elif(color == Color.Verde):
			return self.pasilloVerde
		else:
			return None

	#Devuelve la lista de jugadores
	def obtenerPasillo(self,jugador,posicion):
		lista = self.obtenerListaPasillo(jugador.color)
		if(posicion < len(lista)):
			return lista[posicion]

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
	
	def imprimirTablero(self):
		for i in range(len(self.tablero)):
			if len(self.tablero[i].fichas) > 0:
				for ficha in self.tablero[i].fichas:
					print("casilla: ", self.tablero[i].numero, "ficha: ", ficha.color)