const to = require('await-to-js').default;
const Admin = require('../../models/Admin');

module.exports = async (req, res, next) => {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  const adminData = {
    firstName: 'Root',
    lastName: 'Admin',
    email: 'hitktechcommunity@gmail.com',
    passwordHash:
      '$argon2i$v=19$m=16,t=2,p=1$U0p1dUpISnpsb2I1YzBNNQ$cKpl7z7aH0VjOozCmqc4eA',
    contact: '+919046500031',
    isSuperAdmin: true,
  };
  const [err, user] = await to(
    Admin.findOneAndUpdate(
      { email: 'hitktechcommunity@gmail.com' },
      adminData,
      options
    )
  );
  if (err) {
    console.log(err);
    return false;
  }
  return next(user);
};
