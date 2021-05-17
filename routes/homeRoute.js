//-------------HOME PAGE ROUTE----------------//
const express = require("express");

const route = express.Router();
const app = express();

let path = __dirname;
path = path + "./views";
app.use(express.static(path));

app.set("view engine", "ejs");

route.get("/home", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
