import random

class jugador:
	numeros = [1,2,3,4,4,5,5,6,6]

	def __init__(self):
		pass

	def tirarDado(self):
		return random.choice(self.numeros)