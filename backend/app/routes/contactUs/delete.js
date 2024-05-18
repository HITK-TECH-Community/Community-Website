const to = require('await-to-js').default;
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');
const Contact = require("../../models/contactUs");
const Admin = require("../../models/Admin");

// Controller to delete a contact by adminid and contactdocumentid
module.exports = async (req, res, next) => {
    const { contactId, adminId } = req.body;

    // Check if contactId is provided
    if (!contactId || !adminId) {
        const error = new ErrorHandler(constants.ERRORS.VALIDATION, {
            statusCode: 400,
            message: 'Validation Error',
            errStack: 'Both IDs are required to delete a contact',
        });
        return next(error);
    }
    //Find if the user is admin or not
    const admin = await to(Admin.findOne({ _id: adminId }));
    if (!admin) {
        const error = new ErrorHandler(constants.ERRORS.USER, {
            statusCode: 400,
            message: "Admin Validation Error",
            errStack: "Admin user provided not found in database"
        })
        return next(error);
    }
    // Delete the contact
    const [err, result] = await to(Contact.findByIdAndDelete(contactId));

    if (err) {
        const error = new ErrorHandler(constants.ERRORS.DATABASE, {
            statusCode: 500,
            message: 'Database Error',
            errStack: err,
        });
        return next(error);
    }

    if (!result) {
        const error = new ErrorHandler(constants.ERRORS.NOT_FOUND, {
            statusCode: 404,
            message: 'Contact Not Found',
        });
        return next(error);
    }

    res.status(200).send({
        message: 'Contact deleted successfully',
    });

    return next();
};