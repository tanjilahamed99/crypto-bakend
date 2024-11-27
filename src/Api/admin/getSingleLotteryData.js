const Lottery = require("../../Modal/Lottery");
const User = require("../../Modal/Users");

const getSingleLotteryData = async (req, res, next) => {
  try {
    const { id } = req?.params;

    if (!id) {
      return res.send({
        status: false,
        message: "Id required",
      });
    }
    const query = { _id: id };
    const result = await Lottery.findOne(query);
    if (!result) {
      return res.send({
        status: false,
        message: "there was no lottery match with this id",
      });
    }
    res.send({
      lottery: result,
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

module.exports = getSingleLotteryData;
