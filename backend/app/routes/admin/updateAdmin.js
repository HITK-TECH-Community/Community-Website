const Admin = require('../../models/Admin');

exports.UpdatedUser = (req, res) => {
  console.log(req.body);
  Admin.findByIdAndUpdate(req.params.user_id, { $set: req.body }, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(`RESULT: ${result}`);
  });
  res.send('Done');
};
