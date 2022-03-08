const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

describe('Test for adding a resource request:', () => {
  it('post add resource request to /resources', (done) => {
    const resourceData = {
      name: 'Mr User',
      email: 'User@test.com',
      url: 'https://www.linkedin.com/in/test',
      description: 'This is just for test',
      trustLevel: 5,
      expiryDate: '2099-09-28',
      additionalInfo: 'Its a good resource',
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
});
