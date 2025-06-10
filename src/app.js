import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import { connectDB } from "./config/database.js";
import { globalErrorHandler } from "./middleware/global-error.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This API for serving Blog App");
});
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

app.use(globalErrorHandler);

const PORT = process.env.PORT || 5000;
connectDB().then(() =>
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${PORT}`);
  })
);
