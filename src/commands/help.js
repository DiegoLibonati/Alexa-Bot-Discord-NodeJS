const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const { COLOR_EMBED, PREFIX, COLOR_EMBED_ERROR } = require("../../config");
const { simpleEmbed, helpEmbed, getButtons } = require("../helpers/export");
const {
  helpGeneralCommands,
  helpMusicCommands,
  helpModCommands,
  helpFunCommands,
  helpAlexaMode,
  helpDjMode,
  helpAlexaModeAllowCommands,
  helpDjModeAllowCommands,
} = require("../Texts/export");

const help = async (message, client, messageArgs) => {
  if (messageArgs.length > 2)
    return message.reply(
      simpleEmbed(
        message,
        COLOR_EMBED_ERROR,
        "ERROR",
        "https://diegolibonati.github.io/DiegoLibonatiWeb/",
        client,
        `The correct command is: ${PREFIX} help`
      )
    );

  const author = message.author.username;
  const authorTag = message.author.tag;
  const avatar = message.author.displayAvatarURL({ format: "png" });

  const botName = client.user.username;
  const botAvatar = client.user.displayAvatarURL({ format: "png" });

  const embed = new EmbedBuilder()
    .setColor(COLOR_EMBED)
    .setTitle(`[Die-BOT] HELP`)
    .setURL("https://diegolibonati.github.io/DiegoLibonatiWeb/")
    .setAuthor({
      name: botName,
      iconURL: botAvatar,
    })
    .setDescription("Select a help choice")
    .setTimestamp()
    .setFooter({
      text: `Request by ${author}`,
      iconURL: avatar,
    });

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("general_commands")
      .setLabel("General Commands")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("music_commands")
      .setLabel("Music Commands")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("mod_commands")
      .setLabel("Mod Commands")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("fun_commands")
      .setLabel("Fun Commands")
      .setStyle(ButtonStyle.Primary)
  );

  const rowTwo = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("alexa_commands")
      .setLabel("ALEXA MODE")
      .setStyle(ButtonStyle.Danger),
    new ButtonBuilder()
      .setCustomId("dj_commands")
      .setLabel("DJ MODE")
      .setStyle(ButtonStyle.Danger)
  );

  const m = await message.reply({
    ephemeral: true,
    embeds: [embed],
    components: [row, rowTwo],
  });

  const buttonFilter = (i) => i.user.id === message.author.id;

  const collector = m.createMessageComponentCollector({
    filter: buttonFilter,
    time: 60000,
  });

  collector.on("collect", async (i) => {
    if (i.customId === "general_commands") {
      getButtons(
        i,
        "I sent you the information you requested by private!",
        [],
        message.author.send(
          simpleEmbed(
            message,
            COLOR_EMBED,
            "HELP | GENERAL COMMANDS",
            "https://diegolibonati.github.io/DiegoLibonatiWeb/",
            client,
            helpGeneralCommands()
          )
        )
      );
    }

    if (i.customId === "music_commands") {
      getButtons(
        i,
        "I sent you the information you requested by private!",
        [],
        message.author.send(
          simpleEmbed(
            message,
            COLOR_EMBED,
            "HELP | MUSIC COMMANDS",
            "https://diegolibonati.github.io/DiegoLibonatiWeb/",
            client,
            helpMusicCommands()
          )
        )
      );
    }

    if (i.customId === "mod_commands") {
      getButtons(
        i,
        "I sent you the information you requested by private!",
        [],
        message.author.send(
          simpleEmbed(
            message,
            COLOR_EMBED,
            "HELP | MOD COMMANDS",
            "https://diegolibonati.github.io/DiegoLibonatiWeb/",
            client,
            helpModCommands()
          )
        )
      );
    }

    if (i.customId === "fun_commands") {
      getButtons(
        i,
        "I sent you the information you requested by private!",
        [],
        message.author.send(
          simpleEmbed(
            message,
            COLOR_EMBED,
            "HELP | FUN COMMANDS",
            "https://diegolibonati.github.io/DiegoLibonatiWeb/",
            client,
            helpFunCommands()
          )
        )
      );
    }

    if (i.customId === "alexa_commands") {
      getButtons(
        i,
        "I sent you the information you requested by private!",
        [],
        message.author.send(
          helpEmbed(
            message,
            COLOR_EMBED,
            "HELP | ALEXA MODE",
            "https://diegolibonati.github.io/DiegoLibonatiWeb/",
            client,
            helpAlexaMode(),
            "ALEXA MODE",
            helpAlexaModeAllowCommands()
          )
        )
      );
    }
    if (i.customId === "dj_commands") {
      getButtons(
        i,
        "I sent you the information you requested by private!",
        [],
        message.author.send(
          helpEmbed(
            message,
            COLOR_EMBED,
            "HELP | DJ MODE",
            "https://diegolibonati.github.io/DiegoLibonatiWeb/",
            client,
            helpDjMode(),
            "DJ MODE",
            helpDjModeAllowCommands()
          )
        )
      );
    }
  });
};

module.exports = help;
