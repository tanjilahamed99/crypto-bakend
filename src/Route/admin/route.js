const addFaq = require("../../Api/admin/addFaq");
const addGamingNft = require("../../Api/admin/addGamingNft");
const addLottery = require("../../Api/admin/AddLottery");
const addProProgram = require("../../Api/admin/addProProgram");
const addUpdates = require("../../Api/admin/addUpdates");
const allUsers = require("../../Api/admin/allUser");
const blockUser = require("../../Api/admin/blockUser");
const createAdmin = require("../../Api/admin/createAdmin");
const deleteAdmin = require("../../Api/admin/deleteAdmin");
const deleteGamingNft = require("../../Api/admin/deleteGamingNft");
const deleteLottery = require("../../Api/admin/deleteLottery");
const deleteProProgram = require("../../Api/admin/deleteProProgram");
const deleteUpdate = require("../../Api/admin/deleteUpdate");
const drawLottery = require("../../Api/admin/DrawLottery");
const getAdminInfo = require("../../Api/admin/getAdminInfo");
const getAllGamingNft = require("../../Api/admin/getAllGamignNft");
const getAllLottery = require("../../Api/admin/getAllLottery");
const getAllProProgramByType = require("../../Api/admin/getAllProProgramByType");
const getDashboardData = require("../../Api/admin/getDashboardData");
const getSingleGamingNft = require("../../Api/admin/getSingleGamingNft");
const getSingleLotteryData = require("../../Api/admin/getSingleLotteryData");
const getSingleProgramData = require("../../Api/admin/getSingleProgram");
const getUserCardsData = require("../../Api/admin/getUserCardsData");
const getUserData = require("../../Api/admin/getUserData");
const getWebsiteData = require("../../Api/admin/getWebsiteData");
const sendLotteryPayment = require("../../Api/admin/sendLotteryPayment");
const setLotteryWinners = require("../../Api/admin/setLotteryWinners");
const updateAdmin = require("../../Api/admin/updateAdmin");
const updateGamingNft = require("../../Api/admin/updateGamingNft");
const updateLottery = require("../../Api/admin/updateLottery");
const updateProgram = require("../../Api/admin/updateProgram");

const router = require("express").Router();

// user
// GET
router.get("/admin/allUsers", allUsers);

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
router.post(
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

// faq data
router.post("/admin/updates/:adminId/:adminEmail/:wallet", addUpdates);

// get users cards data
router.get(
  "/admin/userCarts/:adminId/:adminEmail/:wallet/:id",
  getUserCardsData
);
router.get("/admin/userData/:adminId/:adminEmail/:wallet/:id", getUserData);

// get dashboard data
router.get(
  "/admin/dashboardData/:adminId/:adminEmail/:wallet",
  getDashboardData
);

// get all admin users info
router.get("/admin/getAdminInfo/:adminId/:adminEmail/:wallet", getAdminInfo);
// create new admin
router.post("/admin/createAdmin/:adminId/:adminEmail/:wallet", createAdmin);
// delete admin
router.delete(
  "/admin/deleteAdmin/:adminId/:adminEmail/:wallet/:id",
  deleteAdmin
);
// update admin
router.put("/admin/updateAdmin/:adminId/:adminEmail/:wallet/:id", updateAdmin);

// user related route
router.put("/admin/blockUser/:adminId/:adminEmail/:wallet/:id", blockUser);

// delete update
router.delete(
  "/admin/deleteUpdate/:adminId/:adminEmail/:wallet/:id",
  deleteUpdate
);

module.exports = router;
