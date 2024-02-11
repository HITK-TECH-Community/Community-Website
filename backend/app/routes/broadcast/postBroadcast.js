import to from "await-to-js"
import Broadcast from '../../models/Broadcast'
import { ErrorHandler } from "../../../helpers/error";
import constants from "../../../constants";

export default async (req, res, next) => {
  const [err, { _id }] = await to(Broadcast.create({ ...req.body }));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
    });
    return next(error);
  }
  res.status(200).send({
    message: 'Broadcast added successfully',
    id: _id,
  });
  return next();
};
