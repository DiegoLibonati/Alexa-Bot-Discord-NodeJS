const { COLOR_EMBED_ERROR, COLOR_EMBED } = require("../../../../config");
const { buttonMusicEmbed } = require("../../../helpers/export");

const pauseButton = async (distube, client, queue, song) => {
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

  distube.pause(queue.clientMember.guild);

  return queue.textChannel.send(
    buttonMusicEmbed(
      COLOR_EMBED,
      "PAUSE",
      "https://diegolibonati.github.io/DiegoLibonatiWeb/",
      client,
      `Paused the queue!`,
      song.user.username,
      song.user.displayAvatarURL({ format: "png" })
    )
  );
};

module.exports = pauseButton;
