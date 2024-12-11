const Website = require("../../Modal/website");

const saveHistory = async (req, res, next) => {
  try {
    console.log(req.body);
    let update = { ...req.body };
    const result = await Website.findOneAndUpdate(update);
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

module.exports = saveHistory;
