import enum

#Representan los estados de la ficha
class EstadoFicha(enum.Enum):
	casa = 0
	tablero = 1
	pasillo = 2
	gano = 3

class Ficha:
	estado = ""

	def __init__(self):
		self.estado = EstadoFicha.casa
