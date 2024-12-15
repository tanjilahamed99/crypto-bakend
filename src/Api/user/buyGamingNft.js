const GamingNft = require("../../Modal/gamignNft");

const buyGamingNft = async (req, res, next) => {
  try {
    const { id } = req?.params;

    if (!id) {
      return res.send({
        status: false,
        message: "need more data for get data",
      });
    }
    const { users, remaining, sell, quantity } = req.body;

    if (!users || !sell || !quantity) {
      return res.send({
        status: false,
        message: "Need more data",
      });
    }

    const query = {
      _id: id,
    };

    const update = {
      $set: {
        quantity,
        users,
        remaining,
        sell,
      },
    };

    const result = await GamingNft.updateOne(query, update);

    if (!result) {
      return res.send({
        status: false,
        message: "gaming nft  not found",
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

module.exports = buyGamingNft;
