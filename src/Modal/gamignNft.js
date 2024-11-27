const mongoose = require("mongoose");
const gamingNftSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  remaining: {
    type: Number,
  },
  sell: {
    type: Number,
  },
});

gamingNftSchema.pre("save", async function (next) {
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

const GamingNft = mongoose.model("GamingNft", gamingNftSchema);

module.exports = GamingNft;
