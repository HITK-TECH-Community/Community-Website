const service = require('./emailservice');
const router = require('express').Router({ mergeParams: true });
router.post('/', email);

async function email(req, res, next) {
    await service.sendVerificationEmail(req.body.toEmail, req.body.fromEmail)
        .then(() => res.json({message: `Email Sent!`}))
        .catch(next);
}

module.exports = router;