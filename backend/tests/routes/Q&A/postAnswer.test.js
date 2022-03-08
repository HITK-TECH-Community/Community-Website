const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');
const Question = require('../../../app/models/question');

chai.use(chaiHttp);

// Test for add Broadcast
describe('Test for posting answer:', () => {
  // Step 1 - add question to DB

  it('post answer at /answers', (done) => {
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
      created_by: 'test user',
      answer: 'this is test answer',
      created_on: new Date(Date.now()),
    };

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
