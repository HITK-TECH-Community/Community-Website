const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');
const Question = require('../../../app/models/question');

chai.use(chaiHttp);

// Test for posting answer
describe('Test for posting answer:', () => {
  it('post answer at /answers', (done) => {
    const questionData = {
      title: 'testtitle',
      description:
        '--this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description --',

      tags: ['tag1', 'tag2', 'tag3'],
    };
    // Saving a question in database for which answer will be posted
    const postedQuestion = new Question(questionData);
    postedQuestion.save();

    const answerData = {
      question_id: postedQuestion._id,
      created_by: 'test user',
      answer: 'this is test answer',
      created_on: new Date(Date.now()),
    };

    // request to post answer
    chai
      .request(server)
      .post('/answers')
      .send(answerData)
      .then((res) => {
        expect(res.body.message).to.equal('Answer has been added');
        done();
      })
      .catch(done);
  });
});
