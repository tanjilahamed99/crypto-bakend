const MyCart = require("../../Modal/myCart");
const ProProgram = require("../../Modal/proProgram");

const buyProgram = async (req, res, next) => {
    try {
        const { id } = req.params || {};
        // if (!wallet || !userId) {
        //   return res.send({ status: false, message: "need same more information" });
        // }


        console.log(id)

        const query = {
            _id: id
        }

        const update = {
            ...req?.body
        }

        const result = await ProProgram.updateOne(query, update)

        return res.send(result)

        // use appropriate status code to send data
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

module.exports = buyProgram;
