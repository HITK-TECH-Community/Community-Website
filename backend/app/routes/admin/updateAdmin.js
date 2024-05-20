const Admin = require('../../models/Admin');
const fs = require('fs');
const path = require('path');

module.exports =async (req, res) => {
   const admin = await Admin.findById(req.params.id);

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

   // Delete previous image if it exists
    if (admin.image && admin.image!=="undefined" && req.file?.path) {
      if (fs.existsSync(path.join(__dirname,'..' ,'..','..', admin.image))) {
        fs.unlinkSync(path.join(__dirname,'..' ,'..','..', admin.image)); 
      }
    }
    
    try {
      const updateFields = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            contact:req.body.contact,
            username:req.body.username
          };
    if (req.file?.path) {
      updateFields.image = req.file.path;
    }else{
      updateFields.image = admin.image;
    }
    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true }
    );
      return  res.status(200).json({"Req.Body":updateFields,"updatedDoc":updatedAdmin});
      } catch (err) {
      return res.status(500).json(err);
      }
      
  res.send('Done');
};
