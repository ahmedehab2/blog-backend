import { body, param } from "express-validator";
import { validate } from "../middleware/validators.js";

export const createPostValidator = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
  validate,
];

export const updatePostValidator = [
  param("id").isMongoId().withMessage("Invalid post ID"),
  body("title").optional().notEmpty().withMessage("Title cannot be empty"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("description cannot be empty"),
  validate,
];

export const getPostByIdValidator = [
  param("id").isMongoId().withMessage("Invalid post ID"),
  validate,
];
