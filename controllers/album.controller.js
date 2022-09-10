const { request, response } = require("express");
const { albunes } = require("../helpers/album.helper");

const albumController = async (req = request, res = response) => {
  const { artista } = req.body;
  const album = await albunes(artista);
  res.status(201).json(album);
};

module.exports = albumController;
