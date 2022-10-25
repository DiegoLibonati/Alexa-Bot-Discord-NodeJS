const { simpleEmbed } = require("../../helpers/export");
const { COLOR_EMBED, COLOR_EMBED_ERROR, PREFIX } = require("../../../config");

const stopMusicBot = async (message, distube, client, messageArgs) => {
  if (messageArgs.length > 2)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `The correct command is: ${PREFIX} stop`
      )
    );

  const queue = await distube.getQueue(message);

  if (!queue)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        "There is nothing in the queue right now!"
      )
    );

  distube.stop(message);

  return message.reply(
    simpleEmbed(
      message,
      COLOR_EMBED,
      "STOP",
      "https://diegolibonati.github.io/DiegoLibonatiWeb/",
      client,
      `Stopped the queue!`
    )
  );
};

module.exports = stopMusicBot;
