const { EmbedBuilder } = require("discord.js");

const musicEmbed = (
  client,
  color,
  title,
  urlTitle,
  description,
  image,
  durantion,
  likes,
  dislikes,
  reposts,
  views,
  author,
  songsRelated,
  authorAvatar,
  url
) => {
  const botName = client.user.username;
  const botAvatar = client.user.displayAvatarURL({ format: "png" });

  const songRelatedOne = songsRelated[0];
  const songRelatedTwo = songsRelated[1];
  const songRelatedTr = songsRelated[2];

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
        .setThumbnail(image)
        .setImage(image)
        .addFields(
          {
            name: "Duration",
            value: durantion,
            inline: true,
          },
          { name: "Likes", value: `${likes}`, inline: true },
          { name: "Dislikes", value: `${dislikes}`, inline: true }
        )
        .addFields(
          {
            name: "Reposts",
            value: `${reposts}`,
            inline: true,
          },
          {
            name: "Views",
            value: `${views}`,
            inline: true,
          },
          {
            name: "URL",
            value: url,
            inline: true,
          }
        )
        .addFields({
          name: "Related Songs",
          value: "A few related songs by your search",
        })
        .addFields({ name: songRelatedOne.name, value: songRelatedOne.url })
        .addFields({ name: songRelatedTwo.name, value: songRelatedTwo.url })
        .addFields({ name: songRelatedTr.name, value: songRelatedTr.url })
        .setTimestamp()
        .setFooter({
          text: `Request by ${author}`,
          iconURL: authorAvatar,
        }),
    ],
  };
};

module.exports = {
  musicEmbed: musicEmbed,
};
