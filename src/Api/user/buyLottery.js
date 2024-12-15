const MyCart = require("../../Modal/myCart");

const buyLottery = async (req, res, next) => {
  try {
    const { wallet, userId } = req.params;
    // console.log(req.params);

    // if (!wallet || !userId) {
    //   return res.send({ status: false, message: "need same more information" });
    // }

    const isExist = await MyCart.findOne({ wallet, userId });

    if (isExist) {
      const query = { userId };
      const update = { ...req.body };

      const result = await MyCart.updateOne(query, update);

      return res.send({
        status: true,
        result,
      });
    } else {
      const newData = {
        userId,
        wallet,
        ...req?.body,
      };

      const result = await MyCart.create(newData);

      return res.send({
        status: true,
        result,
      });
    }

    // use appropriate status code to send data
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = buyLottery;
