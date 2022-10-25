const botListen = require("./botListen");
const removeFirstWord = require("./removeFirstWord");
const { simpleEmbed } = require("./simpleEmbed");
const { musicEmbed } = require("./musicEmbed");
const { helpEmbed } = require("./helpEmbed");
const getButtons = require("./getButtons");
const { buttonMusicEmbed } = require("./buttonMusicEmbed");

module.exports = {
  botListen: botListen,
  removeFirstWord: removeFirstWord,
  simpleEmbed: simpleEmbed,
  musicEmbed: musicEmbed,
  helpEmbed: helpEmbed,
  getButtons: getButtons,
  buttonMusicEmbed: buttonMusicEmbed,
};
