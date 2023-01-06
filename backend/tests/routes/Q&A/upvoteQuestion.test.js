const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');
const Question = require('../../../app/models/question');

chai.use(chaiHttp);

// Test for upvoting question
describe('Test for upvoting question:', () => {
  it('upvote question at /question/upvote', (done) => {
    const questionData = {
      title: 'testtitle',
      description:
        '--this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description --',

      tags: ['tag1', 'tag2', 'tag3'],
    };

    // Saving question which will be upvoted.
    const postedQuestion = new Question(questionData);
    postedQuestion.save();
    chai
      .request(server)
      .patch('/question/upvote')
      .send({ questionId: postedQuestion._id })
      .then((res) => {
        expect(res.body.message).to.equal('Question has been upvoted');
        done();
      })
      .catch(done);
  });
});
