const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  no_batch: Number,
  merek: String,
  masuk: String,
  kadaluarsa: String,
  nama_barang: String,
  jenis_barang: String,
  kode_rak: Number,
  antibiotik: Boolean,
  narkotika: Boolean,
  psikotoprika: Boolean,
  fornas: Boolean,
  min_gudang: Number,
  min_apotik: Number,
  stok_gudang: Number,
  stok_apotik: Number,
  harga_beli: Number,
  harga_jual: Number,
  supplier: String,
  Anggaran: String,
  kandungan: String,
  satuan: String,
  no_spk: Number,
  tanggal_spk: String,
});

const item = mongoose.model("items", ItemSchema);
module.exports = item;
