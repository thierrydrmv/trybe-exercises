const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { actorsService } = require('../../../src/services');
const { actorController } = require('../../../src/controllers');
const { atores, getActor, addActor, invalidActor } = require('./mocks/actor.mock');

describe('testando o controller dos atores', function () {
  describe('testando endpoint GET /actors', function () {
    it('listando todos os atores', async function () {
      // Arrange
      const req = {};
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(actorsService, 'findAll').resolves({ type: null, message: atores });
      // Act
      await actorController.allActors(req, res);
  
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(atores);
    });
  });

  describe('testando endpoint GET /actors/:id', function () {
    it('listando o ator pelo id', async function () {
      // Arrange
      const req = { params: { id: 1 } };
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(actorsService, 'findById').resolves({ type: null, message: getActor });
      // Act
      await actorController.findById(req, res);
  
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getActor);
    });
  
    it('procurando um id inexistente', async function () {
      // Arrange
      const req = { params: { id: 22 } };
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(actorsService, 'findById').resolves({ type: 'ACTOR_NOT_FOUND', message: 'Actor not found' });
      // Act
      await actorController.findById(req, res);
  
      // Assert
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({message: 'Actor not found'});
    });
  });

  describe('testando endpoint POST /actors', function () {
    it('adicionando um ator com sucesso', async function () {
      const req = { body: addActor };
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(actorsService, 'createActor').resolves({ type: null,  message: addActor })
      // Act
      await actorController.createActor(req, res);
      // Assert
      expect(res.status).to.have.been.calledWith(201);
    });
  
    it('falha ao adicionar um ator sem o first_name', async function () {
      const req = { body: invalidActor };
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(actorsService, 'createActor').resolves({ type: 'INVALID_VALUE',  message: '"first_name" is required' })
      
      // Act
      await actorController.createActor(req, res);
  
      // Assert
      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({ message: '"first_name" is required' });
    });
  });

  describe('testando endpoint PUT /actors/:id', function () {
    it('editando um ator', async function () {
      const req = { body: addActor, params: { id: 1 } };
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(actorsService, 'editActor').resolves({ type: null, message: addActor })
  
      await actorController.editActor(req, res);
  
      expect(res.status).to.have.been.calledWith(200);
    });
  
    it('falha ao editar um ator com id inexistente', async function () {
      const req = { body: addActor, params: { id: 333 } };
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(actorsService, 'findById').resolves({ type: 'ACTOR_NOT_FOUND', message: 'Actor not found' })
  
      await actorController.editActor(req, res);
  
      expect(res.status).to.have.been.calledWith(404);
    });
  });

  describe('testando endpoint DELETE /actors/:id', function () {
    it('deletando um ator', async function () {
      const req = { params: { id: 1 } };
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.end = sinon.stub().returns(res);
  
      sinon.stub(actorsService, 'deleteActor').resolves({ type: null,  message: '' });
      
      // Act
      await actorController.deleteActor(req, res);
  
      // Assert
      expect(res.end).to.have.been.calledOnce;
    });
  
    it('falha ao deletar um ator com id inválido', async function () {
      const req = { params: { id: 'a' } };
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
  
      sinon.stub(actorsService, 'deleteActor').resolves({ type: 'INVALID_VALUE',  message: "\"value\" must be a number" });
      
      // Act
      await actorController.deleteActor(req, res);
  
      // Assert
      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({ message: "\"value\" must be a number" });
    });
  });
  afterEach(() => {
    sinon.restore();
  })
});