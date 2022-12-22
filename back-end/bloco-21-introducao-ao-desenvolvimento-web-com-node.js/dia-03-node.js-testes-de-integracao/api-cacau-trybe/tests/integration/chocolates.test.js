
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/app');

describe('Usando método GET na lista de chocolates', function () {
  it('Usando o método GET para coletar toda a lista de chocolates', async function () {
    const output = [ 
    { id: 1, name: 'Mint Intense', brandId: 1 },
    { id: 2, name: 'White Coconut', brandId: 1 },
    { id: 3, name: 'Mon Chéri', brandId: 2 },
    { id: 4, name: 'Mounds', brandId: 3 },
    { id: 5, name: 'Lindt', brandId: 4}
  ];
    const response = await chai.request(app).get('/chocolates');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(output);
    expect(response.body).to.be.instanceOf(Array);
  })

  it('Usando o método POST cria um novo chocolate', async function () {
    const mockChocolate = {
      "name": "Milka",
      "brandId": 5
    };
    const response = await chai.request(app).post('/chocolates').send(mockChocolate);
    expect(response.body).to.haveOwnProperty('name');
    expect(response.status).to.be.equal(201);
    expect(response.body.name).to.be.equal(mockChocolate.name);
    expect(response.body.brandId).to.be.equal(mockChocolate.brandId);
  });
})