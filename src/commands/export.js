const botVivo = require("./botVivo");
const connectBot = require("./connectBot");
const disconnectBot = require("./disconnectBot");
const disconnectUser = require("./disconnectUser");
const sayBot = require("./sayBot");
const help = require("./help");
const setChannel = require("./setChannel");

module.exports = {
  botVivo: botVivo,
  connectBot: connectBot,
  disconnectBot: disconnectBot,
  disconnectUser: disconnectUser,
  sayBot: sayBot,
  help: help,
  setChannel: setChannel,
};
