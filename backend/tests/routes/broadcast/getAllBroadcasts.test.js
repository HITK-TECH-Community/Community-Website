const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

// Test for get Broadcasts
describe('Test for get all Broadcasts:', () => {
  it('get all broadcasts from DB at /broadcast/all', (done) => {
    chai
      .request(server)
      .get(`/broadcast/all`)
      .then((res) => {
        expect(res.status).to.equal(200);
        done();
      })
      .catch(done);
  });
});
