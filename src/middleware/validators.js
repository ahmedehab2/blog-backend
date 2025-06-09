import { validationResult, matchedData } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  req.body = matchedData(req, { locations: ["body"] });
  req.params = matchedData(req, { locations: ["params"] });
  req.query = matchedData(req, { locations: ["query"] });

  next();
};
