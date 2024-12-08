const mongoose = require("mongoose");
const UpdatesSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
});

UpdatesSchema.pre("save", async function (next) {
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

const Updates = mongoose.model("Updates", UpdatesSchema);

module.exports = Updates;
