require("dotenv").config();
const express = require("express");
const albumRouter = require("./router/album-router");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", function (req, res) {
  res.status(201).json({ API: "Welcome API Spotify album" });
});

app.use("/album", albumRouter);

app.listen(PORT);
