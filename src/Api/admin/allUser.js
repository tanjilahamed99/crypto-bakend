const User = require("../../Modal/Users");

const allUsers = async (req, res, next) => {
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
    const result = await User.find();
    res.send({
      status: true,
      users: result,
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: false,
      message: err,
    });
  }
};

module.exports = allUsers;
