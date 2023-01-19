const mongoose = require("mongoose");

const userForm = new mongoose.Schema(
  {
  firstname: {
    type: String,
    trim: true,
    required: [true, "Firstname should must be entered"]
  },
  lastname: {
    type: String,
    trim: true,
    required: [true, "Lastname should must be entered"],
  },
  email: {
    type: String,
    required: [true, "email should must be entered"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password should must be entered"],
  },
  token: {
    type: String,
  },
},
{
  timestamps: true
}
);

module.exports = mongoose.model("User", userForm);
