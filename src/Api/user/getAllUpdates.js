const Updates = require("../../Modal/Updates");
const getAllUpdates = async (req, res, next) => {
  try {
    const allUpdates = await Updates.find();
    return res.send({
      status: true,
      updates: allUpdates,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = getAllUpdates;
