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
  //Adding resource
  const [err] = await to(Resource.create({ ...req.body }));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err,
    });
    return next(error);
  }
  //Finding Admin
  const [err1, response] = await to(Admin.find().select('email username'));
  if (err1) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err1,
    });
    return next(error);
  }
  //Sending email to admin
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
  //Finally giving user message
  res.status(200).send({
    message: 'Resource has been added',
  });
  return next();
  
};
