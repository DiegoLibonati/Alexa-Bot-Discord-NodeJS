const { simpleEmbed } = require("../../helpers/export");
const { COLOR_EMBED, COLOR_EMBED_ERROR, PREFIX } = require("../../../config");

const pauseMusicBot = async (message, distube, client, messageArgs) => {
  if (messageArgs.length > 2)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `The correct command is: ${PREFIX} pause`
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

  distube.pause(message);

  return message.reply(
    simpleEmbed(
      message,
      COLOR_EMBED,
      "PAUSE",
      "https://diegolibonati.github.io/DiegoLibonatiWeb/",
      client,
      `Paused the queue!`
    )
  );
};

module.exports = pauseMusicBot;
