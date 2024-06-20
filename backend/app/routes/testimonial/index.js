const router = require('express').Router({ mergeParams: true });
const multer = require('multer');
const { nanoid } = require('nanoid');
const path = require('path');
const validationMiddleware = require('../../../helpers/middlewares/validation');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const { postTestimonialValidationSchema } = require('./@validationSchema');
const postTestimonial = require('./postTestimonial');
const getTestimonials = require('./getTestimonials');
const deleteTestimonial = require('./deleteTestimonial');

const store = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/TestimonialProfile/';
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueFilename = nanoid() + path.extname(file.originalname);
    console.log(`Generated filename: ${uniqueFilename}`);
    cb(null, uniqueFilename);
  },
});
const upload = multer({ storage: store });

router.post('/', authMiddleware, upload.single('image'), postTestimonial);
router.get('/getTestimonials', getTestimonials);
router.delete('/:id', authMiddleware, deleteTestimonial);

module.exports = router;
