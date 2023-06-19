class Ventilador:
    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        self.cor = cor
        self.potencia = potencia
        self.tensao = tensao
        self.preco = preco


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if self.ventilador:
            return f"{self.nome} - possui um ventilador."
        return f"{self.nome} - não possui um ventilador."


ventilador = Ventilador("Branco", "110", "127", 200)

programador = Pessoa("Thierry", 11111)

programador.comprar_ventilador(ventilador)

print(programador)
