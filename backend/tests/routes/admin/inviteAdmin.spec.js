const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const server = require('../../../index');

const { describe, it } = mocha;

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Invite Admin', () => {
  it('should send a mail to invite an admin', (done) => {
    // First we login using the admin credentials to get the auth token
    const loginBody = {
      email: 'admin@gmail.com',
      password: 'check',
    };
    chai
      .request(server)
      .post('/auth/login')
      .send(loginBody)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.have.property('token');
        const { token } = response.body;

        // Now we invoke the inviteAdmin route to test the email functionality, and use the JWT token
        const inviteBody = {
          email: 'priyanshus.edu@gmail.com',
          data: {
            name: 'Priyanshu Sharma',
            link: 'https://www.google.com',
          },
        };
        chai
          .request(server)
          .post('/admin/inviteAdmin')
          .send(inviteBody)
          .set('Authorization', `Bearer ${token}`)
          .end((err2, response2) => {
            response2.should.have.status(200);
            response2.body.should.have.property('message');
            response2.body.message.should.equal('Email successfully sent');
            done();
          });
      });
  });
});
