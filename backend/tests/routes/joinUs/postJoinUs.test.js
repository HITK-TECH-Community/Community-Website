const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

describe('Test for post join us requests:', () => {
  it('post join us requests to /joinus', (done) => {
    const joinUsData = {
      name: 'hazem',
      email: 'hazem@test.com',
      linkdin: 'https://www.linkedin.com/in/test',
      description: 'This is just for test',
      year: '4th',
      college: 'Test University',
      contact: '0123456789',
      interestedDomain: ['Backend'],
      department: 'CS',
    };
    chai
      .request(server)
      .post('/joinUs')
      .send(joinUsData)
      .then((res) => {
        expect(res.status).to.equal(200);
        done();
      })
      .catch(done);
  });
});
