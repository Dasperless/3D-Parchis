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

    def __init__(self, tipo, color = None):
        self.tipo = tipo
        self.color = color
