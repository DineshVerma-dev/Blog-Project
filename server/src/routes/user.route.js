import { Router } from "express";
import { RegisterUser } from "../controllers/RegisterUser.controller.js";

const router = Router();

router.route("/").post(RegisterUser)



export default router