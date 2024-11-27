const User = require("../../Modal/Users");
const getUserData = async (req,res,next)=>{
    try {
        const { wallet } = req.query || {};
    
        if (!wallet) {
          return res
            .status(400)
            .send({ success: false, message: "Required fields missing!" });
        }
    
        let user = await User.findOne({ wallet });
    
        console.log(user);
    
        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }
    
        res.status(200).send(user);
      } catch (err) {
        console.error(err);
        next(err);
      }
}

module.exports = getUserData