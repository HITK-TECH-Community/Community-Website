const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');
const Answer = require('../../../app/models/answers');
const Question = require('../../../app/models/question');

chai.use(chaiHttp);

// Test for downvoting answer
describe('Test for downvoting answer:', () => {
  it('downvote answer at /answers/downvote', (done) => {
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
      answer: 'this is test answer',
      created_by: 'test user',
      created_on: new Date(Date().now),
    };

    // Saving an answer for above question which will be downvoted.
    const postedAnswer = new Answer(answerData);
    postedAnswer.save();
    chai
      .request(server)
      .patch('/answers/downvote')
      .send({ answerId: postedAnswer._id })
      .then((res) => {
        expect(res.body.message).to.equal('Answer has been down voted');
        done();
      })
      .catch(done);
  });
});
