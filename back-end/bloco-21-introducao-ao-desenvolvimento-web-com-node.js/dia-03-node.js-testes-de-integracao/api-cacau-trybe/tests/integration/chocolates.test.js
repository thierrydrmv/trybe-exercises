
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/app');

const mockFile = JSON.stringify(
  {
    brands: [
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

  it('Usando o método GET em /chocolates para coletar toda a lista de chocolates', async function () {
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

  it('Usando o método GET em /chocolates/:id para coletar apenas o chocolate específico', async function () {
    const response = await chai.request(app).get('/chocolates/4');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      });
    });

  it('Testando um id inexistente no método GET para testar a resposta da API', async function () {
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

  it('Usando o método GET em /chocolates/total que retorna todos os chocolates', async function () {
    const response = await chai.request(app).get('/chocolates/total');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ totalChocolates: 4 })
  });

  it('Usando o método GET em /chocolates/search?q=mo com a chave query Mo ', async function () {
    const response = await chai.request(app).get('/chocolates/search?q=mo');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([
      {
        "id": 3,
        "name": "Mon Chéri",
        "brandId": 2
      },
      {
        "id": 4,
        "name": "Mounds",
        "brandId": 3
      }
    ])
  })

  it('Usando o método GET com a chave query que não existe', async function () {
    const response = await chai.request(app).get('/chocolates/search?q=xablau');
    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal([]);
  })

  describe('Usando método POST na lista de chocolates', function () {

    const mockChocolate = {
      "name": "Milka",
      "brandId": 5
    };

    it('Usando o método POST em /chocolates cria um novo chocolate', async function () {
      const response = await chai.request(app).post('/chocolates').send(mockChocolate);
      expect(response.body).to.haveOwnProperty('name');
      expect(response.status).to.be.equal(201);
      expect(response.body).to.deep.equal({
        "id": 5,
        "name": "Milka",
        "brandId": 5
      });
    });
  
    it('Escreve um novo chocolate no arquivo de chocolates', async function () {
      await chai.request(app).post('/chocolates').send(mockChocolate);
      expect(fs.promises.writeFile.called).to.be.equal(true);
    });
  })

  describe('Utilizando método PUT para editar dados dos chocolates', function () {

    it('Edita o chocolate com o método PUT /chocolates/:id', async function () {
      const editChocolate = { 
        "name": "Mint Pretty Good",
        "brandId": 2
      }
      const response = await chai.request(app).put('/chocolates/1').send(editChocolate);
      expect(response.body).to.haveOwnProperty('name');
      expect(response.status).to.be.equal(200);
      expect(response.body.name).to.be.equal(editChocolate.name);
      expect(response.body.brandId).to.be.equal(editChocolate.brandId);
    })
  
    it('Testa se o PUT quebra caso não exista o id', async function () {
      const response = await chai.request(app).put('/chocolates/22');
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({
        message: 'Chocolate Id not found',
      });
    })

    describe('Utilizando o método DELETE para remover chocolates', function () {
      it('Remove um chocolate com o método DELETE /chocolates/:id', async function () {
        const response = await chai.request(app).delete('/chocolates/2');
        expect(response.status).to.be.equal(204);
      })

      it('Se não possui chocolate com esse Id gera erro', async function () {
        const response = await chai.request(app).delete('/chocolate/11');
        expect(response.status).to.be.equal(404);
        console.log(response);
        expect(response.body).to.deep.equal({ message: 'Id not found'})
      })
    })
  })
})