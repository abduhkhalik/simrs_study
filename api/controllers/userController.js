const User = require("../models/User");
const bcrypt = require("bcrypt");

// const createUser = async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ massage: err.massage });
//   }
// };

const getAllUsers = async (_, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ massage: err.massage });
  }
};

const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    await user.deleteOne();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ massage: "User Tidak Di Temukan" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
};

module.exports = {
  // createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
};
