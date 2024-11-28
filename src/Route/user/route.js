const getUserData = require("../../Api/user/getUserData");
const registerUser = require("../../Api/user/registerUser");
const loginUser = require("../../Api/user/logInUser");
const buyLottery = require("../../Api/user/buyLottery");
const getMyCardData = require("../../Api/user/getMyCardData");
const updateLotteryById = require("../../Api/user/updateLotteryById");
const getProgramDataByType = require("../../Api/user/getProgramDataByType");

const router = require("express").Router();

// GET
router.post("/register", registerUser);

router.post("/logInUser", loginUser);

router.get("/user/data", getUserData);

// buy lottery
router.post("/lottery/:userId/:Wallet", buyLottery);

// cart data
router.get("/myCartData/:userId/:Wallet", getMyCardData);

// update lottery data after the lottery ticked buy
router.put("/buyLottery/:id", updateLotteryById);

router.get("/proProgram/:type", getProgramDataByType);

module.exports = router;
