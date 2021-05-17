//-------------FETCH ROUTES----------------//

const express = require("express");

const players = require("../model/player");
const route = express.Router();
const app = express();

let path = __dirname;
path = path + "./views";
app.use(express.static(path));

app.set("view engine", "ejs");

route.get("/fetch/:id", async (req, res) => {
  let index = req.params.id;
  const players_data = await players.find();
  try {
    res.render("players", {
      img: players_data[index].img,
      name: players_data[index].playerName,
      from: players_data[index].from,
      price: players_data[index].price,
      desc: players_data[index].description,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
