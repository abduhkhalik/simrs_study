const Item = require("../models/Items");

const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
};

const getAllItem = async (_, res) => {
  try {
    const item = await Item.find({});
    res.status(200).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ massage: err.massage });
  }
};

const updateItem = async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
};

const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    await item.deleteOne();
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!getItemById) {
      res.status(404).json({ massage: "Barang Tidak Di Temukan" });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
};

module.exports = {
  createItem,
  getAllItem,
  updateItem,
  deleteItem,
  getItemById,
};
