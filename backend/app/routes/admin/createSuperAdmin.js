import to from "await-to-js"
import Admin from '../../models/Admin';
import {ErrorHandler} from '../../../helpers/error';
import constants  from "../../../constants";


export default async (req, res, next) => {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  const adminData = {
    firstName: 'Root',
    lastName: 'Admin',
    email: 'hitktechcommunity@gmail.com',
    passwordHash: '$argon2i$v=19$m=16,t=2,p=1$U0p1dUpISnpsb2I1YzBNNQ$cKpl7z7aH0VjOozCmqc4eA',
    contact: '+919046500031',
    isSuperAdmin: true,
  };
  const [err, user] = await to(Admin.findOneAndUpdate({ email: 'hitktechcommunity@gmail.com' }, adminData, options));
  if (err) {
    console.log(err);
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
      user: req.body.email,
    });
    return next(error);
  }
  // eslint-disable-next-line no-underscore-dangle
  const response = { ...user._doc };
  delete response.passwordHash;
  res.status(200).send(response);
  return next();
};
