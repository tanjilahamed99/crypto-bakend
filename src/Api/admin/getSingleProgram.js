const ProProgram = require("../../Modal/proProgram");

const getSingleProgramData = async (req, res, next) => {
  try {
    const { id } = req?.params;

    if (!id) {
      return res.send({
        status: false,
        message: "Id required",
      });
    }
    const query = { _id: id };
    const result = await ProProgram.findOne(query);
    if (!result) {
      return res.send({
        status: false,
        message: "there was no program match with this id",
      });
    }
    res.send({
      program: result,
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

module.exports = getSingleProgramData;
