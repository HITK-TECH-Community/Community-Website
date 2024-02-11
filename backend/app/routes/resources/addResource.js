import to from "await-to-js"
import Resource from '../../models/resource'
import { ErrorHandler } from "../../../helpers/error";
import constants from "../../../constants";
import Admin from '../../models/Admin'
import sendEmail from "../../../utility/sendEmail";
import { ResourceAddedInformingMailTemplate } from "../../../utility/emailTemplates";


export default async (req, res, next) => {
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
  } catch (e) {
    const error = new ErrorHandler(constants.ERRORS.EMAIL, {
      statusCode: 500,
      message: 'Sendgrid Error',
      errStack: e,
    });
    return next(error);
  }
  res.status(200).send({
    message: 'Resource has been added',
  });
  return next();
};
