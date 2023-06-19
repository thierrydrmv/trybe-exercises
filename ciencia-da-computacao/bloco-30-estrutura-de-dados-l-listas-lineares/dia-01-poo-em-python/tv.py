class Tv:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def __str__(self):
        return f"""
        volume ={self.__volume}
        canal = {self.__canal}
        tamanho = {self.__tamanho}
        ligada = {self.__ligada}
        """

    def aumentar_volume(self):
        if self.__volume >= 98:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume <= 1:
            self.__volume -= 1
        return 0

    def modificar_canal(self, chanel):
        if chanel < 0 and chanel > 100:
            raise ValueError("O canal deve estar entre 1 e 99")
        self.__canal = chanel

    def desligar_ligar(self):
        self.__ligada = not self.__ligada


tv = Tv(2)
tv.aumentar_volume()
print(tv)

tv.diminuir_volume()
print(tv)

tv.modificar_canal(16)
print(tv)

tv.desligar_ligar()

print(tv)
