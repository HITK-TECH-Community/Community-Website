const to = require('await-to-js').default;
const Broadcast = require('../../models/Broadcast');
const Subscriber = require('../../models/Subscriber');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const { SendEmailUsingNodeMailer } = require('../../../utility/sendEmail');
const { NewBroadCastMailTemplate } = require('../../../utility/emailTemplates');

module.exports = async (req, res, next) => {
  const [err, { _id }] = await to(Broadcast.create({ ...req.body }));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
    });
    return next(error);
  }

  const [err1, SubscriberList] = await to(Subscriber.find());
  if(err1){
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: can not fetch subscriber list',
      errStack: err,
    });
    return next(error);
  }

  try{
    SubscriberList.map(async (subscriber) => {
      await SendEmailUsingNodeMailer(
        subscriber.email,
        'New BroadCast Added',
        NewBroadCastMailTemplate(subscriber),
      )
    })
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
    message: 'Broadcast added successfully',
    id: _id,
  });
  return next();
};
