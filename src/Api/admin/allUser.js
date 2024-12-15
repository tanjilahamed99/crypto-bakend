const User = require("../../Modal/Users");

const allUsers = async (req, res, next) => {
  try {
    const result = await User.find();
    res.send({
      status: true,
      users: result,
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: false,
      message: err,
    });
  }
};

module.exports = allUsers;
