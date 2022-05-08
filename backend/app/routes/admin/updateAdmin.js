const Admin = require('../../models/Admin');

exports.updateAdmin = (req, res) => {

  try {
    const { id } = req.params;
 /*    const { firstName,lastName,contact,username } = req.body; */
    
    const admin = await Admin.findOne({
        _id: id   /* please check */
    });

    // Admin does not exist
    if(!admin) {
        return next();
    }

    const updatedAdmin = await Admin.updateOne({
        _id: id,
        }, {  
        $set: result},
        { upsert: true }
    );

    res.json(updatedAdmin);
} catch(error) {
    next(error);
}
  res.send('Done');
};
