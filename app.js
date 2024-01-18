const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const auth = require("./routes/auth");
const gallon = require("./routes/gallon");
const storeBranch = require("./routes/storeBranch");
const errorMiddleware = require("./middlewares/errors");
const cors = require("cors");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ limit: "100mb", extended: true }));


app.use(
    cors({
      origin: "https://aquaticdragon.onrender.com",
      credentials: true,
    })
  );

  
app.use("/api/v1", auth);
app.use("/api/v1", gallon);
app.use("/api/v1", storeBranch);

app.use(errorMiddleware);

module.exports = app;
