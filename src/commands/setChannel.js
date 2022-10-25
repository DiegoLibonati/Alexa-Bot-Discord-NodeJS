const { COLOR_EMBED_ERROR, PREFIX, ID_CHANNEL } = require("../../config");
const { simpleEmbed } = require("../helpers/export");
const Guild = require("../schema");

const setChannel = async (message, client, messageArgs) => {
  if (messageArgs.length > 3 || messageArgs.length <= 2)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `The correct command is: ${PREFIX} setchannel <channelID>`
      )
    );

  try {
    await Guild.create({
      guild: message.guildId,
      channelId: messageArgs[2],
    });

    ID_CHANNEL = messageArgs[2];
  } catch (e) {}
};

module.exports = setChannel;
