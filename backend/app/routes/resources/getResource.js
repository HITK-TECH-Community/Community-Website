
import Resource from '../../models/resource'

export default async (req, res, next) => {
  try {
    const AllResources = await Resource.find();
    res.status(200).json(AllResources);
    return next();
  } catch (e) {
    return next(e);
  }
};
