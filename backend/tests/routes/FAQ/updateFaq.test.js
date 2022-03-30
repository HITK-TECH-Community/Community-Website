const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const faq = require('../../../app/models/faq');
const server = require('../../../index');

chai.use(chaiHttp);

// Test for add FAQ
describe('Test to update FAQ:', () => {
  let token = '';
  let id = '';

  // Step 1 - login as admin
  it('log in as admin at /auth/login', (done) => {
    const loginData = {
      email: 'kajolkumarisingh222@gmail.com',
      password: 'password',
    };

    chai
      .request(server)
      .post('/auth/login')
      .send(loginData)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.email).to.equal(loginData.email);
        expect(res.body.isSuperAdmin).to.equal(true);
        expect(res.body.token).to.be.a('string');
        token = res.body.token;
        done();
      })
      .catch(done);
  });

  // Step 2 - Delete Existing Data
  it('delete existing data..', async () => {
    await faq.findOneAndDelete({ question: 'This is Test Question' });
  });

  // Step 3 - add FAQ to DB
  it('add FAQ to DB at /faq', (done) => {
    const FAQData = {
      question: 'This is Test Question',
      answer: 'This is Test Answer',
      isActive: true,
      tags: ['tag1', 'tag2', 'tag3'],
    };

    chai
      .request(server)
      .post('/faq')
      .set('Authorization', `Bearer ${token}`)
      .send(FAQData)
      .then((res) => {
        expect(res.status).equal(200);
        expect(res.body.message).to.equal('FAQ has been added');
        id = res.body.response._id;
        console.log(id)
        done();
      })
      .catch(done);
  });

  //step 4 : update faq in db
  it('update faq',(done)=> {
    const UpdatedFAQData = {
        faqId : "6073bfed13ab1419f4d898ce",
        question: 'is Elon musk an alien',
        answer: 'yes',
        isActive: true,
        tags: ['tag3'],
    };

    chai
        .request(server)
        .put("/updateFaq")
        .send(UpdatedFAQData)
        .end((res)=> {
            console.log(res.body)
            expect(res.body.message).to.equal("FAQ updated successfully")
            done();
        })
        
  })
});
