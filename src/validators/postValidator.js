import { body, param } from "express-validator";
import { validate } from "../middleware/validators.js";

export const createPostValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("content").notEmpty().withMessage("Content is required"),
  validate,
];

export const updatePostValidator = [
  param("id").isMongoId().withMessage("Invalid post ID"),
  body("title").optional().notEmpty().withMessage("Title cannot be empty"),
  body("content").optional().notEmpty().withMessage("Content cannot be empty"),
  validate,
];

export const getPostByIdValidator = [
  param("id").isMongoId().withMessage("Invalid post ID"),
  validate,
];
