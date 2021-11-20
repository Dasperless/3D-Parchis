from Jugador import Jugador, Color
from Tablero import Tablero
from Casilla import Casilla, TipoCasilla


p1 = Jugador("Juan",Color.Amarillo)
p2 = Jugador("Pedro",Color.Azul)
t1 = Tablero()
t1.agregarJugador(p1)	
t1.agregarJugador(p2)	

print(t1.jugadores[0].nombre)