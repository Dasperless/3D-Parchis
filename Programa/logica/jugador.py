import enum
import random
from Ficha import Ficha
from Ficha import EstadoFicha

class Color(enum.Enum):
	Amarillo = 1
	Azul = 2
	Rojo = 3
	Verde = 4

class Jugador:
	dado = [1,2,3,4,4,5,5,6,6]	#Dado del jugador
	fichas = None					#Fichas del jugador
	nombre = ""					#Nombre del jugador
	color = None 

	def __init__(self, pNombre, pColor = None):
		self.nombre = pNombre
		self.fichas = []
		self.color = pColor
		self.crearFicha(3)

	def establecerColor(self, pColor):
		for ficha in self.fichas:
			ficha.color = pColor
		self.color = pColor

	#Devuelve True si ha ganado el jugador
	def haGanado(self):
		return all(ficha.estado == EstadoFicha.gano for ficha in self.fichas)

	#Crea las fichas del jugador
	def crearFicha(self, cantidad):
		for _ in range(cantidad):
			ficha = Ficha()
			self.fichas.append(ficha)

	#Tira el dado del jugador
	def tirarDado(self):
		return random.choice(self.dado)
	
	#Retorna la ficha 
	def elegirFicha(self, pFicha):
		if pFicha >=0 and pFicha <=len(self.fichas):
			return self.fichas[pFicha]

	def imprimirFichas(self):
		for num, ficha in enumerate(self.fichas, start=0):
			print("Ficha #",num," ",ficha.toString(),"\n")