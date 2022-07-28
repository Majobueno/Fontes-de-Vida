const mongoose = require("mongoose");

const FontesSchema = new mongoose.Schema({
  _id: { type: String },
  nome: { type: String, required: true },
  cidade: { type: String, required: true },
  vazao: { type: String, required: true },
  gps: { type: String, required: true }
});


const fontes = mongoose.model('fontes', FontesSchema);

module.exports = fontes;