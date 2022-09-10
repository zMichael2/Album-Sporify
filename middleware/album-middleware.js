const { artitasID, getTokenAxios } = require("../helpers/album.helper");

const tokenAlbumValidator = async (req, res, next) => {
  const token = await getTokenAxios();
  if (!token) {
    return res.status(404).json({ Token: "Token no disponible" });
  }
  const ID = await artitasID();
  if (!ID) {
    return res.status(404).json({ ID: "No se encontro ID" });
  }
  next();
};

module.exports = { tokenAlbumValidator };
