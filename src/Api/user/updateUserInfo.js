const User = require("../../Modal/Users");

const updateUserInfo = async (req, res, next) => {
  try {
    const { wallet, userId } = req.params;
    if (!wallet || !userId) {
      return res.send({ status: false, message: "need more data" });
    }

    const query = {
      _id: userId,
    };
    const update = {
      $set: {
        ...req.body,
      },
    };

    const result = await User.updateOne(query, update);
    return res.send({
      status: true,
      result,
    });

    // use appropriate status code to send data
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = updateUserInfo;
