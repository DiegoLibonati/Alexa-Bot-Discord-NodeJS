const { config } = require("dotenv");

config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const MONGO_URI = process.env.MONGO;
const PREFIX = "diego";
const COLOR_EMBED = 0x00ff00;
const COLOR_EMBED_ERROR = 0xff0000;

module.exports = {
  TOKEN: TOKEN,
  CLIENT_ID: CLIENT_ID,
  PREFIX: PREFIX,
  COLOR_EMBED: COLOR_EMBED,
  COLOR_EMBED_ERROR: COLOR_EMBED_ERROR,
  MONGO_URI: MONGO_URI,
};
