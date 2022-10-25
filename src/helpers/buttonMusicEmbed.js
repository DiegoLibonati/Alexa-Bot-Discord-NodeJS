const { EmbedBuilder } = require("discord.js");

const buttonMusicEmbed = (
  color,
  title,
  urlTitle,
  client,
  description = "",
  author,
  avatar
) => {
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
        .setTimestamp()
        .setFooter({
          text: `Request by ${author}`,
          iconURL: avatar,
        }),
    ],
  };
};

module.exports = {
  buttonMusicEmbed: buttonMusicEmbed,
};
