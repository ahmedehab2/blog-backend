import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

async function register(req, res) {
  const { email, password, name } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ email, password: hashedPassword, name });
  const token = generateToken(newUser);

  res.status(201).json({
    token,
    user: { id: newUser._id, email: newUser.email, name: newUser.name },
  });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user);

  res.status(200).json({
    token,
    user: { id: user._id, email: user.email, name: user.name },
  });
}

export { register, login };

function generateToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
}
