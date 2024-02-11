import joinUsModel from '../../models/joinUs';

export default async (req, res, next) => {
  try {
    const joinRequests = await joinUsModel.find();
    res.status(200).json(joinRequests);
  } catch (err) {
    next(err);
  }
};
