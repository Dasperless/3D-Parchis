import enum

#Representan los estados de la ficha
class EstadoFicha(enum.Enum):
	casa = 0
	tablero = 1
	pasillo = 2
	gano = 3

class Ficha:
	estado = ""
	posicion = 0

	def __init__(self):
		self.estado = EstadoFicha.casa

	#Mueve la ficha a una posicion
	def cambiarPosicion(self, nuevaPosicion	):
		self.posicion = nuevaPosicion	

	#Regresa a casa la ficha
	def regresarCasa(self):
		posicion = 0
		self.estado = EstadoFicha.casa