import express from "express"
import { googleAuth, userLogout } from "../controllers/auth.js";
import { isAuth } from "../middleware/isAuth.js";
import { getUserById } from "../controllers/user.js";
import { upload } from "../middleware/multer.js";
import { analyzeResume } from "../controllers/interview.js";

const router = express.Router();


router.post('/v1/google/auth', googleAuth);
router.post('/v1/logout', userLogout);
router.get('/v1/current-user', isAuth, getUserById);
router.post('/v1/resume', isAuth, upload.single("resume"), analyzeResume)


export default router;