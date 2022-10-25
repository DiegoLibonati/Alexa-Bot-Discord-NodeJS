const { COLOR_EMBED_ERROR, COLOR_EMBED } = require("../../../../config");
const { buttonMusicEmbed } = require("../../../helpers/export");

const resumeButton = async (distube, client, queue, song) => {
  const isQueue = await distube.getQueue(queue.clientMember.guild);

  if (!isQueue)
    return queue.textChannel.send(
      buttonMusicEmbed(
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        "There is nothing in the queue right now!",
        song.user.username,
        song.user.displayAvatarURL({ format: "png" })
      )
    );

  distube.resume(queue.clientMember.guild);

  return queue.textChannel.send(
    buttonMusicEmbed(
      COLOR_EMBED,
      "RESUME",
      "https://diegolibonati.github.io/DiegoLibonatiWeb/",
      client,
      `Resumed the queue!`,
      song.user.username,
      song.user.displayAvatarURL({ format: "png" })
    )
  );
};

module.exports = resumeButton;
