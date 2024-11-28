const MyCart = require("../../Modal/myCart");

const getMyCardData = async (req, res, next) => {
  try {
    const { wallet, userId } = req.params || {};
    // if (!wallet || !userId) {
    //   return res.send({ status: false, message: "need more data" });
    // }

    const isExist = await MyCart.findOne({ wallet, userId });

    if (!isExist) {
      return res.send({
        status: false,
        message: "not data found",
      });
    } else {
      return res.send({
        status: true,
        result: isExist,
      });
    }

    // use appropriate status code to send data
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getMyCardData;
