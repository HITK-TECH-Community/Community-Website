const Admin = require('../../models/Admin');
const express = require("express");
const router = express.Router();

router.put("/update-data/:id", async (req, res,next) => {
    console.log(req.params.id)
    Admin.findOneAndUpdate({_id:req.params.id},{
        $set:{
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            contact:req.body.contact,
            email:req.body.email,
            password:req.body.password,
            username:req.body.username

        }
    })
    .then(result=>{
        res.status(200).json({
            updated_data:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
  });

  module.exports = router;