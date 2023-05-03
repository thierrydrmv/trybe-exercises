import json

with open("pokemons.json") as file:
    # o conteúdo é transformado em estrutura python equivalente,
    # dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons
    pokemons = json.load(file)["results"]

print(pokemons[0])

grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as file:
    json.dump(grass_type_pokemons, file)
