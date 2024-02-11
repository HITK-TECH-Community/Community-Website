const Resource = require('../../models/resource');

module.exports = async (req, res) => {
  try {
    const { resourceId } = req.body; // Getting resource id from the body
    const result = await Resource.findByIdAndDelete(resourceId); // Deleting the resource corresponding to reosource id
    if (!result) {
      res.json({ error: 'resource id is not valid' });
    }
    return res.json({ deleteResource: result, message: 'resource deleted' });
  } catch (error) {
    return res.status(500).json({ error: 'some internal server error or may resource id not valid' });
  }
};
