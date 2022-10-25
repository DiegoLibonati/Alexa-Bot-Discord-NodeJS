const { simpleEmbed } = require("../../helpers/export");
const { COLOR_EMBED, COLOR_EMBED_ERROR, PREFIX } = require("../../../config");

const skipMusicBot = async (message, distube, client, messageArgs) => {
  if (messageArgs.length > 2)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `The correct command is: ${PREFIX} skip`
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

  try {
    const song = await queue.skip();

    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED,
        "SKIP",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `Skipped! Now playing:\n${song.name}`
      )
    );
  } catch (e) {
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `${e}`
      )
    );
  }
};

module.exports = skipMusicBot;
