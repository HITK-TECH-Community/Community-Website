const service = require('./emailservice');
const router = require('express').Router({ mergeParams: true });
router.post('/', email);

function email(req, res, next) {
    console.log(req.body.email);
    service.sendVerificationEmail(req.body.email)
        .then(() => res.json({message: `Email Sent!`}))
        .catch(next);
}

module.exports = router;