import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";
import {
  getAllUsers,
  activateUser,
  deactivateUser
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", protect, adminOnly, getAllUsers);
router.put("/:id/activate", protect, adminOnly, activateUser);
router.put("/:id/deactivate", protect, adminOnly, deactivateUser);

export default router;
