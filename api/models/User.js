const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    nama_lengkap: {
      type: String,
      require,
    },
    username: {
      type: String,
      require,
    },
    password: {
      type: String,
      require,
    },
    peranan: {
      type: String,
      require,
    },
    bidang: {
      type: String,
      require,
    },
    poli: String,
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("User", UserSchema);
module.exports = user;
