const User = require("../../Modal/Users");
const Website = require("../../Modal/website");

const getDashboardData = async (req, res) => {
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

    const dashboardData = await Website.find();
    console.log(dashboardData);
    // Optionally mark winners or log them
    res.send({ dashboard: dashboardData[0], status: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to select winners" });
  }
};

module.exports = getDashboardData;
