import Admin from '../../models/Admin'

export default async (req, res) => {

    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedAdmin);
      } catch (err) {
        res.status(500).json(err);
      }
  res.send('Done');
};
