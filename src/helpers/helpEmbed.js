const { EmbedBuilder } = require("discord.js");

const helpEmbed = (
  message,
  color,
  title,
  urlTitle,
  client,
  description = "",
  mode,
  modeValue
) => {
  const author = message.author.username;
  const authorTag = message.author.tag;
  const avatar = message.author.displayAvatarURL({ format: "png" });

  const botName = client.user.username;
  const botAvatar = client.user.displayAvatarURL({ format: "png" });

  return {
    embeds: [
      new EmbedBuilder()
        .setColor(color)
        .setTitle(`[Die-BOT] ${title}`)
        .setURL(`${urlTitle}`)
        .setAuthor({
          name: botName,
          iconURL: botAvatar,
        })
        .setDescription(description)
        .addFields({
          name: `COMMANDS ALLOWED IN ${mode}`,
          value: modeValue,
        })
        .setTimestamp()
        .setFooter({
          text: `Request by ${author}`,
          iconURL: avatar,
        }),
    ],
  };
};

module.exports = {
  helpEmbed: helpEmbed,
};
