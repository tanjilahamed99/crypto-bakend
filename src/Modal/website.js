const mongoose = require("mongoose");
const websiteSchema = new mongoose.Schema({
  websiteName: {
    type: String,
  },
  lotteryImages: {
    type: Array,
  },
  referImages: {
    type: Array,
  },
  banner: {
    mainImage: {
      type: String,
    },
  },
  websiteImage: {
    type: String,
  },
  roadMapImgOne: {
    type: String,
  },
  roadMapImgTwo: {
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
  support: {
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
  totalRegisterFee: {
    type: Array,
  },
  register: {
    referReward: {
      type: Number,
    },
    wallet: {
      type: String,
    },
    fee: {
      type: Number,
    },
    ruleOne: {
      type: String,
      default:
        "Install a BSC chain(BEP20) wallet on your smartphone or PC.[Token Pocket, Metamask, Trust Wallet]",
    },
    ruleTwo: {
      type: String,
      default: "Fill your Wallet with at least 5 USDT & 0.003 BNB.",
    },
    ruleThree: {
      type: String,
      default:
        "Directly Paste Your Upline link or Directly Click on Registration Button from Website & Follow our steps.",
    },
    ruleFour: {
      type: String,
      default:
        "You have no Upline, then copy & paste in Browser:- https://www.meta-pro.space/en/register?ref=9421052696",
    },
  },
  gamingNft: {
    type: Boolean,
    default: false,
  },
  privacyPolicy: {
    type: String,
  },
  dashboardImage: {
    type: String,
  },

  // admin
  // admin: {},
});

websiteSchema.pre("save", async function (next) {
  if (this.isNew && this.otp) {
    const oneDayLater = new Date();
    oneDayLater.setDate(oneDayLater.getDate() + 1);
    this.otpExpiredDate = oneDayLater;
  }
  next();
});

const Website = mongoose.model("website", websiteSchema);

module.exports = Website;
