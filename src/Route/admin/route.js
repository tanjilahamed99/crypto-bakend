const addFaq = require("../../Api/admin/addFaq");
const addGamingNft = require("../../Api/admin/addGamingNft");
const addLottery = require("../../Api/admin/AddLottery");
const addProProgram = require("../../Api/admin/addProProgram");
const allUsers = require("../../Api/admin/allUser");
const deleteGamingNft = require("../../Api/admin/deleteGamingNft");
const deleteLottery = require("../../Api/admin/deleteLottery");
const deleteProProgram = require("../../Api/admin/deleteProProgram");
const drawLottery = require("../../Api/admin/DrawLottery");
const getAllGamingNft = require("../../Api/admin/getAllGamignNft");
const getAllLottery = require("../../Api/admin/getAllLottery");
const getAllProProgramByType = require("../../Api/admin/getAllProProgramByType");
const getSingleGamingNft = require("../../Api/admin/getSingleGamingNft");
const getSingleLotteryData = require("../../Api/admin/getSingleLotteryData");
const getSingleProgramData = require("../../Api/admin/getSingleProgram");
const getWebsiteData = require("../../Api/admin/getWebsiteData");
const sendLotteryPayment = require("../../Api/admin/sendLotteryPayment");
const setLotteryWinners = require("../../Api/admin/setLotteryWinners");
const updateGamingNft = require("../../Api/admin/updateGamingNft");
const updateLottery = require("../../Api/admin/updateLottery");
const updateProgram = require("../../Api/admin/updateProgram");

const router = require("express").Router();

// user
// GET
router.get("/admin/allUsers/:adminId/:adminEmail/:wallet", allUsers);

// lottery
// get lottery
router.get("/admin/lottery", getAllLottery);
router.get("/admin/lottery/:id", getSingleLotteryData);
// delete lottery
router.delete(
  "/admin/lottery/:adminId/:adminEmail/:wallet/:lotteryId",
  deleteLottery
);
// update lottery
router.put(
  "/admin/lottery/:adminId/:adminEmail/:wallet/:lotteryId",
  updateLottery
);
// create lottery
router.post("/admin/lottery/:adminId/:adminEmail/:wallet", addLottery);
router.post(
  "/admin/setWinners/:adminId/:adminEmail/:wallet/:id",
  setLotteryWinners
);
// draw lottery
router.get("/admin/lotteryDraw/:adminId/:adminEmail/:wallet/:id", drawLottery);
router.get(
  "/admin/sendLotteryPayment/:adminId/:adminEmail/:wallet/:id",
  sendLotteryPayment
);

// gamingNft
// get gamingNft
router.get("/admin/gamingNft", getAllGamingNft);
router.get("/admin/gamingNft/:id", getSingleGamingNft);
// create GamignNft
router.post("/admin/gamingNft/:adminId/:adminEmail/:wallet", addGamingNft);
router.delete(
  "/admin/gamingNft/:adminId/:adminEmail/:wallet/:gamingNftId",
  deleteGamingNft
);
// update GamignNft
router.put(
  "/admin/gamingNft/:adminId/:adminEmail/:wallet/:id",
  updateGamingNft
);

// faq data
router.post("/admin/faq/:adminId/:adminEmail/:wallet/:type", addFaq);

// website data
router.get("/admin/websiteData", getWebsiteData);

// pro prgram
// add program
router.post("/admin/proprogram/:adminId/:adminEmail/:wallet", addProProgram);
// get program by type and program name
router.get("/admin/proprogram/:type/:programName", getAllProProgramByType);
router.get("/admin/proprogram/:id", getSingleProgramData);
// delete pro program
router.delete(
  "/admin/proprogram/:adminId/:adminEmail/:wallet/:id",
  deleteProProgram
);
// update Pro program
router.put("/admin/proprogram/:adminId/:adminEmail/:wallet/:id", updateProgram);

module.exports = router;
