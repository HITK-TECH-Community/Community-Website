const to = require('await-to-js').default;
const ANSWER = require('../../../models/answers');
const { ErrorHandler } = require('../../../../helpers/error');
const constants = require('../../../../constants');

module.exports = async (req,res,next) => {

    const [ err ] = await to(ANSWER.create({ ...req.body }));

    if(err){
        const error = new ErrorHandler(constants.ERRORS.DATABASE,{
            statusCode: 500,
            message: 'Database Error',
            errStack: err,
        });

        return next(error);
    }

    res.status(200).send({
        message: 'Answer has been added',
    });

    return next();
}