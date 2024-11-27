const GamingNft = require("../../Modal/gamignNft");

const getSingleGamingNft = async (req, res, next) => {
  try {
    const { id } = req?.params;

    if (!id) {
      return res.send({
        status: false,
        message: "Id required",
      });
    }
    const query = { _id: id };
    const result = await GamingNft.findOne(query);
    if (!result) {
      return res.send({
        status: false,
        message: "there was no lottery match with this id",
      });
    }
    res.send({
      gamingNft: result,
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

module.exports = getSingleGamingNft;
