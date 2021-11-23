from Tablero import Tablero
from Jugador import Jugador
from Jugador import Color
from Ficha import EstadoFicha
class Parchis:
	tablero = Tablero()
	jugadores = []

	def __init__(self):
		pass
	
	#Verifica si hay un empate en el dado
	def empateDado(self, jugadores):
		return all(jugadores[i][1] == jugadores[i+1][1] for i in range(len(jugadores)-1))

	#Ordena los jugadores en base al número de dado o el nombre
	def ordenarJugadores(self):
		orden = [[jugador,jugador.tirarDado()] for jugador in self.jugadores]
		if(self.empateDado(orden)):
			orden.sort(key=lambda x: x[0].nombre)
		else:
			orden.sort(key=lambda x: x[1])

		self.jugadores = []
		for idEnum, jugador in enumerate(orden, start=1):
			jugador[0].establecerColor(Color(idEnum))
			self.jugadores.append(jugador[0])
			

	#Verifica si hay un ganador
	def hayGanador(self):
		return any(jugador.haGanado() for jugador in self.jugadores)

	def inputElegirFicha(self):
		numFicha = input("Ingrese el numero de ficha: ")
		while not numFicha.isdigit():
			numFicha = input("Ingrese el numero de ficha: ")
		return int(numFicha)

	#iniciar partida
	def iniciarPartida(self):
		self.ordenarJugadores() #ordena los jugadores en base al número de dado o el nombre
		while(not self.hayGanador()): #mientras no haya ganador
			for jugador in self.jugadores:
				dado = jugador.tirarDado()
				ficha = jugador.elegirFicha(self.inputElegirFicha())
				self.moverFicha(jugador, ficha, dado)

	#Agrega un juador a la partida
	def agregarJugador(self, nombre):
		self.jugadores.append(Jugador(nombre))

	#Obtiene la posicion inicial de un jugador
	def obtenerPosInicial(self, jugador):
		posIniciales = {'Amarillo':5, 'Azul':22, 'Rojo':39, 'Verde':56}
		return posIniciales[jugador.color.name]
	
	#Verifica si se puede mover la ficha a la posicion
	def verificarMovimiento(self, jugador, ficha, movimientos):
		if (ficha.estado == EstadoFicha.casa):
			posicionNueva = self.obtenerPosInicial(jugador)
		else:
			posicionNueva = ficha.posicion

		for _ in range(movimientos):
			#Si la casilla actual no se puede colocar, no se puede mover la ficha
			if not self.tablero.obtenerCasilla(posicionNueva).sePuedeColocarFicha():
				return False
			posicionNueva += 1
		return True

	#Mueve la ficha en el tablero
	def moverFicha(self, jugador, ficha, casillasAMover):
		if (self.verificarMovimiento(ficha, jugador, casillasAMover)):
			for i in range(casillasAMover,-1,-1):
				if (ficha.posicion > 29):
					ficha.estado = EstadoFicha.pasillo
					ficha.posicion = 0
				elif (ficha.estado == EstadoFicha.casa):
					self.tablero.obtenerCasilla(self.obtenerPosInicial(jugador)).colocarFicha(ficha)	#Coloca la ficha en la casilla inicial
				elif(ficha.estado == EstadoFicha.enJuego):
					self.tablero.obtenerCasilla(ficha.posicion).colocarFicha(ficha)#coloca la ficha en la casilla actual

				if(i != 0):
					self.tablero.obtenerCasilla(ficha.posicion).sacarFicha(ficha) 	#Saca la ficha del tablero
					ficha.posicion += 1										#Cambia la posicion de la ficha		

		else:
			print("No se puede mover la ficha")
