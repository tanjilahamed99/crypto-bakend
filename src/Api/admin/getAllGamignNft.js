const GamingNft = require("../../Modal/gamignNft");
const Lottery = require("../../Modal/Lottery");

const getAllGamingNft = async (req, res, next) => {
  try {
    const gamingNft = await GamingNft.find();
    res.send({
      gamingNft,
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

module.exports = getAllGamingNft;
