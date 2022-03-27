const router = require('express').Router({ mergeParams: true });
const addTeam = require('./addTeam');
const deleteTeamMember = require('./deleteTeamMember');
const { authMiddleware } = require('../../../helpers/middlewares/auth');
const multer = require('multer');

const upload = multer({ dest: 'uploads/teamMembersProfile' });

router.post('/addTeamMember', authMiddleware, upload.single('image'), addTeam);
router.delete("/deleteTeamMember",authMiddleware,deleteTeamMember);
module.exports = router;
