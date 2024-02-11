const to = require('await-to-js').default;
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const JoinUs = require('../../models/joinUs');
const Admin = require('../../models/Admin');
const sendEmail = require('../../../utility/sendEmail');
const { JoinUsMailTemplate } = require('../../../utility/emailTemplates');

module.exports = async (req, res, next) => {
  const [err,createdResponse] = await to(JoinUs.create({ ...req.body }));
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
        'Notification : New Join Us Requets !',
        JoinUsMailTemplate(adminUser.username, req)
      );
    });
  } catch (e) {
    const error = new ErrorHandler(constants.ERRORS.EMAIL, {
      statusCode: 500,
      message: 'Sendgrid Error',
      errStack: e,
    });
    return next(error);
  }

  res.status(200).send({
    message: 'Request Submitted Successfully',
    response : createdResponse
  });
  return next();
};
