import { MongoServerError } from "mongodb";
import { MulterError } from "multer";
export const globalErrorHandler = (err, req, res, next) => {
  if (err.length > 0) {
    return res.status(422).json({ message: err });
  }

  if (err instanceof MongoServerError) {
    if (err.code === 11000) {
      return res.status(400).json({
        message: `
          This ${Object.keys(err.keyValue)} is already exist
          `,
      });
    }
    return res.status(400).json({ message: err.message });
  }

  if (err instanceof MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ message: "File size exceeds 1MB limit" });
    }
    return res.status(400).json({ message: err.message });
  }
  res.status(500).json({ message: err });
};
