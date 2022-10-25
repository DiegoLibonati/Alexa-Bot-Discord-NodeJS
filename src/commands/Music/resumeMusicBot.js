const { simpleEmbed } = require("../../helpers/export");
const { COLOR_EMBED, COLOR_EMBED_ERROR, PREFIX } = require("../../../config");

const resumeMusicBot = async (message, distube, client, messageArgs) => {
  if (messageArgs.length > 2)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `The correct command is: ${PREFIX} resume`
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

  distube.resume(message);

  return message.reply(
    simpleEmbed(
      message,
      COLOR_EMBED,
      "RESUME",
      "https://diegolibonati.github.io/DiegoLibonatiWeb/",
      client,
      `Resumed the queue!`
    )
  );
};

module.exports = resumeMusicBot;
