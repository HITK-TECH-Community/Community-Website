const to = require('await-to-js').default;
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
 
    const { firstName, lastName, contact, username } = req.body;

    const userRecord = await Admin.findOne({
        email: res.locals.decode.email,
      });

      try{
        await to(
            Admin.findOneAndUpdate(
              { email: userRecord.email },
              { $set: { firstName,
                        lastName,
                        contact,
                        username
                     } },
            )
          );
          const response = await Admin.findOne({
            email: res.locals.decode.email,
          });
          res.status(201).send(response);
          return next();
      }catch(err){
        const error = new ErrorHandler(constants.ERRORS.DATABASE, {
            statusCode: 500,
            message: 'Mongo Error: Updation Failed',
            errStack: err,
            user: userRecord.email,
          });
          return next(error);
      }
    
}