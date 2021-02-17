const to = require('await-to-js').default;
const sendEmail = require('../../../helpers/mailer');
const router = require('express').Router({ mergeParams: true });
//const template = require('../../../helpers/emailTemplates');
router.post('/', email);

async function email(req, res, next) {
    [err] = await to (sendEmail({
        to: req.body.toEmail,
        name : req.body.name,
        link : req.body.link,
        tempname : req.body.tempname
    })
    );
    if(err){
        const status = err.status || 500;
        res.status(status);
        if(err.code == "EAUTH"){
            res.json({message: `Hey! We've encountered an error. Please check if your service allows sending mails through less secure apps. \n Also please check your Email credentials in the config once. \n ${err.response}`});
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