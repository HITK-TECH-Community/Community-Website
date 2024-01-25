import nodemailer from "nodemailer"
import to from "await-to-js"
import ejs from "ejs"
import { ErrorHandler } from "./error";
import constants from "../constants"
import {EMAIL_HOST,EMAIL_PASS,EMAIL_USER} from "../config/index"
import { getMailTemplate } from "../utility/emailTemplates";


const transporter = nodemailer.createTransport({
  type: 'SMTP',
  host: EMAIL_HOST,
  secure: true,
  debug: true,
  port: 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export default sendEmail = async (email, data, type) => {
  const template = getMailTemplate(type);
  const { subject } = template;
  let { text } = template;
  text = ejs.render(text, data);
  const mailOptions = {
    from: EMAIL_USER,
    bcc: email,
    subject,
    text,
  };
  const [err, response] = await to(transporter.sendMail(mailOptions));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.UNEXPECTED, {
      statusCode: '500',
      message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
      errStack: err,
      user: email,
    });
    throw error;
  }
  return response;
};
