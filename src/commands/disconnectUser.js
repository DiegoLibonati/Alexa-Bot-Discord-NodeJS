const { COLOR_EMBED, COLOR_EMBED_ERROR } = require("../../config");
const { simpleEmbed } = require("../helpers/export");

const disconnectUser = (messageArgs, message, client) => {
  if (messageArgs.length > 3 || messageArgs.length <= 2)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        "This command only accept 1 arg. Example: die bye <username>"
      )
    );

  message.guild.members
    .fetch({ query: messageArgs[2], limit: 1 })
    .then((members) => {
      const member = members.first();

      if (
        member &&
        member.voice.channel &&
        member.voice.channel !== undefined &&
        member.voice.channel !== null
      ) {
        member.voice.disconnect(member.id);

        return message.reply(
          simpleEmbed(
            message,
            COLOR_EMBED,
            "DISCONNECT USER",
            "https://diegolibonati.github.io/DiegoLibonatiWeb/",
            client,
            `${member.nickname} disconnected by ${message.author}`
          )
        );
      } else {
        if (!member) {
          return message.reply(
            simpleEmbed(
              message,
              COLOR_EMBED_ERROR,
              "ERROR",
              "https://diegolibonati.github.io/DiegoLibonatiWeb/",
              client,
              `Invalid username`
            )
          );
        } else {
          return message.reply(
            simpleEmbed(
              message,
              COLOR_EMBED_ERROR,
              "ERROR",
              "https://diegolibonati.github.io/DiegoLibonatiWeb/",
              client,
              `${messageArgs[2]} is not in a voice channel.`
            )
          );
        }
      }
    });
};

module.exports = disconnectUser;
