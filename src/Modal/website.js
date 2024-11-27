const mongoose = require("mongoose");
const websiteSchema = new mongoose.Schema({
  websiteName: {
    type: String,
  },
  websiteImage: {
    type: String,
  },
  description: {
    type: String,
  },
  youtube: {
    type: String,
  },
  telegram: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
  whatsup: {
    type: String,
  },
  twitter: {
    type: String,
  },
  faq: [
    {
      question: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
  ],
  testimonial: [],
});

websiteSchema.pre("save", async function (next) {
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

const Website = mongoose.model("website", websiteSchema);

module.exports = Website;
