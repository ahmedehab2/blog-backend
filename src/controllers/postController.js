import Post from "../models/Post.js";

async function createPost(req, res) {
  const post = await Post.create(req.body);
  res.status(201).json(post);
}

async function getAllPosts(req, res) {
  const posts = await Post.find();
  res.status(200).json(posts);
}

async function getPostById(req, res) {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.status(200).json(post);
}

async function updatePost(req, res) {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.status(200).json(post);
}

async function deletePost(req, res) {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.status(204).send();
}

export { createPost, getAllPosts, getPostById, updatePost, deletePost };
