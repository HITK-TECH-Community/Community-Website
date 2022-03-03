const router = require('express').Router({ mergeParams: true });
const addTeam = require('./addTeam');

const { FetchUser } = require('../../../helpers/middlewares/auth');
const multer = require('multer');

const upload = multer({ dest: 'uploads/teamMembersProfile' });

router.post('/addTeamMember', FetchUser, upload.single('image'), addTeam);
module.exports = router;
