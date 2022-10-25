const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { COLOR_EMBED, PREFIX } = require("../../../config");
const { musicEmbed } = require("../../helpers/export");
const {
  skipButton,
  stopButton,
  pauseButton,
  resumeButton,
} = require("./functionsButtons/exports");

const musicBot = (distube, client) => {
  distube.on("playSong", async (queue, song) => {
    let songRelatedOne = song.related[0].name.split(/,|-/);
    let songRelatedTwo = song.related[1].name.split(/,|-/);
    let songRelatedTr = song.related[2].name.split(/,|-/);

    if (songRelatedOne.length === 1) {
      songRelatedOne = song.related[0].name;
    } else {
      songRelatedOne = songRelatedOne[1];
    }

    if (songRelatedTwo.length === 1) {
      songRelatedTwo = song.related[1].name;
    } else {
      songRelatedTwo = songRelatedTwo[1];
    }

    if (songRelatedTr.length === 1) {
      songRelatedTr = song.related[2].name;
    } else {
      songRelatedTr = songRelatedTr[1];
    }

    queue.textChannel.send(
      musicEmbed(
        client,
        COLOR_EMBED,
        "PLAY",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        `Playing: ${song.name}`,
        song.thumbnail,
        song.formattedDuration,
        song.likes,
        song.dislikes,
        song.reposts,
        song.views,
        song.user.username,
        song.related,
        song.user.displayAvatarURL({ format: "png" }),
        song.url
      )
    );

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("skip")
        .setLabel("SKIP")
        .setStyle(ButtonStyle.Success),
      new ButtonBuilder()
        .setCustomId("stop")
        .setLabel("STOP")
        .setStyle(ButtonStyle.Success),
      new ButtonBuilder()
        .setCustomId("pause")
        .setLabel("PAUSE")
        .setStyle(ButtonStyle.Success),
      new ButtonBuilder()
        .setCustomId("resume")
        .setLabel("RESUME")
        .setStyle(ButtonStyle.Success)
    );

    const rowTwo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("song_related_one")
        .setLabel(`ADD TO QUEUE ${songRelatedOne.substring(0, 67)}`)
        .setStyle(ButtonStyle.Danger),
      new ButtonBuilder()
        .setCustomId("song_related_two")
        .setLabel(`ADD TO QUEUE ${songRelatedTwo.substring(0, 67)}`)
        .setStyle(ButtonStyle.Danger),
      new ButtonBuilder()
        .setCustomId("song_related_tr")
        .setLabel(`ADD TO QUEUE ${songRelatedTr.substring(0, 67)}`)
        .setStyle(ButtonStyle.Danger)
    );

    const m = await queue.textChannel.send({
      ephemeral: true,
      components: [row, rowTwo],
    });

    const buttonFilter = (i) => i.user.id === song.user.id;

    const collector = m.createMessageComponentCollector({
      filter: buttonFilter,
      time: 240000,
    });

    collector.on("collect", async (i) => {
      i.deferUpdate();
      if (i.customId === "skip") {
        skipButton(distube, client, queue, song);
      }
      if (i.customId === "stop") {
        stopButton(distube, client, queue, song);
      }
      if (i.customId === "pause") {
        pauseButton(distube, client, queue, song);
      }
      if (i.customId === "resume") {
        resumeButton(distube, client, queue, song);
      }
      if (i.customId === "song_related_one") {
        queue.textChannel.send(`${PREFIX} play ${songRelatedOne}`);
      }
      if (i.customId === "song_related_two") {
        queue.textChannel.send(`${PREFIX} play ${songRelatedTwo}`);
      }
      if (i.customId === "song_related_tr") {
        queue.textChannel.send(`${PREFIX} play ${songRelatedTr}`);
      }
    });
  });
};

module.exports = {
  musicBot: musicBot,
};
