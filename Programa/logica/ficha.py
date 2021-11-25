import enum

#Representan los estados de la ficha
class EstadoFicha(enum.Enum):
	casa = 0
	tablero = 1
	pasillo = 2
	gano = 3

class Ficha:
	estado = ""
	movimientos = 0
	posicion = 0
	color = ""

	def __init__(self,pColor = None):
		self.color = pColor
		self.movimientos = 0
		self.posicion = 0
		self.estado = EstadoFicha.casa

	#Mueve la ficha a una posicion
	def sumarMovimiento(self):
		self.movimientos += 1

	def cambiarPosicion(self, nuevaPosicion):
		self.posicion = nuevaPosicion

	#Regresa a casa la ficha
	def regresarCasa(self):
		posicion = 0
		self.movimientos = 0
		self.estado = EstadoFicha.casa

	def toString(self):
		return "Estado: " + self.estado.name + " Posicion: " + str(self.movimientos)