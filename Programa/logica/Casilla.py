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
    
    def colocarFicha(self, ficha):
        if len(self.fichas) > 0 and self.tipo == TipoCasilla.normal:
            fichaTemp = self.fichas.pop()
            fichaTemp.regresarCasa()

    def sePuedeColocarFicha(self):
        return len(self.fichas) != 2

    def sacarFicha(self):
        self.ficha.pop()