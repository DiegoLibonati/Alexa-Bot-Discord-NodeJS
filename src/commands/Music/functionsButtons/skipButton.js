const { COLOR_EMBED_ERROR, COLOR_EMBED } = require("../../../../config");
const { buttonMusicEmbed } = require("../../../helpers/export");

const skipButton = async (distube, client, queue, song) => {
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

  try {
    const isSong = await isQueue.skip();

    return queue.textChannel.send(
      buttonMusicEmbed(
        COLOR_EMBED,
        "SKIP",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `Skipped! Now playing:\n${isSong.name}`,
        song.user.username,
        song.user.displayAvatarURL({ format: "png" })
      )
    );
  } catch (e) {
    return queue.textChannel.send(
      buttonMusicEmbed(
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `${e}`,
        song.user.username,
        song.user.displayAvatarURL({ format: "png" })
      )
    );
  }
};

module.exports = skipButton;
