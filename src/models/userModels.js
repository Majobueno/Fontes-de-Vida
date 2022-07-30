const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nome: { type: String },
    email: { type: String },
    senha: { type: String },
  },
  {
    versionKey: false,
  }
);

const user = mongoose.model('user', userSchema);

module.exports = user;
