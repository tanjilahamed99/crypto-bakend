const MyCart = require("../../Modal/myCart");
const User = require("../../Modal/Users");

const getUserCardsData = async (req, res) => {
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
    const cardsData = await MyCart.findOne({ userId: id });
    res.send({ cardsData, status: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to select winners" });
  }
};

module.exports = getUserCardsData;
