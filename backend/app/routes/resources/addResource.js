const to = require('await-to-js').default;
//Getting resource modal
const Resource = require('../../models/resource');
//Getting resource handler
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
//Getting admin model and sendEmail utility
const Admin = require('../../models/Admin');
const sendEmail = require('../../../utility/sendEmail');
//Getting mail template
const { ResourceAddedInformingMailTemplate } = require('../../../utility/emailTemplates');
//ResourceAddedInformingMailTemplate
module.exports = async (req, res, next) => {
  const [err] = await to(Resource.create({ ...req.body }));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err,
    });
    return next(error);
  }
  const [err1, response] = await to(Admin.find().select('email username'));
  if (err1) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err1,
    });
    return next(error);
  }
  try {
    response.map(async (adminUser) => {
      await sendEmail(
        adminUser.email,
        'Notification : New Resource Added !',
        ResourceAddedInformingMailTemplate(adminUser.username, req)
      );
    });
  } catch (err) {
    const error = new ErrorHandler(constants.ERRORS.EMAIL, {
      statusCode: 500,
      message: 'Sendgrid Error',
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    message: 'Resource has been added',
  });
  return next();
  // try {
  //   //Destructuring fields which are must
  //   const { name, email, url, trustLevel, expiryDate } = req.body;
  //   //If required fields are empty raising special error:
  //   if (!name || !email || !url || !trustLevel || !expiryDate) {
  //     const error = new ErrorHandler(constants.ERRORS.REQEMPTYFIELDS, {
  //       statusCode: 500,
  //       message: 'Required Fields Must Be Filled',
  //       user: req.body.email,
  //       errStack: 'Unable to post resource',
  //     });
  //     return next(error);
  //   }
  //   //If all important fields are provided going ahead with storing data in DB
  //   const newResource = await Resource.create({ ...req.body });
  //   //If data is not stored in DB, throwing DB error
  //   if (!newResource) {
  //     const error = new ErrorHandler(constants.ERRORS.DATABASE, {
  //       statusCode: 500,
  //       message: 'Database Error',
  //       user: req.body.email,
  //       errStack: 'Unable to post resource',
  //     });
  //     return next(error);
  //   }
  //   //Else sending data stored as response
  //   res.status(200).send(newResource);
  //   return next();
  // } catch (e) {
  //   //If due to some reason data is not posted, User will get this message
  //   const error = new ErrorHandler(constants.ERRORS.DATABASE, {
  //     statusCode: 500,
  //     message: 'Database Error',
  //     user: req.body.email,
  //     errStack: 'Unable to post resource',
  //   });
  //   return next(error);
  // }
};
