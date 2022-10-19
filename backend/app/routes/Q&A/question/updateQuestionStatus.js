const to  = require("await-to-js").default;

const constants = require("../../../../constants");
const { ErrorHandler } = require("../../../../helpers/error");

const question = require("../../../models/question");

module.exports = async (req, res, next) => {
    // getting id and status from body
    const id = req.body.id;
    const status = req.body.status

    // query fro updating
    const [ err, result ] = await to(question.findOneAndUpdate({ _id : id }, { $set : { isApproved : status } }));

    // error occured due to the some problem
    if(err) {
        const error = new ErrorHandler(constants.ERRORS.DATABASE, {
            statusCode: 500,
            message: 'Database Error',
            errStack: err,
        });

        return next(error);
    }

    // if result is null that means question with given id is not exist in collection
    if(result === null) {
        const questionNotExistsError = new ErrorHandler(constants.ERRORS.INPUT, {
            statusCode: 400,
            message: 'Question Not Exist...',
        });

        return next(questionNotExistsError);
    }

    // success response
    res.status(200).send({
        message : "Status Updated..."
    });

    return next();
}