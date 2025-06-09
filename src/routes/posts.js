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
import {
  createPostValidator,
  getPostByIdValidator,
  updatePostValidator,
} from "../validators/postValidator.js";

const router = Router();

router.get("/", getAllPosts); // Allow unauthenticated access to get all posts

router.use(authMiddleware);

router.post("/", uploadMiddleware("image"), createPostValidator, createPost);

router.get("/:id", getPostByIdValidator, getPostById);

router.patch(
  "/:id",
  uploadMiddleware("image"),
  updatePostValidator,
  updatePost
);

router.delete("/:id", getPostByIdValidator, deletePost);

export default router;
