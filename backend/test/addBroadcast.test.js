const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
chai.use(chaiHttp);

// Test for add Broadcast
describe('Test for add Broadcast:', () => {
let token = "";
  
    // Step 1 - login as admin
    it('log in as admin at /auth/login', (done) => {
      const loginData = {
        email: 'admin@gmail.com',
        password: 'check'
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
        }).catch(done);
    });


        // Step 2 - add broadcast to DB
        it('add broadcast to DB at /broadcast/add', (done) => {
            const broadcastData = {
              title: 'testtitle',
              content: '--this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content ----this is test content --',
              link: 'https://abc.xyz',
              isExpired: false,
              imageUrl: ['http://imageurl@imageurl.com','http://imageurl@imageurl.com','http://imageurl@imageurl.com'],
              category: 'testcategory'
            };
        
            chai
              .request(server)
              .post('/broadcast/add')
              .set("Authorization", "Bearer " + token) 
              .send(broadcastData)
              .then((res) => {
                  //if err (i.e res.ok === false) log err body in console
                  !res.ok && console.log(res.body);
                expect(res.status).to.equal(200);
                expect(res.body.message).to.equal("Broadcast added successfully");
                done();
              }).catch(done);
          });
  

})