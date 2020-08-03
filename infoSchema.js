const mongoose = require("mongoose");
const infoSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Author: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Info", infoSchema);
