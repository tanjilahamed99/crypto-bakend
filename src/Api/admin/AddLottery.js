const Lottery = require("../../Modal/Lottery");
const User = require("../../Modal/Users");

const addLottery = async (req, res, next) => {
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

    const { title, image, price, quantity } = req.body;

    if (!title || !image || !price || !quantity) {
      return res.send({
        status: false,
        message: "Need more data",
      });
    }

    const result = await Lottery.create(req.body);
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

module.exports = addLottery;
