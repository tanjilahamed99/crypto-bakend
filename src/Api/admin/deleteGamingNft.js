const GamingNft = require("../../Modal/gamignNft");
const Lottery = require("../../Modal/Lottery");
const User = require("../../Modal/Users");

const deleteGamingNft = async (req, res, next) => {
  try {
    const { adminEmail, adminId, wallet, gamingNftId } = req?.params;

    if (!adminEmail || !adminId || !wallet || !gamingNftId) {
      return res.send({
        status: false,
        message: "need more data for get data",
      });
    }
    const find = await User.findOne({
      email: adminEmail,
      _id: adminId,
      wallet: wallet,
    });
    if (find?.role !== "admin") {
      res.send({
        status: false,
        message: "you are not admin",
      });
    }
    const result = await GamingNft.deleteOne({ _id: gamingNftId });
    res.send({
      result,
      status: true,
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: false,
      message: err,
    });
  }
};

module.exports = deleteGamingNft;
