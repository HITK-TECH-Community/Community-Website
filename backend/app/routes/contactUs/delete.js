const mongoose = require('mongoose');
const ContactUs = require('../../models/contactUs');

module.exports = async (req, res, next) => {
  try {
    const payload = res.locals.decode;
    const { contactUsId } = req.body;

    if (!payload.isSuperAdmin) {
      return res.status(401).json({ error: 'You are not authorized to perform this action' });
    }

    if (!mongoose.Types.ObjectId.isValid(contactUsId)) {
      return res.status(400).json({ error: 'Invalid Contact Us ID' });
    }

    const contactUsEntry = await ContactUs.findByIdAndDelete(contactUsId);
    if (!contactUsEntry) {
      return res.status(404).json({ error: 'Contact Us entry not found' });
    }

    return res.status(200).json({ message: 'Contact Us entry deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}