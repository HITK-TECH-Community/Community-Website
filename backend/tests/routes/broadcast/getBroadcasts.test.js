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
      limit: 2,
    };

    chai
      .request(server)
      .get(`/broadcast?page=${query.page}&limit=${query.limit}`)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.results.length).to.equal(query.limit);
        done();
      })
      .catch(done);
  });

  it('get broadcasts from DB at /broadcast with wrong info', (done) => {
    const query = {
      page: 0,
      limit: null,
    };

    chai
      .request(server)
      .get(`/broadcast?page=${query.page}&limit=${query.limit}`)
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Input Error: Fetching Failed');
        done();
      })
      .catch(done);
  });
});
