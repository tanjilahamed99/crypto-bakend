const User = require("../../Modal/Users");

const saveRefer = async (req, res, next) => {
  try {
    const { referOwner, referId } = req.params;

    console.log(referId);

    if (!referOwner) {
      return res.send({ status: false, message: "referOwner id Required" });
    }

    const find = await User?.findOne({ _id: referOwner });

    if (!find) {
      return res.send({
        message: "refer owner not found",
        status: false,
      });
    }

    const isReferExit = find?.refers.find((item) => item === referId);

    if (isReferExit) {
      return res.send({
        status: false,
        message: "Already exist",
      });
    }

    let refers = [];

    if (find.refers.length > 0) {
      refers = [referId, ...find.refers];
    } else {
      refers = [referId];
    }

    const query = { _id: referOwner };
    const update = {
      $set: {
        refers,
      },
    };

    const result = await User.updateOne(query, update);
    // console.log(result);
    return res.send({
      status: true,
      result,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = saveRefer;
