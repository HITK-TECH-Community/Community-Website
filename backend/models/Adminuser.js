var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var adminUser = new Schema({
    
    email:{
        type:String,
        default:"",
    },
    admin: {
        type: Boolean,
        default: false
    }
});
adminUser.plugin(passportLocalMongoose);
const Users = mongoose.model('AdminUsers', adminUser); 
module.exports = Users