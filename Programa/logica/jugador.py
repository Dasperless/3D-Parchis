import enum
import random
from Ficha import Ficha

class Color(enum.Enum):
	Amarillo = 1
	Azul = 2
	Rojo = 3
	Verde = 4

class Jugador:
	dado = [1,2,3,4,4,5,5,6,6]	#Dado del jugador
	fichas = []					#Fichas del jugador
	nombre = ""					#Nombre del jugador
	color = "" 

	def __init__(self, pNombre, pColor):
		self.nombre = pNombre
		self.color = pColor
		self.crearFicha(3)

	#Crea las fichas del jugador
	def crearFicha(self, cantidad):
		for _ in range(cantidad):
			ficha = Ficha()
			self.fichas.append(ficha)

	#Tira el dado del jugador
	def tirarDado(self):
		return random.choice(self.dado)