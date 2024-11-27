const Lottery = require("../../Modal/Lottery");
const User = require("../../Modal/Users");
const Website = require("../../Modal/website");

const addFaq = async (req, res, next) => {
  try {
    const { adminEmail, adminId, wallet, type } = req?.params;

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

    let update = {};

    if (type === "faq") {
      update.faq = [...req.body];
    } else if (type === "testimonial") {
      update.testimonial = [...req.body];
    } else {
      update = { ...req?.body };
    }
    const result = await Website.findOneAndUpdate(update);

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

module.exports = addFaq;
