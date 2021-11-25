from Parchis import Parchis
from Jugador import Color

p = Parchis()
p.agregarJugador("Juan")
p.agregarJugador("Darío")

p.ordenarJugadores()
print(p.iniciarPartida())