const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('));
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(messageFromProfOak);
  }, 1000);
}

const handlePokemon = (error, message) => {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
}

const filtro = (param) => element => element.name === param

getPokemonDetails(filtro('Squirtle'), handlePokemon);

module.exports = {
  getPokemonDetails, handlePokemon
};