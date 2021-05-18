const { expect } = require('chai');
const chaiHttp = require('chai-http');
const chai = require('chai');
const Admin = require('../../../app/models/Admin');
const server = require('../../../index');

chai.use(chaiHttp);

after((done) => {
  // Removing the test admin data before running all the test cases
  Admin.deleteOne({ email: 'john@wick.com' }, () => {
    done();
  });
});

// Test suit for forgot password test cases
describe('Forgot password tests', () => {
  let forgotPasswordURL = null; // Initial forgot password url set to null

  // Step 1 - We start by creating an admin
  it('Creating an admin', (done) => {
    const adminData = {
      firstName: 'john',
      lastName: 'wick',
      email: 'john@wick.com',
      password: '123asd',
      contact: '+919090909090',
      username: 'johnwick123',
    };

    chai
      .request(server)
      .post('/admin/superAdmin')
      .send(adminData)
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body.firstName).to.equal(adminData.firstName);
        expect(res.body.lastName).to.equal(adminData.lastName);
        expect(res.body.isSuperAdmin).to.equal(true);
        done();
      });
  });

  // Step 3 - We send a request to /forgotpassword and get a URL back
  it('Sending a forgot password request', (done) => {
    const adminData = {
      email: 'john@wick.com',
    };

    chai
      .request(server)
      .post('/admin/forgotpassword')
      .send(adminData)
      .end((err, res) => {
        forgotPasswordURL = res.body.resetPasswordURL.replace('http://localhost:3500', ''); // Add the path with token to this varible for our next test case
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body.resetPasswordURL).to.include('http://localhost:3500/admin/resetpassword/');
        done();
      });
  });

  // Step 4 - Chaning our password by sending the request to the above URL (forgotPasswordURL)
  it('Resetting new password', (done) => {
    const adminData = {
      newPassword: 'newpassword123',
    };

    chai
      .request(server)
      .post(forgotPasswordURL)
      .send(adminData)
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Reset Password Successful');
        done();
      });
  });

  // Step 5 - Login admin with the new password
  it('Logging in with the new password', (done) => {
    const adminData = {
      email: 'john@wick.com',
      password: 'newpassword123',
    };

    chai
      .request(server)
      .post('/auth/login')
      .send(adminData)
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body.name).to.equal('john wick');
        expect(res.body.email).to.equal(adminData.email);
        expect(res.body.isSuperAdmin).to.equal(true);
        expect(res.body.token).to.be.a('string');
        done();
      });
  });
});
