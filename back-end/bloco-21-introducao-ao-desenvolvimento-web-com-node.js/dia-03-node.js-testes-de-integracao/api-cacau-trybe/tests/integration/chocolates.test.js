
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/app');

const mockFile = JSON.stringify(
  {brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Usando método GET na lista de chocolates', function () {

  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
    sinon.stub(fs.promises, 'writeFile')
      .resolves();
  });

  afterEach(function () {
    sinon.restore();
  });

  const mockChocolate = {
    "name": "Milka",
    "brandId": 5
  };

  it('Usando o método GET para coletar toda a lista de chocolates', async function () {
    const output = [ 
    { id: 1, name: 'Mint Intense', brandId: 1 },
    { id: 2, name: 'White Coconut', brandId: 1 },
    { id: 3, name: 'Mon Chéri', brandId: 2 },
    { id: 4, name: 'Mounds', brandId: 3 }
  ];
    const response = await chai.request(app).get('/chocolates');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.haveOwnProperty('chocolates');
    expect(response.body.chocolates).to.deep.equal(output);
    expect(response.body.chocolates).to.be.instanceOf(Array);
    expect(response.body.chocolates).to.have.lengthOf(4);
  })

  it('Usando o método GET coletar apenas um chocolate id /chocolates/:id', async function () {
    const response = await chai.request(app).get('/chocolates/4');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      });
    });

  it('Testando um id inexistente para testar a resposta da API', async function () {
    const response = await chai.request(app).get('/chocolates/22');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal(
      { message: 'Id not found' }
    )
  })

  it('Testando o método GET em /chocolates/brand/:id', async function () {
    const response = await chai.request(app).get('/chocolates/brand/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([
      {
        "id": 1,
        "name": "Mint Intense",
        "brandId": 1
      },
      {
        "id": 2,
        "name": "White Coconut",
        "brandId": 1
      }
    ])
  })

  it('Usando o método POST cria um novo chocolate', async function () {
    const response = await chai.request(app).post('/chocolates').send(mockChocolate);
    expect(response.body).to.haveOwnProperty('name');
    expect(response.status).to.be.equal(201);
    expect(response.body.name).to.be.equal(mockChocolate.name);
    expect(response.body.brandId).to.be.equal(mockChocolate.brandId);
  });

  it('Escreve um novo chocolate no arquivo de chocolates', async function () {
    await chai.request(app).post('/chocolates').send(mockChocolate);
    expect(fs.promises.writeFile.called).to.be.equal(true);
  })
})