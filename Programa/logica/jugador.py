import random
from logica import Ficha
class Jugador:
	dado = [1,2,3,4,4,5,5,6,6]	#Dado del jugador
	fichas = []					#Fichas del jugador
	nombre = ""					#Nombre del jugador

	def __init__(self, pNombre):
		self.nombre = pNombre
		self.crearFicha(3)

	#Crea las fichas del jugador
	def crearFicha(self, cantidad):
		for _ in range(cantidad):
			ficha = Ficha()
			self.fichas.append(ficha)

	#Tira el dado del jugador
	def tirarDado(self):
		return random.choice(self.dado)