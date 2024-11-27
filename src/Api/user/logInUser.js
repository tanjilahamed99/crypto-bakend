const User = require("../../Modal/Users");


const loginUser = async (req, res, next) => {
  try {
    const { wallet, email, password } = req.body || {};
    if (!wallet) {
      return res.status(400).send({ status: false, data: [] });
    }

    const query = { wallet: wallet };

    if (email || password) {
      query.email = email;
      query.password = password;
    }

    const user = await User.findOne(query);

    if (!user) {
      return res.status(400).send({ status: false, data: [1] });
    }

    const data = {
      _id: user?._id?.toString(),
      email: user?.email,
      username: user?.username,
      wallet: user?.wallet,
      joined: user?.joined,
      picture: user?.picture,
      referBy: user?.referBy,
      password: user?.password,
      role: user?.role,
    };
    return res.send({ status: true, data });

    // use appropriate status code to send data
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = loginUser;
