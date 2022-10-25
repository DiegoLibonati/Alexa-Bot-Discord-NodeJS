const { getVoiceConnection } = require("@discordjs/voice");
const { COLOR_EMBED, COLOR_EMBED_ERROR, PREFIX } = require("../../../config");
const { simpleEmbed } = require("../../helpers/export");

const playMusicBot = async (message, messageArgs, distube, client) => {
  if (messageArgs.length <= 2)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `The correct command is: ${PREFIX} play <search>`
      )
    );

  const voiceChannel = message.member.voice.channel;
  const connection = getVoiceConnection(message.guild.id);
  const textToSearch = messageArgs.slice(2).join(" ");

  if (connection) {
    connection.destroy();
    message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED,
        "DJ MODE",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        "¡DJ MODE ACTIVATED!"
      )
    );
  }

  message.reply(
    simpleEmbed(
      message,
      COLOR_EMBED,
      "PLAY",
      "https://diegolibonati.github.io/DiegoLibonatiWeb/",
      client,
      `¡${textToSearch} was added to the queue!`
    )
  );

  await distube.play(voiceChannel, textToSearch, {
    message,
    textChannel: message.channel,
    member: message.member,
  });
};

module.exports = playMusicBot;
