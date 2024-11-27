const Lottery = require("../../Modal/Lottery");
const ProProgram = require("../../Modal/proProgram");
const User = require("../../Modal/Users");

const deleteProProgram = async (req, res, next) => {
  try {
    const { adminEmail, adminId, wallet, id } = req?.params;

    if (!adminEmail || !adminId || !wallet || !id) {
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
    const result = await ProProgram.deleteOne({ _id: id });
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

module.exports = deleteProProgram;
