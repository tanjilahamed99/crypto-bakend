const ProProgram = require("../../Modal/proProgram");
const getProgramDataByType = async (req, res, next) => {
  try {
    const { type } = req.params || {};

    if (!type) {
      return res.send({ success: false, message: "Required fields missing!" });
    }

    const programs = await ProProgram.find({ type });

    if (!programs) {
      return res.status(404).send({ message: "program not found" });
    }

    return res.send({
      programs,
      status: true,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = getProgramDataByType;
