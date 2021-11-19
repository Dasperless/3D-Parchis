import enum

#Representan los estados de la ficha
class Estado(enum.Enum):
	casa = 0
	tablero = 1
	gane = 2

class Ficha:
	estado = ""

	def __init__(self):
		self.estado = Estado.casa
