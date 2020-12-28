const express = require("express");
const router = express.Router();
const crypto=require('crypto');

const Admin = require("./../models/Admin.js");
//const imgModel = require("../../models/user/Image.js");

const {mailverification,resetpassword} = require("./../emails/mailverification");
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken');
router.post('/forget-password',async(req,res)=>{
	try{
		var message=null,error=null
		const user=await Admin.findOne({email:req.body.email})
		if(user === null)
		error='Email is not registered'

		if(error === null)
		{
			resetpassword(req.body.email);
			message='Check you emailid and reset your password.'
		}
		res.send('done')
		console.log('reset link send');
	}catch(e){
		//res.render('message-reset.ejs',{message:null,error:'Server error'})
		console.log('something is wrong');
	}
})
//My new routes


//my new routes

router.post("/reset-password", async (req, res) => {
	try {
	  const token = req.body.token;
	  const decode = jwt.verify(token, "thisismyjwtsecret2");
  
	  var message = null,
		error = null;
	  if (decode.type !== "resetpassword") error = "Wrong token!!";
  
	  if (error === null) {
		const user = await Admin.findOne({ email: decode.emailid });
		const password = req.body.password;
		user.password = password;
		await user.save();
		message = "Password changed sucessfully";
	  }
	  res.send('changed')
	} catch (e) {
		res.send('oops')
	}
  });

  module.exports = router;