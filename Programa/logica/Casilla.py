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
    fichas = []


    def __init__(self, tipo, color = None):
        self.tipo = tipo
        self.color = color
    
    #Coloca una ficha en el tablero
    def colocarFicha(self, ficha):
        if len(self.fichas) > 0:
            if(self.tipo == TipoCasilla.normal):
                fichaTemp = self.fichas.pop()
                fichaTemp.regresarCasa()
        else:
            self.fichas.append(ficha)

    #Verifica si se puede colocar la ficha
    def sePuedeColocarFicha(self):
        return len(self.fichas) != 2

    #Saca la ficha de la casilla
    def sacarFicha(self, ficha):
        self.ficha.remove(ficha)