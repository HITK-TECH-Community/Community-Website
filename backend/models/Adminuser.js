var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var AdminUser = new Schema({
    
    email:{
        type:String,
        default:"",
    },
    admin: {
        type: Boolean,
        default: true
    }
});
AdminUser.plugin(passportLocalMongoose);
const Users = mongoose.model('AdminUsers', AdminUser); 
module.exports = Users