const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    minlength: 3,
    required: true,
  },
  password: String,
  tokenVersion: {
    type: Number,
    required: true,
    default: 1,
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.tokenVersion;
    delete returnedObject.password;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
