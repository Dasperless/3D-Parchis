import enum

#Enumeracion de los tipos de casillas
class TipoCasilla(enum.Enum):
    normal = 0
    segura = 1
    inicio = 2
    pasillo = 3
    meta = 4

#Clase que representa una casilla
class Casilla:
    tipo = ""
    color = None
    numero = None
    fichas = []


    def __init__(self, tipo, color = None, numero = None):
        self.tipo = tipo
        self.fichas = []
        self.color = color
        self.numero = numero
    
    #Coloca una ficha en el tablero
    def colocarFicha(self, ficha):
        if len(self.fichas) > 0:
            if(self.tipo == TipoCasilla.normal):
                print("Se comio una ficha")
                fichaTemp = self.fichas.pop()
                fichaTemp.regresarCasa()
        else:
            ficha.sumarMovimiento();			#Suma el movimiento de la ficha
            ficha.cambiarPosicion(self.numero)	#Cambia la posicion de la ficha
            self.fichas.append(ficha)
            

    #Verifica si se puede colocar la ficha
    def sePuedeColocarFicha(self):
        return len(self.fichas) != 2

    #Saca la ficha de la casilla
    def sacarFicha(self, ficha):
        if len(self.fichas)>0:
            ficha.cambiarPosicion(ficha.posicion+1)
            self.fichas.remove(ficha)