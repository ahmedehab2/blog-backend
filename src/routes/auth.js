import { Router } from "express";
import { register, login } from "../controllers/authController.js";

const router = Router();

import {
  registerValidator,
  loginValidator,
} from "../validators/authValidator.js";

router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);

export default router;
