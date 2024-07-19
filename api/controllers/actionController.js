const Action = require('../models/Actions');

const createAction = async (req, res) => {
    try {
        const action = await Action.create(req.body);
        res.status(200).json(action);
    } catch (err) {
        res.status(500).json({ massage: err.massage });
    }
};

const getAllAction = async (_, res) => {
    try {
        const action = await Action.find({});
        res.status(200).json(action);
    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: err.massage });
    }
};

const updateAction = async (req, res) => {
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        const action = await Action.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(action);
    } catch (err) {
        res.status(500).json({ massage: err.massage });
    }
};

const deleteAction = async (req, res) => {
    try {
        const action = await Action.findByIdAndDelete(req.params.id);
        await action.deleteOne();
        res.status(200).json(action);
    } catch (err) {
        res.status(500).json({ massage: err.massage });
    }
};

const getActionById = async (req, res) => {
    try {
        const action = await Action.findById(req.params.id);
        if (!getActionById) {
            res.status(404).json({ massage: "Tindakan Tidak Di Temukan" });
        }
        res.status(200).json(action);
    } catch (err) {
        res.status(500).json({ massage: err.massage });
    }
};

module.exports = {
    createAction,
    deleteAction,
    getActionById,
    getAllAction,
    updateAction
}