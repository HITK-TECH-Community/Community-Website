const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');
chai.use(chaiHttp);

describe('Delete team member from DB',()=> {
    let token = ''
    let id = ''
    //Step 1 : login as admin
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

    //step 2 add team member to DB
    it('Add team member at /teamMember/addTeamMember',(done)=> {
        const testData = {
            full_name : "Aman test",
            description :"This is for testing the api" ,  
            linkedlin_url : "https//www.linkedin.in/AmanTest", 
            github_url : "https/www.github.com/Aman16-ai", 
            twitter_url : "https/www.tiwtter.com/Amanteset", 
            teams: ["Aman","anubhav"]
        }
        chai
            .request(server)
            .post('/teamMember/addTeamMember')
            .set('Authorization', `Bearer ${token}`)
            .set('content-type','multipart/form-data')
            .field("fullName",testData.full_name)
            .field("description",testData.description)
            .field("linkedlinUrl",testData.linkedlin_url)
            .field("githubUrl",testData.github_url)
            .field("twitterUrl",testData.twitter_url)
            .field("teams",testData.teams)
            .attach('image',"./tests/utils/file.png",'file.png')
            .then((res)=> { 
                id = res.body.result._id;
                done();
            })
            .catch(done)
    });

    //step 3 : delete team member from db 
    it("Deleting team member from DB",(done)=> {
        chai
            .request(server)
            .delete('/teamMember/deleteTeamMember')
            .set('Authorization', `Bearer ${token}`)
            .send({memberId:id})
            .then((req)=> {
                expect(req.body.message).to.equal("Deleted successfully");
                done();
            })
            .catch(done);
    })
})