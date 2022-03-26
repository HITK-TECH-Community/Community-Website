const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

// Test for posting question
describe('Test for posting question:', () => {
  it('post question at /question', (done) => {
    const questionData = {
      title: 'testtitle',
      description:
        '--this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description --',

      tags: ['tag1', 'tag2', 'tag3'],
    };
    chai
      .request(server)
      .post('/question')
      .send(questionData)
      .then((res) => {
        expect(res.body.message).to.equal('Question has been added');
        done();
      })
      .catch(done);
  });
});
