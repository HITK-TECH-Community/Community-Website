const Admin = require('../../models/Admin');

module.exports = async (req, res, next) => {
  const options = req.query;
  console.log(options);
  const responseArr = await Admin.find({}).then(function (users) {
    const response = [];
    // users[0]["isSuperAdmin"] = false; uncomment this to check all conditions are working

    // In database some admins didn't insert their names so it returned null. Hence list of emails is being returned as this is inserted by each admin
    const adminPropertyToBeReturned = 'email';
    users.forEach((ele, i) => {
      if (
        options.superAdmin === 'true'
        && ele['isSuperAdmin'] === true
      ) {
        response.push(ele[adminPropertyToBeReturned])
      } else if (
        options.superAdmin === 'false'
        && ele['isSuperAdmin'] === false
      ) {
        response.push(ele[adminPropertyToBeReturned])
      } else if (
        options.superAdmin === '' || null
        && ele['isSuperAdmin'] === false
      ) {
        response.push(ele[adminPropertyToBeReturned])
      }
    })
    return response;
  })
  res.status(200).send(responseArr);
  return next();
};
