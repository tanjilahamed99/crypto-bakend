const Lottery = require("../../Modal/Lottery");
const User = require("../../Modal/Users");

const drawLottery = async (req, res) => {
  const { adminEmail, adminId, wallet, id } = req?.params;

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
    const lottery = await Lottery.find({ _id: id });
    if (lottery?.users.length < 20) {
      return res
        .status(400)
        .json({ message: "Not enough lottery to pick 20 winners" });
    }

    const shuffled = lottery?.users.sort(() => 0.5 - Math.random());
    const winners = shuffled.slice(0, 5);

    // Optionally mark winners or log them
    res.status(200).json({ winners });
  } catch (error) {
    res.status(500).json({ error: "Failed to select winners" });
  }
};

module.exports = drawLottery;
