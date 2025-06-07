import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import authMiddleware from "../middleware/auth.js";

const router = Router();

router.get("/", getAllPosts); // Allow unauthenticated access to get all posts

router.use(authMiddleware);

router.post("/", createPost);

router.get("/:id", getPostById);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

export default router;
