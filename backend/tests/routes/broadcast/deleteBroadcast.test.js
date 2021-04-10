const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);

// Test for delete Broadcast
describe('Test for delete Broadcast:', () => {
  let token = '';

  // Step 1 - login as admin
  it('log in as admin at /auth/login', (done) => {
    const loginData = {
      email: 'admin@gmail.com',
      password: 'check',
    };

    chai
      .request(server)
      .post('/auth/login')
      .send(loginData)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.email).to.equal(loginData.email);
        expect(res.body.isSuperAdmin).to.equal(true);
        expect(res.body.token).to.be.a('string');
        token = res.body.token;
        done();
      })
      .catch(done);
  });

  // Step 2 - delete broadcast from DB
  it('delete broadcast from DB at /broadcast/:id', (done) => {
    const id = '6071b03b2e497b2f4806e90f';
    chai
      .request(server)
      .delete(`/broadcast/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Broadcast deleted successfully');
        done();
      })
      .catch(done);
  });

  // Step 2 - delete broadcast test if broadcast doesn't exist for given id:
  it('delete broadcast from DB with wrong id at /broadcast/:id', (done) => {
    const id = '01';
    chai
      .request(server)
      .delete(`/broadcast/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal("Broadcast doesn't exist");
        done();
      })
      .catch(done);
  });
});