import enum

#Enumeracion de los tipos de casillas
class TipoCasilla(enum.Enum):
    normal = 0
    segura = 1
    inicio = 2

#Clase que representa una casilla
class Casilla:
    tipo = ""

    def __init__(self, tipo):
        self.tipo = tipo

    def __init__(self, tipo, color):
        self.tipo = tipo
        self.color = color
