const chai = require('chai')
const {expect} = require("chai")
const chaiHttp = require('chai-http')
const server = require('../../../index');

chai.use(chaiHttp);

//Test for deleting Join us
describe('Test for delete Join us',()=> {
    let id = '';

    //Step 1: add join us to DB
    it('Add joinus to Db at /joinUs',(done)=> {
        const joinUsData = {
            name: 'AmanTest',
            email: 'Aman@test.com',
            linkdin: 'https://www.linkedin.com/in/test',
            description: 'Testing deleting join us api',
            year: '1th',
            college: 'GSSIPU University',
            contact: '0123456789',
            interestedDomain: ['Backend'],
            department: 'CS(AIML)',
        };

        chai
        .request(server)
        .post('/joinUs')
        .send(joinUsData)
        .then((res) => {
          expect(res.status).to.equal(200);
          id = res.body.response._id
          done();
        })
        .catch(done);
    });

    //step 2 : delete joinUs from DB
    it('Delete joinus at /joinUs/deleteJoinUs',(done)=> {
        chai
            .request(server)
            .delete("/joinUs/deleteJoinUs")
            .send({itemId:id})
            .then((res)=> {
                expect(res.body.message).to.equal("Deleted successfully")
                done();
            })
            .catch(done);
    })
})