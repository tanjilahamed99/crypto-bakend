const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  wallet: {
    type: String,
  },
  email: {
    type: String,
  },
  refers: {
    type: Array,
  },
  username: {
    type: String,
    default: "IstimatePro user",
  },
  joined: {
    type: String,
  },
  referCode: {
    type: String,
  },
  picture: {
    type: String,
    default: "https://i.ibb.co.com/9bQnXmF/images-3.jpg",
  },
  referBy: {
    type: String,
  },
  role: {
    type: String,
    default: "User",
  },
  password: {
    type: String,
  },
  block: {
    type: Boolean,
  },
  refersReword: {
    members: {
      type: Number,
    },
    totalPayment: {
      type: Number,
    },
  },
});

userSchema.pre("save", async function (next) {
  if (this.isNew && this.otp) {
    const oneDayLater = new Date();
    oneDayLater.setDate(oneDayLater.getDate() + 1);
    this.otpExpiredDate = oneDayLater;
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
