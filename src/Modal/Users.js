const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  wallet: {
    type: String,
  },
  email: {
    type: String,
  },
  refers: {
    type: Number,
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
});

userSchema.pre("save", async function (next) {
  if (this.isNew && this.password) {
    const saltRounds = 10;
    const hash = await bcrypt.hash(this.password, saltRounds);
    this.password = hash;
  }

  if (this.isNew && this.otp) {
    const oneDayLater = new Date();
    oneDayLater.setDate(oneDayLater.getDate() + 1);
    this.otpExpiredDate = oneDayLater;
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
