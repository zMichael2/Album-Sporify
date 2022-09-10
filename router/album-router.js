const { Router } = require("express");
const { tokenAlbumValidator } = require("../middleware/album-middleware");
const albumController = require("../controllers/album.controller");
const registro_bd = require("../middleware/registro-bd");

const albumRouter = Router();

albumRouter.get(
  "/artista",
  [tokenAlbumValidator, registro_bd],
  albumController
);

module.exports = albumRouter;
