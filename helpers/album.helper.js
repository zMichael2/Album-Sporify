require("dotenv").config();
const axios = require("axios");
const url = require("url");

const client_id = process.env.CLIENTID;
const client_secret = process.env.SECRETCLIENT;
const urls = "https://api.spotify.com/v1";

const authOptions = {
  method: "POST",
  url: "https://accounts.spotify.com/api/token",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64"),
  },
  data: new url.URLSearchParams({ grant_type: "client_credentials" }),
  json: true,
};

const getTokenAxios = async () => {
  try {
    const data = await axios(authOptions);
    const {
      data: { access_token },
    } = data;
    return access_token;
  } catch (error) {
    return null;
  }
};

const artitasID = async (artista) => {
  const token = await getTokenAxios();
  try {
    const options = {
      url: `${urls}/search/?q=${artista}&type=artist&limit=5`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      json: true,
    };
    const artita = await axios(options);
    const {
      data: {
        artists: { items },
      },
    } = artita;
    return items[0].id;
  } catch (error) {
    return null;
  }
};
const albunes = async (artista) => {
  const token = await getTokenAxios();
  const idArtista = await artitasID(artista);
  try {
    const options = {
      url: `${urls}/artists/${idArtista}/albums?market=es`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      json: true,
    };
    const albunes = await axios(options);
    const listaalbum = [];
    let item = albunes.data;

    item.items.forEach((data) => {
      obj = {
        artista: artista,
        album: data.name,
        imagen: data.images[0].url,
      };
      listaalbum.push(obj);
    });

    return listaalbum;
  } catch (error) {
    return null;
  }
};

module.exports = { getTokenAxios, artitasID, albunes };
