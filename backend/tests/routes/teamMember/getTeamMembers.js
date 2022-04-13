const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

describe('Get All team members from DB', () => {
  it('Get team member from DB', (done) => {
    chai
      .request(server)
      .get(`/teamMember/getTeamMembers`)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        done();
      })
      .catch(done);
  });
});
