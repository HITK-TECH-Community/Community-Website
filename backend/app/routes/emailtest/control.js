const to = require('await-to-js').default;
const sendEmail = require('../../../helpers/mailer');
const router = require('express').Router({ mergeParams: true });
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
//const template = require('../../../helpers/emailTemplates');
router.post('/', email);

async function email(req, res, next) {
    [err] = await to (sendEmail({
        to: req.body.toEmail,
        details : req.body.details,
        tempname : req.body.tempname
    })
    );
    if(err){
        if (err.code === "EAUTH") {
            const error = new ErrorHandler(constants.ERRORS.INPUT, {
              statusCode: 500,
              message: `Hey! We've encountered an error. Please check if your service allows sending mails through less secure apps. \n Also please check your Email credentials in the config once. \n ${err.response}`,
              errStack: err,
            });
            return next(error);
          }
        else{
            res.json({ error: err })
        }
        return next(err);
    }
    res.json({message: `Email Sent!`});
    return next();
}

module.exports = router;