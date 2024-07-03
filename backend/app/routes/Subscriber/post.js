const to = require('await-to-js').default;
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const Subscriber = require('../../models/Subscriber');
const {SendEmailUsingNodeMailer} = require('../../../utility/sendEmail');
const {NewSubscriberMailTemplate} = require('../../../utility/emailTemplates');

module.exports = async (req, res, next) => {

    const [findErr, existingSubscriber] = await to(Subscriber.findOne({ email: req.body.email }));

    if(findErr) {
        const error = new ErrorHandler(constants.ERRORS.DATABASE, {
            statusCode: 500,
            message: 'Database Error',
            errStack: findErr,
        });
        return next(error);
    }

    if(existingSubscriber) {
        const error = new ErrorHandler(constants.ERRORS.SUBSCRIBER_EXISTS, {
            statusCode: 409,
            message: 'Subscriber already exists',
        });
        return next(error);
    }

    const [createErr] = await to(Subscriber.create({ ...req.body }));
    if(createErr){
        const error = new ErrorHandler(constants.ERRORS.DATABASE, {
            statusCode: 500,
            message: 'Database Error',
            errStack: createErr,
        });
        return next(error);
    }

    // sending email to newly added user using nodemailer
    try{
        await SendEmailUsingNodeMailer(
            req.body.email,
            'Welcome to HITE-TECH Community',
            NewSubscriberMailTemplate(req.body.firstName),
        );
    }
    catch(error){
        const e = new ErrorHandler(constants.ERRORS.EMAIL, {
            statusCode: 500,
            message: 'NodeMailer Error',
            errStack: error,
        });
        return next(e);
    }

    res.status(200).send({
        message: 'New Subscriber has been added successfully',
    });

    return next();
}