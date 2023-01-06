const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

// Test for updating question status
describe('Test for updating question status:', () => {

    let id = "";

    // Step 1 : Posting Question
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
            id = res.body.id;
            done();
          })
          .catch(done);
    });

    // Updating Status
    it('Updating question at /question/updateStatus', (done) => {
        chai
            .request(server)
            .patch('/question/updateStatus')
            .send({ id: id, status : true })
            .then((res) => {
                expect(res.body.message).to.equal('Status Updated...');
                done();
            }).catch(done);
    });
});
