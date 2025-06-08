import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import authMiddleware from "../middleware/auth.js";
import uploadMiddleware from "../middleware/multer.js";

const router = Router();

router.get("/", getAllPosts); // Allow unauthenticated access to get all posts

router.use(authMiddleware);

router.post("/", uploadMiddleware("image"), createPost);

router.get("/:id", getPostById);

router.patch("/:id", uploadMiddleware("image"), updatePost);

router.delete("/:id", deletePost);

export default router;
