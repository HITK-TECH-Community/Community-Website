const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');
const Question = require('../../../app/models/question');

chai.use(chaiHttp);

// Test for updating answer status
describe('Test for updating answer status:', () => {

    let id = '';

    // Step 1 : Post The Answer
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
            id=res.body.id;
            done();
          })
          .catch(done);
    });

    // Step 2 : Updating Answer Status
    it('Updating answer at /answers/updateStatus', (done) => {
        chai
            .request(server)
            .patch('/answers/updateStatus')
            .send({ id: id, status : true })
            .then((res) => {
                expect(res.body.message).to.equal('Status Updated...');
                done();
            }).catch(done);
    });
});
