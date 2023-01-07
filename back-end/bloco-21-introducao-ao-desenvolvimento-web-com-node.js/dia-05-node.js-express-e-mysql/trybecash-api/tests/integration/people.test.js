
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai

use(chaiHttp);

const peopleList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  },
]

describe('testando os endpoints do people', function () {
  it('testando o cadastro de uma pessoa', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai.request(app).post('/people').send(
      {
        firstName: 'Luke',
        lastName: 'Skywalker',
        email: 'luke.skywalker@trybe.com',
        phone: '851 678 4453',
      },
    );

    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal({ message: 'Pessoa cadastrada com sucesso com id 42'});
  });

  it('testando a listagem de todas as pessoas', async function () {
    sinon.stub(connection, 'execute').resolves([peopleList]);
    const response = await chai.request(app).get('/people');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  it('testando a listagem da pessoa com id 1', async function () {
    sinon.stub(connection, 'execute').resolves([[peopleList[0]]]);
    const response = await chai.request(app).get('/people/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList[0]);
  });

  it('testando a alteração de uma pessoa com id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai.request(app).put('/people/1').send({
        firstName: 'Lucas',
        lastName: 'Astor',
        email: 'l.astor',
        phone: '851 678 4453',
      },
    );

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ message: 'Pessoa de id 1 atualizada com sucesso'});
  });

  it('testando a exclusão da pessoa 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai.request(app).delete('/people/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ message: 'Pessoa de id 1 excluida com sucesso'});
  })

  afterEach(sinon.restore);
})