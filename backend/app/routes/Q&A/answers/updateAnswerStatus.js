const to  = require("await-to-js").default;

const constants = require("../../../../constants");
const { ErrorHandler } = require("../../../../helpers/error");

const answers = require("../../../models/answers");

module.exports = async (req, res, next) => {
    // getting id and status from body
    const id = req.body.id;
    const status = req.body.status

    // query fro updating
    const [ err, result ] = await to(answers.findOneAndUpdate({ _id : id }, { $set : { isApproved : status } }));

    // error occured due to the some problem
    if(err) {
        const error = new ErrorHandler(constants.ERRORS.DATABASE, {
            statusCode: 500,
            message: 'Database Error',
            errStack: err,
        });

        return next(error);
    }

    // if result is null that means answer with given id is not exist in collection
    if(result === null) {
        const answerNotExistError = new ErrorHandler(constants.ERRORS.INPUT, {
            statusCode: 400,
            message: 'Answer Not Exist...',
        });

        return next(answerNotExistError);
    }

    // success response
    res.status(200).send({
        message : "Status Updated..."
    });

    return next();
}