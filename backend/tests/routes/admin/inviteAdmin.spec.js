/* const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Invite Admin', () => {
  let token = ''

  // Step 1 : login as admin

  it('login as admin at auth/token', (done) => {
    // First we login using the admin credentials to get the auth token
    const loginBody = {
      email: 'kajolkumarisingh222@gmail.com',
      password: 'password',
    };

    chai
      .request(server)
      .post('/auth/login')
      .send(loginBody)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.have.property('token');
        token = response.body.token;
        done();
      });
  });

  // Step 2 : invite admin
  it('invite admin',(done) => {
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
      .set('Authorization', `Bearer ${token}`)
      .send(inviteBody)
      .end((err2, response2) => {
        console.log(response2.body);
        response2.should.have.status(200);
        response2.body.should.have.property('message');
        response2.body.message.should.equal('Email successfully sent');
        done();
      });
  })

  
}); */
