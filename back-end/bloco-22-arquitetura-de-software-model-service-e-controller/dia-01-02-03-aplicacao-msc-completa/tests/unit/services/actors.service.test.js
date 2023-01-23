const chai = require('chai');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');
const sinon = require('sinon');
const { actorsService } = require('../../../src/services');
const { actorsModel } = require('../../../src/models');
const { atores, addActor, objActor, invalidActor, objActorInvalido } = require('./mocks/actor.mock');

chai.use(sinonChai);

describe('teste do service de atores', function () {

  describe('testando endpoint GET /actors', function () {
    it('recuperando todos os atores', async function () {
      // Arrange
      sinon.stub(actorsModel, 'findAll').resolves(atores);
      // Act
      const result = await actorsService.findAll();
      // Assert
      expect(result.type).to.equal(null);
      expect(result.message).to.be.deep.equal(atores);
    });
  });

  describe('testando endpoint GET /actors/:id', function () {
    it('recuperando um ator com id específico', async function () {
      sinon.stub(actorsModel, 'findById').resolves(atores[0]);
      const result = await actorsService.findById(1);
      expect(result.type).to.equal(null);
      expect(result.message).to.be.deep.equal(atores[0]);
    });
  
    it('erro ao passar id inexistente', async function () {
      sinon.stub(actorsModel, 'findById').resolves(undefined);
      const result = await actorsService.findById(2);
      expect(result.type).to.equal('ACTOR_NOT_FOUND');
      expect(result.message).to.be.deep.equal('Actor not found');
    });
  
    it('erro ao passar id inválido', async function () {
      sinon.stub(actorsModel, 'findById').resolves(undefined);
      const result = await actorsService.findById('a');
      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.be.deep.equal('"value" must be a number');
    });
  })

  describe('testando endpoint POST /actors', function () {
    it('adicionando um novo ator a lista', async function () {
      sinon.stub(actorsModel, 'createActor').resolves(atores[1]);
      const result = await actorsService.createActor(addActor);
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(undefined);
    });
  
    it('falha ao tentar adicionar um novo ator na lista com campo inválido', async function () {
      sinon.stub(actorsModel, 'createActor').resolves();
      const result = await actorsService.createActor(invalidActor);
      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.deep.equal('"first_name" is required');
    });
  })
  describe('testando endpoint PUT /actors/:id', function () {
    it('falhando ao editar um ator da lista', async function () {
      const objActor = { id: 1, ...addActor }
      sinon.stub(actorsModel, 'editActor').resolves(1, invalidActor);
      const result = await actorsService.editActor(objActor);
      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.be.deep.equal("\"first_name\" is required");
    });
  
    it('editando um ator da lista', async function () {
      sinon.stub(actorsModel, 'editActor').resolves(objActor);
      const result = await actorsService.editActor({ body: addActor, id:1 });
      expect(result.type).to.equal(null);
      expect(result.message).to.be.deep.equal(objActor);
    });
  
    it('id do ator não encontrado', async function () {
      sinon.stub(actorsModel, 'editActor').resolves(objActor);
      sinon.stub(actorsModel, 'findById').resolves(undefined);
      const result = await actorsService.editActor({ body: addActor, id:1 });
      expect(result.type).to.equal('ACTOR_NOT_FOUND');
      expect(result.message).to.be.deep.equal('Actor not found');
    });
  });
  describe('testando endpoint DELETE /actors/:id', function () {
    it('removendo um ator da lista', async function () {
      sinon.stub(actorsModel, 'deleteActor').resolves(undefined);
      const result = await actorsService.deleteActor(1);
      expect(result.type).to.equal(null);
      expect(result.message).to.be.deep.equal('');
    });
  
    it('falha ao remover um ator da lista com id inválido', async function () {
      sinon.stub(actorsModel, 'deleteActor').resolves(undefined);
      const result = await actorsService.deleteActor('a');
      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.be.deep.equal('"value" must be a number');
    });
  
    it('falha ao remover um ator da lista com id inválido', async function () {
      sinon.stub(actorsModel, 'deleteActor').resolves(undefined);
      sinon.stub(actorsModel, 'findById').resolves(undefined);
      const result = await actorsService.deleteActor(22);
      expect(result.type).to.equal('ACTOR_NOT_FOUND');
      expect(result.message).to.be.deep.equal('Actor not found');
    });
  });
  
  afterEach(() => 
  sinon.restore());
});