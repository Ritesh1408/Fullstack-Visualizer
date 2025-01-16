const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.post("/", async (req, res) => {
  const { username, age, hobbies } = req.body;
  if (!username || age === undefined || !Array.isArray(hobbies)) {
    return res.status(400).json({ message: "Invalid input" });
  }
  try {
    const newUser = new User({ username, age, hobbies });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.put("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { username, age, hobbies } = req.body;
  if (!username || age === undefined || !Array.isArray(hobbies)) {
    return res.status(400).json({ message: "Invalid input" });
  }
  try {
    const updatedUser = await User.findOneAndUpdate({ id: userId }, { username, age, hobbies }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.delete("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await User.findOneAndDelete({ id: userId });
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;