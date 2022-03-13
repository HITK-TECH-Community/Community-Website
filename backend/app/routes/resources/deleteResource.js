const Resource = require('../../models/resource');

module.exports = async (req, res, next) => {
  try {
    const resourceId = req.body.resourceId; //getting resource id from the body
    const result = await Resource.findByIdAndDelete(resourceId); // deleting the resource corresponding to reosource id
    if (!result) {
      res.json({ error: 'resource id is not valid' });
    }
    return res.json({ deleteResource: result, message: 'resource deleted' });
  } catch (error) {
    return res.status(500).json({ error: 'some internal server error or may resource id not valid' });
  }
};
