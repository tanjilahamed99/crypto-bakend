const mongoose = require("mongoose");
const proProgramSchema = new mongoose.Schema({
  users: {
    type: Array,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  programName: {
    type: String,
  },
  type: {
    type: String,
  },
  order: {
    type: Number,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
});

proProgramSchema.pre("save", async function (next) {
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

const ProProgram = mongoose.model("ProProgram", proProgramSchema);

module.exports = ProProgram;
