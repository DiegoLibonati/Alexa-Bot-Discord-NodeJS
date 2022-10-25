const {
  getVoiceConnection,
  createAudioResource,
  createAudioPlayer,
} = require("@discordjs/voice");

const { getAudioUrl } = require("google-tts-api");
const { COLOR_EMBED_ERROR } = require("../../config");
const { simpleEmbed } = require("../helpers/export");

const player = createAudioPlayer();

const sayBot = (messageArgs, message, client) => {
  if (messageArgs.length <= 2) {
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        "Only accepts 1 word or more"
      )
    );
  }

  const textToSay = messageArgs.slice(2).join(" ");

  const voiceChannel = message.member.voice.channel;

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

  const audioURL = getAudioUrl(textToSay, {
    lang: "es",
    slow: false,
    host: "https://translate.google.com",
    timeout: 10000,
  });

  const connection = getVoiceConnection(message.guild.id);
  const subscription = connection.subscribe(player);

  if (subscription) {
    setTimeout(() => subscription.unsubscribe(), 5_000);
  }

  player.play(createAudioResource(audioURL));
};

module.exports = sayBot;
