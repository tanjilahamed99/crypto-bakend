const User = require("../../Modal/Users");

const getAdminInfo = async (req, res) => {
  try {
    const { adminEmail, adminId, wallet } = req?.params;
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

    const result = await User.find({ role: "admin" });
    res.send({ result, status: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to find admin information" });
  }
};

module.exports = getAdminInfo;
