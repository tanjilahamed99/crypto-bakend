const Lottery = require("../../Modal/Lottery");
const User = require("../../Modal/Users");

const deleteLottery = async (req, res, next) => {
  try {
    const { adminEmail, adminId, wallet, lotteryId } = req?.params;

    if (!adminEmail || !adminId || !wallet || !lotteryId) {
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
    const result = await Lottery.deleteOne({ _id: lotteryId });
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

module.exports = deleteLottery;
