const { getVoiceConnection } = require("@discordjs/voice");
const { COLOR_EMBED, COLOR_EMBED_ERROR, PREFIX } = require("../../config");
const { simpleEmbed } = require("../helpers/export");

const disconnectBot = (message, client, messageArgs) => {
  if (messageArgs.length > 2)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `The correct command is: ${PREFIX} disconnect`
      )
    );

  const connection = getVoiceConnection(message.guild.id);

  if (!connection)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        "I am not in a voice channel."
      )
    );

  connection.destroy();

  return message.reply(
    simpleEmbed(
      message,
      COLOR_EMBED,
      "DISCONNECT BOT",
      "https://diegolibonati.github.io/DiegoLibonatiWeb/",
      client,
      `I leave the channel thanks to ${message.author}`
    )
  );
};

module.exports = disconnectBot;
