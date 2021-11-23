from Parchis import Parchis
from Jugador import Color

p = Parchis()
p.agregarJugador("Juan")
p.agregarJugador("Darío")

p.ordenarJugadores()
print(p.verificarMovimiento(p.jugadores[0],p.jugadores[0].fichas[0], 5))