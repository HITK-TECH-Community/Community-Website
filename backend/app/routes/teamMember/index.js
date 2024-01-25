import express from "express"
import multer from "multer";
import getTeamMembers from "./getTeamMembers"
import getTeamMemberById from "./getTeamMemberById"
import updateTeamMember from "./updateTeamMember";
import addTeam from "./addTeam"
import deleteTeamMember from "./deleteTeamMember"
import { authMiddleware } from "../../../helpers/middlewares/auth";
const router = express.Router({mergeParams:true})

const upload = multer({ dest: 'uploads/teamMembersProfile' });


router.get('/getTeamMembers/', getTeamMembers);
router.get('/getTeamMember/:id', getTeamMemberById);
router.post('/addTeamMember', authMiddleware, upload.single('image'), addTeam);
router.put('/updateTeamMember',authMiddleware,upload.single('image'),updateTeamMember);
router.delete("/deleteTeamMember",authMiddleware,deleteTeamMember);
export default router;
