const { expect } = require('chai');
const sinon = require('sinon');
const { actorsModel } = require('../../../src/models');
const { atores, addActor } = require('./mocks/actor.mock');

const connection = require('../../../src/models/connection');

describe('teste do model de atores', function () {
  it('recuperando lista de Atores', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([atores]);
    // Act
    const result = await actorsModel.findAll();
    // Assert
    expect(result).to.be.deep.equal(atores);
  })

  it('recuperando um ator da lista', async function () {
    sinon.stub(connection, 'execute').resolves([[atores[2]]])
    const result = await actorsModel.findById(3);
    expect(result).to.be.deep.equal(atores[2])
  });
  
  it('adicionando um ator a lista', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    // Act
    const result = await actorsModel.createActor({first_name: 'thierry', last_name: 'varela'});
    // Assert
    expect(result).to.equal(4)
  });

  it('editando um ator', async function () {
    sinon.stub(connection, 'execute').resolves([{ updateRows: 1 }]);
    const objActor = { id: 1, ...addActor }

    const result = await actorsModel.editActor(objActor);
    expect(result).to.be.deep.equal(objActor);
  });

  it('deletando um ator', async function () {
    sinon.stub(connection, 'execute').resolves([{ deleteRows: 1 }]);
    const result = await actorsModel.deleteActor(202);
    expect(result).to.be.undefined;
  })

  afterEach(() => 
    sinon.restore()
  );
});