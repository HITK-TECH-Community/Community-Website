const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');
const Question = require('../../../app/models/question');
chai.use(chaiHttp);

// Test for add Broadcast
describe('Test for upvoting question:', () => {
  // Step 1 - add question to DB

  it('upvote question at /question/upvote', (done) => {
    const questionData = {
      title: 'testtitle',
      description:
        '--this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description ----this is test description --',

      tags: ['tag1', 'tag2', 'tag3'],
    };
    let postedQuestion = new Question(questionData);
    postedQuestion.save();
    chai
      .request(server)
      .patch('/question/upvote')
      .send({ questionId: postedQuestion['_id'] })
      .then((res) => {
        expect(res.body.message).to.equal('Question has been upvoted');
        done();
      })
      .catch(done);
  });
});
