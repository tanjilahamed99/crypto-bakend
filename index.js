const express = require("express");
const app = express();
const connectDB = require("./src/DB/connectDB");
const useMiddleWere = require("./src/MiddleWeres/middleWere");
const port = process.env.PORT || 5000;

// middle wares
useMiddleWere(app);

// route call
const userRoute = require("./src/Route/user/route");
const admin = require("./src/Route/admin/route");

app.use("/api", userRoute);
app.use("/api", admin);

app.get("/health", (req, res) => {
  res.send("welcome to BookPartyPlaces server.Thanks for coming here ");
});

app.all("*", (req, res, next) => {
  const error = new Error(`${req.url} is not a valid url`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`server is on in port ${port}`);
  });
};

main();
