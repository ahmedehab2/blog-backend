import uploadToImgbb from "../../utils/uploadToImgbb.js";
import Post from "../models/Post.js";

async function createPost(req, res) {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  const data = await uploadToImgbb(req.file);

  const post = await Post.create({
    ...req.body,
    image: data.data.display_url,
    userId: req.user.id,
  });

  res.status(201).json(post);
}

async function getAllPosts(req, res) {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.status(200).json(posts);
}

async function getPostById(req, res) {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.status(200).json(post);
}

async function updatePost(req, res) {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  if (req.user.id !== post.userId.toString())
    return res.status(401).json({ message: "Unauthorized" });
  if (req.file) {
    const data = await uploadToImgbb(req.file);
    req.body.image = data.data.display_url;
  }

  await Post.updateOne({ _id: req.params.id }, { $set: req.body });
  res.status(200).json({ message: "Post updated" });
}

async function deletePost(req, res) {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  if (req.user.id !== post.userId.toString())
    return res.status(401).json({ message: "Unauthorized" });
  await Post.deleteOne({ _id: req.params.id });
  res.status(204).send();
}

export { createPost, getAllPosts, getPostById, updatePost, deletePost };
