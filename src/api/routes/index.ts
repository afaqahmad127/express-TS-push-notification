import express from "express";
import { FCMController } from "../controllers";

const router = express.Router();

router.post("/notify", FCMController.pushNotification);

export default router;
