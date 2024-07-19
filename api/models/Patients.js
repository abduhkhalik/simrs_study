const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
  {
    status: String,
    mr: Number,
    name: String,
    alamat: String,
    jenis_kelamin: String,
    nik: Number,
    tanggal_lahir: String,
    tempat_lahir: String,
    umur: Number,
    agama: String,
    domisili: String,
    pekerjaan: String,
    pendidikan: String,
    gol_darah: String,
    telepon: Number,
    no_bpjs: Number,
    jenis_bayar: String,
    penanggung_jawab: String,
    rawat_jalan: Array,
    rawat_inap: Array,
    emergency: Array,
  },
  {
    timestamps: true,
  }
);

const patient = mongoose.model("patients", PatientSchema);
module.exports = patient;
