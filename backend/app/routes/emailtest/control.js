const to = require('await-to-js').default;
const sendEmail = require('../../../helpers/mailer');
const router = require('express').Router({ mergeParams: true });
router.post('/', email);

async function email(req, res, next) {
    [err] = await to (sendEmail({
        from : req.body.fromEmail,
        to: req.body.toEmail
    })
    );
    if(err){
        return next(err);
    }
    res.json({message: `Email Sent!`});
    return next();
}

module.exports = router;