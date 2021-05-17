//-------------SCHEMA MODEL----------------//

const express = require("express");
const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    id: Number,
    playerName: String,
    from: String,
    price: String,
    isPlaying: Boolean,
    description: String,
    img: String,
  },
  { collection: "players_data" }
);

module.exports = mongoose.model("players_data", playerSchema);
