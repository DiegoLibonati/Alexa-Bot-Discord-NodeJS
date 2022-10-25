const { joinVoiceChannel } = require("@discordjs/voice");
const { COLOR_EMBED, COLOR_EMBED_ERROR, PREFIX } = require("../../config");
const { simpleEmbed } = require("../helpers/export");

const connectBot = (message, client, distube, messageArgs) => {
  const voiceChannel = message.member.voice.channel;

  if (messageArgs.length > 2)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `The correct command is: ${PREFIX} connect`
      )
    );

  try {
    distube.voices.leave(message);

    message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED,
        "ALEXA MODE",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        "¡ALEXA MODE ACTIVATED!"
      )
    );
  } catch (e) {}

  if (!voiceChannel)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        "Please join to a voice channel first!"
      )
    );
  else {
    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      selfDeaf: false,
    });

    message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED,
        "CONNECT",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `I join to ${voiceChannel.name} thanks to ${message.author}`
      )
    );
  }
};

module.exports = connectBot;
