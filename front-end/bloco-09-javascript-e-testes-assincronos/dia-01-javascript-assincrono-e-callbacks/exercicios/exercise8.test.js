// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails, handlePokemon } = require('./exercise8');

describe('A função getPokemonDetails', (done) => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
     const expectError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails('ab', (error, _message) => {
        try {
            expect(error).ToEqual(expectError);
            done();
        } catch (error) {
            done(error); 
        }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => {
    const expectAnswer = "Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Guntle";

    getPokemonDetails('Squirtle', (_error, message) => {
        try {
            expect(message).ToEqual(expectAnswer);
            done();
        } catch (error) {
            done(error); 
        }
    })
  });
});