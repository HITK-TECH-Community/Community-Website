const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../../index');

chai.use(chaiHttp);

describe('Approve test for Question', () => {
  let qId = '';
  let approved = '';
  it('should return question with status code 200 with question json object', (done) => {
    chai
      .request(server)
      .get('/question/getallquestions')
      .then((res) => {
        expect(res.status).to.equal(200);
        qId = res.body[0]._id;
        approved = res.body[0].isApproved;
        done();
      })
      .catch(done);
  });
  it('should return question with status code 200 with question json object', (done) => {
    chai
      .request(server)
      .patch('/question/approveQuestion')
      .send({ questionId: qId, isApproved: !approved })
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body._id).to.equal(qId);
        expect(res.body.isApproved).to.equal(!approved);
        done();
      })
      .catch(done);
  });
});
