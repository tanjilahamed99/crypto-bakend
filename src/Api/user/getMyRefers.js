const User = require("../../Modal/Users");

const getMyRefers = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.send({ status: false, message: "Id Required" });
    }
    const query = { referBy: id };
    const result = await User.find(query);
    return res.send({
      status: true,
      result,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = getMyRefers;
