const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required ",
    required: true,
  },
  contactno: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("contactform", contactSchema);
