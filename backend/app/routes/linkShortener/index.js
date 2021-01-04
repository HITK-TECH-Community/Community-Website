const router = require('express').Router({ mergeParams: true });
const validate = require('../../../helpers/middlewares/validation');
const validation = require('./@validationSchema');
const postLinkShortener = require('./postLinkShortener');
const getLinkShortener = require('./getLinkShortener');

router.post('/', validate(validation.linkSchema), postLinkShortener);
router.get(
  '/:shorturl',
  validate(validation.shortUrlSchema, 'params'),
  getLinkShortener
);

module.exports = router;
