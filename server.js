//-------------MAIN SERVER FILE----------------//

// goto localhost:3000/home

// goto localhost:3000/home

// goto localhost:3000/home

const express = require("express");
const mongoose = require("mongoose");

const fetchRouter = require("./routes/fetchRoute");
const homeRouter = require("./routes/homeRoute");

const app = express();

const dbUrl =
  "mongodb+srv://Admin:12345@cluster0.owk5q.mongodb.net/cricket_players?retryWrites=true&w=majority";

//-------------SERVING STATIC FILES----------------//
let path = __dirname;
path = path + "/views";
app.use(express.static(path));

app.set("view engine", "ejs");

//-------------SERVER CONNECTION----------------//
mongoose.connect(dbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once("error", (err) => {
  console.log(err);
});

db.on("open", () => {
  console.log("DB connected");
});
//-------------ROUTES----------------//
app.use("", homeRouter);
app.use("", fetchRouter);

//-------------LISTENING----------------//
app.listen(3000, () => {
  console.log("server is listening");
});
