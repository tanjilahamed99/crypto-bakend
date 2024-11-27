const Website = require("../../Modal/website");

const getWebsiteData = async (req, res, next) => {
  try {
    const websiteData = await Website.find();
    res.send({
      websiteData: websiteData[0],
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

module.exports = getWebsiteData;
