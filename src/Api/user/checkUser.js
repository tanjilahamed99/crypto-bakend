const User = require("../../Modal/Users");

const checkUser = async (req, res, next) => {
  try {
    const { wallet } = req.params;
    if (!wallet) {
      return res.send({
        status: false,
        message: "you are not connect to wallet",
      });
    }

    const find = await User?.findOne({ wallet });

    if (find) {
      return res.send({
        status: true,
        message: "Already register this account",
        created: true,
      });
    } else {
      return res.send({
        status: false,
        message: "Not Exist",
        created: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.send({
      status: false,
      message: err,
    });
  }
};

module.exports = checkUser;
