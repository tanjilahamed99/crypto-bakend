const ProProgram = require("../../Modal/proProgram");
const User = require("../../Modal/Users");

const addProProgram = async (req, res, next) => {
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

    const { price, quantity, programName, type, order } = req.body;

    if (!type || !programName || !price || !quantity || !order) {
      return res.send({
        status: false,
        message: "Need more data",
      });
    }

    const result = await ProProgram.create(req.body);
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

module.exports = addProProgram;
