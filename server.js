require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const mongoDB_URI = process.env.MONGODB_URI;
const app = express();
app.set("view engine", "ejs");

const sessionObj = {
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({
    mongoUrl: mongoDB_URI,
  })
};

if (process.env.ENVIRONMENT === "PRODUCTION") {
  app.set("trust proxy", 1); // trust first proxy
  sessionObj.cookie.secure = true; // serve secure cookies
}

app.use(session(sessionObj));
app.use(express.static('./views/public'));

app.get("/", (req, res) => {
  return res.render("workspace");
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

mongoose.set("strictQuery", true);

mongoose.connect(mongoDB_URI)
    .then(() => { console.log("Connection Successfull") })
    .catch((err) => { console.log("Received an Error") })