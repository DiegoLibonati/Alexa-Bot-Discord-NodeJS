const { COLOR_EMBED, COLOR_EMBED_ERROR, PREFIX } = require("../../config");
const { simpleEmbed } = require("../helpers/export");

const botVivo = (message, client, messageArgs) => {
  if (messageArgs.length > 2)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `The correct command is: ${PREFIX} alive`
      )
    );

  return message.reply(
    simpleEmbed(
      message,
      COLOR_EMBED,
      "ALIVE",
      "https://diegolibonati.github.io/DiegoLibonatiWeb/",
      client,
      `Hi ${message.author}, I AM ALIVE`
    )
  );
};

module.exports = botVivo;
