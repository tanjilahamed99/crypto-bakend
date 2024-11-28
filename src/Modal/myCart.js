const mongoose = require("mongoose");
const myCartSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  wallet: {
    type: String,
  },
  lottery: {
    type: Array,
  },
  proProgram: {
    type: Object,
  },
  royaltySalary: {
    type: Object,
  },
});

myCartSchema.pre("save", async function (next) {
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

const MyCart = mongoose.model("MyCart", myCartSchema);

module.exports = MyCart;
