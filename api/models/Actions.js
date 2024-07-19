const mongoose = require("mongoose");

const actionSchema = new mongoose.Schema({
  nama_tindakan: String,
  tarif_tindakan: Number,
  keaktifan: Boolean,
  instalasi: String, // ( bidang, cth : rawatJalan, rawatInap)
  bidang: String, // (  poliklinik, cth : umum, gigi, anak)
  kategori: String, // ( pengelompokkan tindakan)
});

const action = mongoose.model("actions", actionSchema);
module.exports = action;
