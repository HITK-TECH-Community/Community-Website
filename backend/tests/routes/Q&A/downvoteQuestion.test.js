const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');
const Question = require('../../../app/models/question');

chai.use(chaiHttp);

// Test for downvoting question
describe('Test for downvoting question:', () => {
  it('downvote question at /question/downvote', (done) => {
    const questionData = {
      title: 'testtitle',
      description:
        '--this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description --',

      tags: ['tag1', 'tag2', 'tag3'],
    };

    // Saving question which will be downvoted.
    const postedQuestion = new Question(questionData);
    postedQuestion.save();
    chai
      .request(server)
      .patch('/question/downvote')
      .send({ questionId: postedQuestion._id })
      .then((res) => {
        expect(res.body.message).to.equal('Question has been down voted');
        done();
      })
      .catch(done);
  });
});
