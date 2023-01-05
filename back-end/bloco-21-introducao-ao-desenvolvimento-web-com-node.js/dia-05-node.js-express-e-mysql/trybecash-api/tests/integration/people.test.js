
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai

use(chaiHttp);

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

  afterEach(sinon.restore);
})