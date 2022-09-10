const { PrismaClient } = require("@prisma/client");
var ip = require("ip");
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

const prisma = new PrismaClient();

const registro_bd = async (req, res, next) => {
  const { artista } = req.body;
  await prisma.artista.create({
    data: {
      name: artista,
    },
  });
  await prisma.registros.create({
    data: {
      direccion_ip: ip.address(),
      fecha: hoy.toLocaleDateString(),
      artistaID: 1,
    },
  });

  next();
};
module.exports = registro_bd;
