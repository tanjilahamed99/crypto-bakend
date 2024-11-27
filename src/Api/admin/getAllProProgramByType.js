const ProProgram = require("../../Modal/proProgram");

const getAllProProgramByType = async (req, res, next) => {
  try {
    const { type, programName } = req?.params;

    if (!type || !programName) {
      return res.send({
        status: false,
        message: "type / program name  required",
      });
    }

    const query = {
      type,
      programName,
    };

    const programs = await ProProgram.find(query);
    res.send({
      programs,
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

module.exports = getAllProProgramByType;
