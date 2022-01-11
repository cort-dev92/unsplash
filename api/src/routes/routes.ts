import { Router } from "express";
const router = Router();

import * as imageCtrl from "./images.controller";

router.get("/", imageCtrl.home);
router.get("/images", imageCtrl.getImages);

export default router;
