const Lottery = require("../../Modal/Lottery");
const User = require("../../Modal/Users");

const addTestimonial = async (req, res, next) => {
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

    const { link } = req.body;

    const update = {
      $set: {
        title,
        price,
        image,
        quantity,
      },
    };

    const result = await Lottery.findOneAndUpdate(query, update);

    if (!result) {
      return res.send({
        status: false,
        message: "Lottery not found",
      });
    }

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

module.exports = addTestimonial;
