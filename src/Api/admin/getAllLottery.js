const Lottery = require("../../Modal/Lottery");

const getAllLottery = async (req, res, next) => {
  try {
    const lottery = await Lottery.find();
    res.send({
      lottery,
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

module.exports = getAllLottery;
