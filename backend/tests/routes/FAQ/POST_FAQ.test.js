const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

// Test for add FAQ
describe('Test to add FAQ:', () => {
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

  // Step 2 - add FAQ to DB
  it('add FAQ to DB at /faq', (done) => {
    const FAQData = {
      question: 'Test Question',
      answer: 'Test Answer',
      isActive: true,
      tags: ['tag1', 'tag2', 'tag3'],
    };

    chai
      .request(server)
      .post('/faq')
      .set('Authorization', `Bearer ${token}`)
      .send(FAQData)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('FAQ has been added');
        done();
      })
      .catch(done);
  });
});
