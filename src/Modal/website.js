const mongoose = require("mongoose");
const websiteSchema = new mongoose.Schema({
  websiteName: {
    type: String,
  },
  banner: {
    mainImage: {
      type: String,
    },
    smFirstImg: {
      type: String,
    },
    smSecantImg: {
      type: String,
    },
    smThirdImg: {
      type: String,
    },
    smForthImg: {
      type: String,
    },
    bigFirstImg: {
      type: String,
    },
    bigForthImg: {
      type: String,
    },
    bigSecantImg: {
      type: String,
    },
    bigThirdImg: {
      type: String,
    },
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

  totalEarning: {
    type: Number,
  },
  totalProProgramUsers: {
    type: Array,
  },
  totalDeposit: {
    type: Array,
  },
  totalWithdrawal: {
    type: Array,
  },
  totalDepositCharge: {
    type: Number,
  },
  totalRoyaltySalary: {
    type: Array,
  },
  totalLotteryWithdrawal: {
    type: Array,
  },
  royaltyTag: {
    type: Array,
  },
  topEarners: {
    type: Array,
  },
  certified: {
    type: Array,
  },
  referImage: {
    type: Array,
  },
  wallets: {
    lottery: {
      type: String,
    },
    proProgram: {
      type: String,
    },
    royaltySalary: {
      type: String,
    },
  },

  // admin
  // admin: {},
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
