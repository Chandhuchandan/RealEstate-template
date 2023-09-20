import mongoose from "mongoose";
import express from "express";
import { mongoDBURL, PORT } from "./config.js";
import cors from "cors";
import router from "./Routes/propertyRoute.js";
const app = express();
//------------ MiddleWare -------------------
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
app.use(logger);
app.use(express.json()); // for json data
app.use(express.urlencoded({ extended: true })); // for form Data
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
); // handling CORS
app.use("/realEstate", router);

//------------connecting to mongoDb and starting the server if connected------------

mongoose
  .connect(mongoDBURL)
  .then((res) => {
    console.log(`connected to database`);
    app.listen(PORT, () => {
      console.log(`open http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
