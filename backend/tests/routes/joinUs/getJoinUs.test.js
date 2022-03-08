const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

describe('Test for get join us requests:', () => {
  let token = '';

  // Step 1 - login as admin
  it('log in as admin at /auth/login', (done) => {
    const loginData = {
      email: 'kajolkumarisingh222@gmail.com',
      password: 'password',
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

  // Step 2 - get join us requests
  it('get join us requests from db from /joinus', (done) => {
    chai
      .request(server)
      .get('/joinUs')
      .set('Authorization', `Bearer ${token}`)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        done();
      })
      .catch(done);
  });
});
