const getUserData = require("../../Api/user/getUserData");
const registerUser = require("../../Api/user/registerUser");
const loginUser = require("../../Api/user/logInUser");
const buyLottery = require("../../Api/user/buyLottery");
const getMyCardData = require("../../Api/user/getMyCardData");
const updateLotteryById = require("../../Api/user/updateLotteryById");
const getProgramDataByType = require("../../Api/user/getProgramDataByType");
const buyProgram = require("../../Api/user/buyProgram");
const getAllUpdates = require("../../Api/user/getAllUpdates");
const getMyRefers = require("../../Api/user/getMyRefers");
const saveRefer = require("../../Api/user/saveRefer");
const saveHistory = require("../../Api/user/saveHistory");
const buyGamingNft = require("../../Api/user/buyGamingNft");
const updateUserInfo = require("../../Api/user/updateUserInfo");
const checkUser = require("../../Api/user/checkUser");

const router = require("express").Router();

// update Users Info
router.put("/updateUserInfo/:userId/:wallet", updateUserInfo);

// GET
router.post("/register", registerUser);
router.get("/userCheck/:wallet", checkUser);
router.post("/logInUser", loginUser);

router.get("/user/data", getUserData);

// buy lottery
router.post("/lottery/:userId/:Wallet", buyLottery);

// cart data
router.get("/myCartData/:userId/:Wallet", getMyCardData);

// update lottery data after the lottery ticked buy
router.put("/buyLottery/:id", updateLotteryById);
// but gaming nft
router.put("/buyGamingNft/:id", buyGamingNft);

// buy Program
router.put("/buyProgram/:id", buyProgram);
router.get("/proProgram/:type", getProgramDataByType);

// royalty sallery

// all updates
router.get("/allUpdates", getAllUpdates);

router.get("/myRefers/:id", getMyRefers);

router.post("/saveRefer/:referOwner/:referId", saveRefer);

// set all history for show data at home page and admin panel
router.post("/history", saveHistory);

module.exports = router;
