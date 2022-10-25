const { PREFIX } = require("../../config");
const { removeFirstWord } = require("../helpers/removeFirstWord");
const Guild = require("../schema");

const botListen = async (message, client) => {
  try {
    let ID_CHANNEL = await Guild.findOne({ guild: message.guild.id });
    if (!message.content) return;

    if (message.content.toLowerCase().includes("hola")) {
      const parrafo = removeFirstWord(message.content);

      client.channels.cache
        .get(ID_CHANNEL.channelId)
        .send(`diego ${parrafo.toLowerCase()}`);
    }
  } catch (e) {
    return message.channel.send(
      `You need to configure your channelID first. User ${PREFIX} setchannel <channelID>`
    );
  }
};

module.exports = {
  botListen: botListen,
};
