const Patient = require("../models/Patients");

const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
};

const getAllPatient = async (_, res) => {
  try {
    const patient = await Patient.find({});
    res.status(200).json(patient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ massage: err.massage });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    await patient.deleteOne();
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
};

const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      res.status(404).json({ massage: "Pasien Tidak DI Temukan" });
    }
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ massage: err.massage });
  }
};

module.exports = {
  createPatient,
  getAllPatient,
  getPatientById,
  deletePatient,
  updatePatient,
};
