import multer from "multer";

const storage = multer.memoryStorage();

function uploadMiddleware(fileName) {
  return multer({ storage }).single(fileName);
}

export default uploadMiddleware;
