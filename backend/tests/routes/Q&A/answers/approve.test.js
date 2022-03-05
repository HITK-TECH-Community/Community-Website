const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../../index');

chai.use(chaiHttp);

describe('Approve test for Answers', () => {
  let qId = '';
  let aId = '';
  let approved = '';
  it('should return questions with status code 200 with question array json object', (done) => {
    chai
      .request(server)
      .get('/question/getallquestions')
      .then((res) => {
        expect(res.status).to.equal(200);
        qId = res.body[0]._id;
        done();
      })
      .catch(done);
  });
  it('should return answer with status code 200 with answer array json object', (done) => {
    chai
      .request(server)
      .get('/answers')
      .send({ question_id: qId })
      .then((res) => {
        expect(res.status).to.equal(200);
        aId = res.body.data[0]._id;
        approved = res.body.data[0].isApproved;
        done();
      })
      .catch(done);
  });
  it('should return answer with updated isApproved with status code 200 with answer json object', (done) => {
    chai
      .request(server)
      .patch('/answers/approveAnswer')
      .send({ answerId: aId, isApproved: !approved })
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body._id).to.equal(aId);
        expect(res.body.isApproved).to.equal(!approved);
        done();
      })
      .catch(done);
  });
});
