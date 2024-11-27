const User = require("../../Modal/Users");

const registerUser = async (req, res, next) => {
  try {
    if (!req?.body?.wallet) {
      return res.send({
        status: false,
        message: "you are not connect to wallet",
      });
    }

    const find = await User?.findOne({ wallet: req?.body?.wallet });

    if (find) {
      return res.send({
        status: true,
        message: "Already register this account",
      });
    }

    const result = await User?.create(req?.body);
    if (!result) {
      return res.send({
        status: false,
        message: "something error there",
      });
    }

    res?.send({
      status: true,
      user: result,
    });


    
  } catch (err) {
    console.log(err);
    res.send({
      status: false,
      message: err,
    });
  }
};

module.exports = registerUser;
