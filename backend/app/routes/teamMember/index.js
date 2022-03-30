const router = require('express').Router({ mergeParams: true });
const multer = require('multer');
const updateTeamMember = require('./updateTeamMember')
const addTeam = require('./addTeam');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const upload = multer({ dest: 'uploads/teamMembersProfile' });

router.post('/addTeamMember', authMiddleware, upload.single('image'), addTeam);
router.put('/updateTeamMember',authMiddleware,upload.single('image'),updateTeamMember);
module.exports = router;
