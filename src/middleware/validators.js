import { matchedData, validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(errors.formatWith(({ msg }) => msg).array());
  }

  next();
};
