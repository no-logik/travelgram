import UserDetails from "../models/user";

export const getUser = async (req, res) => {
  try {
    const users = await UserDetails.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const addUser = async (req, res) => {
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
};
