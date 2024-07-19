const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hasedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      nama_lengkap: req.body.nama_lengkap,
      username: req.body.username,
      password: hasedPass,
      peranan: req.body.peranan,
      bidang: req.body.bidang,
      poli: req.body.poli,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res
        .status(400)
        .json("Username Yang Anda Masukan Tidak Di Temukan");
    }
    const validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate) {
      return res.status(400).json("Password Yang Anda Masukan Salah");
    }
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = { register, login };
