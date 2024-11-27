const getUserData = require("../../Api/user/getUserData");
const registerUser = require("../../Api/user/registerUser");
const loginUser = require("../../Api/user/logInUser");

const router = require("express").Router();

// GET
router.post("/register", registerUser);

router.post("/logInUser", loginUser);

router.get("/user/data", getUserData);

module.exports = router;
