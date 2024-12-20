const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
  
  // name field
  name: {
    type: String,
    required: [true, "Please provide your name!"], // making name required
    trim: true,  // optional, trims any extra whitespace
  },

  // email field
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  //   password field
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
