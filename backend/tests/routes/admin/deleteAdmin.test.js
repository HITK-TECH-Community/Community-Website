const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../index');

chai.use(chaiHttp);

// Test for delete Admin
describe("Test For Delete Admin : ", () => {
    let token = '';
    let id = '';

    //Step 1 - login as super admin
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

    // Step 2 - Post The New Admin
    it('Post admin at /admin', (done) => {
        const adminData = {
          email: 'demo-user@gmail.com',
          password: 'demo@123-USER',
          firstName : 'Demo',
          lastName : 'User'
        };
    
        chai
          .request(server)
          .post('/admin')
          .set('Authorization', `Bearer ${token}`)
          .send(adminData)
          .then((res) => {
            expect(res.status).to.equal(200);
            id = res.body._id;
            done();
        })
        .catch(done);
    });

    //Step 3 - Delete The Admin
    it("Delete Admin At /admin/deleteAdmin", (done) => {
        const data = {
            id : id
        };

        chai
            .request(server)
            .delete('/admin/deleteAdmin')
            .set('Authorization', `Bearer ${token}`)
            .send(data)
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.be.equal("Admin deleted successfully")
                done();
            }).catch(done);
    });
    
    //Step 4 - Delete Not Exist Admin
    it("Delete Admin At /admin/deleteAdmin", (done) => {
        const data = {
            id : id
        };

        chai
            .request(server)
            .delete('/admin/deleteAdmin')
            .set('Authorization', `Bearer ${token}`)
            .send(data)
            .then((res) => {
                expect(res.status).to.equal(400);
                expect(res.body.message).to.be.equal("Admin doesn't exist")
                done();
            }).catch(done);
    });
})