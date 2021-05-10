const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

// Test for get Broadcasts
describe('Test for get Broadcasts:', () => {
  it('get broadcasts from DB at /broadcast', (done) => {
    const query = {
      page: 2,
      tags: 'tag1,tag2',
      year: 2021,
      month: 4,
    };

    chai
      .request(server)
      .get(`/broadcast?page=${query.page}&tags=${query.tags}&year=${query.year}&month=${query.month}`)
      .then((res) => {
        expect(res.status).to.equal(200);
        done();
      })
      .catch(done);
  });

  it('get broadcasts from DB at /broadcast with wrong info', (done) => {
    const query = {
      page: 0,
    };

    chai
      .request(server)
      .get(`/broadcast?page=${query.page}`)
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('"page" must be greater than or equal to 1');
        done();
      })
      .catch(done);
  });
});
