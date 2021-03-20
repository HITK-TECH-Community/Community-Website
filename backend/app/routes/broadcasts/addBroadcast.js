const to = require('await-to-js').default;
const Broadcast = require('../../models/Broadcast');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res) => {
  const broadcastData = {
    ...req.body,
  };

  const [err] = await to(Broadcast.create(broadcastData));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
    });
    res.status(500).send(error);
    return;
  }
  res.status(200).send({
    message: 'Broadcast added successfully',
  });
};
