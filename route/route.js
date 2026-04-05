import express from "express"
import { googleAuth, userLogout } from "../controllers/auth";

const router = express.Router();


router.post('/v1/google/auth', googleAuth);
router.post('/v1/logout', userLogout);

export default router;