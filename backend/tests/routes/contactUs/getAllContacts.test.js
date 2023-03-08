const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

// Test for get Broadcasts
describe('Test for get all Contacts:', () => {
  it('get all contacts from DB at /getcontactus', (done) => {
    chai
      .request(server)
      .get(`/getcontactus`)
      .then((res) => {
        expect(res.status).to.equal(200);
        done();
      })
      .catch(done);
  });
});
