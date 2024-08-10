const to = require('await-to-js').default;
const Broadcast = require('../../models/Broadcast');
const Subscribers = require('../../models/Subscriber');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const nodemailer = require('nodemailer')
const config = require('../../../config')
const { broadcastPublishMailTemplate } = require('../../../utility/emailTemplates')

module.exports = async (req, res, next) => {
    if (Object.keys(req.body).length <= 1) {
        return res.status(200).send({
            message: "Not Sufficient Data"
        })
    }

    const data = {
        ...req.body
    };

    delete data.id;
    let approving = data?.approving
    delete data?.approving

    const [err, result] = await to(Broadcast.findOneAndUpdate({ _id: req.body.id }, { $set: data }));

    // error occured due to the some problem
    if (err) {
        const error = new ErrorHandler(constants.ERRORS.DATABASE, {
            statusCode: 500,
            message: 'Database Error',
            errStack: err,
        });

        return next(error);
    }

    // if result is null that means broadcast with given id is not exist in collection
    if (result === null) {
        const broadcastNotExistsError = new ErrorHandler(constants.ERRORS.INPUT, {
            statusCode: 400,
            message: 'Broadcast Not Exist...',
        });

        return next(broadcastNotExistsError);
    }
    var subscribers;
    if (approving && data?.isApproved == true) {
        const transporter = nodemailer.createTransport({
            type: 'SMTP',
            host: config.EMAIL_HOST,
            secure: true,
            debug: true,
            port: 465,
            auth: {
                user: config.EMAIL_USER,
                pass: config.EMAIL_PASS,
            },
        });
        subscribers = await Subscribers.find();
        subscribers = subscribers.map((subscriber) => { return subscriber?.email })

        const mailOptions = {
            from: `HITK TECH Community <${config.EMAIL_USER}>`,
            to: "hitktechcommunity@gmail.com",
            subject: `New Broadcast: ${data?.title} 😍`,
            html: broadcastPublishMailTemplate(data),
            bcc: subscribers,
            attachments: data?.imageUrl.map((image, index) => {
                return {
                    filename: `${data?.title}${index+1}`,
                    path: image
                }
            })
        };
        await transporter.sendMail(mailOptions).catch((err) => {
            if (err) {
                const error = new ErrorHandler(constants.ERRORS.UNEXPECTED, {
                    statusCode: 500,
                    message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
                    errStack: err,
                    user: req.body.email,
                });
                throw error;
            }
        });
    }




    // success response
    res.status(200).send({
        message: "Broadcast Updated...",
    });

    return next();
}