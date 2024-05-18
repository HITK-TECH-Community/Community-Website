const router = require('express').Router({ mergeParams: true });
const multer = require('multer');
const { nanoid } = require('nanoid');
const path = require('path');
const getTeamMembers = require('./getTeamMembers');
const getTeamMemberById = require('./getTeamMemberById');
const updateTeamMember = require('./updateTeamMember');
const addTeam = require('./addTeam');
const deleteTeamMember = require('./deleteTeamMember');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const store = multer.diskStorage({
  destination: 'uploads/teamMembersProfile/',
  filename: (req, file, cb) => {
    const uniqueFilename = nanoid() + path.extname(file.originalname);
    cb(null, uniqueFilename);
  },
});
const upload = multer({ storage: store });

router.get('/getTeamMembers/', getTeamMembers);
router.get('/getTeamMember/:id', getTeamMemberById);
router.post('/addTeamMember', authMiddleware, upload.single('image'), addTeam);
router.put('/updateTeamMember',authMiddleware,upload.single('image'),updateTeamMember);
router.delete("/deleteTeamMember",authMiddleware,deleteTeamMember);
module.exports = router;
