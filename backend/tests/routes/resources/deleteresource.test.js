const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);
describe('Test for deleting a resource', () => {
  const id = '';

  // Step 1 add broadcast to db
  it('add resource request to/resource', (done) => {
    const resourceData = {
      name: 'sample name',
      email: 'Sample@test.com',
      url: 'https://www.linkedin.com/in/test',
      description: 'test for resources',
      trustLevel: 5,
      expiryDate: '2099-09-28',
      additionalInfo: 'Nice resources',
    };

    chai
      .request(server)
      .post('/resources')
      .send(resourceData)
      .then((res) => {
        expect(res.status).to.equal(200);
        done();
      })
      .catch(done);
  });

  // Step 2 delete resource from db
  it('delete resource from DB of a particular id', (done) => {
    chai
      .request(server)
      .delete(`/resources/deleteResource`)
      .send(id)
      .then(() => {
        done();
      })
      .catch(done);
  });

  // Step 3 - delete resource with wrong id
  it('delete resource from DB with wrong id', (done) => {
    chai
      .request(server)
      .delete(`/resources/deleteResource`)
      .send(id)
      .then(() => {
        done();
      })
      .catch(done);
  });
});
