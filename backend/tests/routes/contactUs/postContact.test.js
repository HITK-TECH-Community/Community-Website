const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

// Test for add Broadcast
describe('Test for add contact:', () => {
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

  // Step 2 - add contact to DB
  it('add contact to DB at /contactus', (done) => {
    const contactData = {
      name: `asif 777`,
      email: `itsmeasif@gmail.com`,
      subject: `hey aa my name is asif ..`,
      message: `i am an jwoc particpitant so happy to contribute this`,
    };

    chai
      .request(server)
      .post('/contactus')
      .send(contactData)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Contact Request has been added');
        done();
      })
      .catch(done);
  });
});
