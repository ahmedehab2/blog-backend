import multer from "multer";

const storage = multer.memoryStorage();
const limits = { fileSize: 1 * 1024 * 1024 }; // 1MB limit

function uploadMiddleware(fileName) {
  return multer({ storage, limits }).single(fileName);
}

export default uploadMiddleware;
