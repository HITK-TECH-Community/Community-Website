const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

// Test for delete Broadcast
describe('Test for delete Broadcast:', () => {
  let token = '';
  let id = '';

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

  // Step 2 - add broadcast to DB
  it('add broadcast to DB at /broadcast', (done) => {
    const broadcastData = {
      title: 'testtitle',
      content:
        '--this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content --',
      link: 'https://abc.xyz',
      expiresOn: new Date(),
      imageUrl: ['http://imageurl@imageurl.com', 'http://imageurl@imageurl.com', 'http://imageurl@imageurl.com'],
      tags: ['tag1', 'tag2', 'tag3'],
    };

    chai
      .request(server)
      .post('/broadcast')
      .set('Authorization', `Bearer ${token}`)
      .send(broadcastData)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Broadcast added successfully');
        id = res.body.id;
        done();
      })
      .catch(done);
  });

  // Step 3 - delete broadcast from DB
  it('delete broadcast from DB at /broadcast/:id', (done) => {
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
    id = '01';
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
