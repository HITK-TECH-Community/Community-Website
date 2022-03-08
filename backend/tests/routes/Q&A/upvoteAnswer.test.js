const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');
const Answer = require('../../../app/models/answers');
const Question = require('../../../app/models/question');

chai.use(chaiHttp);

// Test for add Broadcast
describe('Test for upvoting answer:', () => {
  // Step 1 - add question to DB

  it('upvote answer at /answers/upvote', (done) => {
    const questionData = {
      title: 'testtitle',
      description:
        '--this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description --',

      tags: ['tag1', 'tag2', 'tag3'],
    };
    let postedQuestion = new Question(questionData);
    postedQuestion.save();
    let answerData = {
      question_id: postedQuestion._id,
      answer: 'this is test answer',
      created_by: 'test user',
      created_on: new Date(Date().now),
    };

    let postedAnswer = new Answer(answerData);
    postedAnswer.save();
    chai
      .request(server)
      .patch('/answers/upvote')
      .send({ answerId: postedAnswer['_id'] })
      .then((res) => {
        expect(res.body.message).to.equal('Answer has been upvoted');
        done();
      })
      .catch(done);
  });
});
