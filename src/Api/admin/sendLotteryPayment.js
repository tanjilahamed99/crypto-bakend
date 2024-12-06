const Lottery = require("../../Modal/Lottery");
const User = require("../../Modal/Users");

const sendLotteryPayment = async (req, res) => {
  const { adminEmail, adminId, wallet, id } = req?.params;
  console.log(req?.params);
  if (!adminEmail || !adminId || !wallet) {
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

  if (!id) {
    return res.send({
      status: false,
      message: "Id required",
    });
  }
  try {
    const query = {
      _id: id,
    };
    const update = {
      winners: req.body,
    };
    const result = await Lottery.updateOne(query, update);
    console.log(result);
    res.send({ result, status: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to select winners" });
  }
};

module.exports = sendLotteryPayment;
