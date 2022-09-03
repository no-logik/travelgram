import express from "express";
import UserDetails from "../models/user.js";
// import { getUser, addUser } from "../controllers/user";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await UserDetails.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const userDetail = req.body;
  const newUser = new UserDetails(userDetail);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
});

export default router;
