const { Client, GatewayIntentBits } = require("discord.js");
const { addSpeechEvent } = require("discord-speech-recognition");
const {
  botVivo,
  connectBot,
  disconnectBot,
  disconnectUser,
  sayBot,
  help,
  setChannel,
} = require("./commands/export");
const { botListen } = require("./helpers/botListen");
const { PREFIX, MONGO_URI } = require("../config");
const { main } = require("./slash commands/main");
const { musicBot } = require("./commands/Music/musicBot");
const {
  playMusicBot,
  skipMusicBot,
  stopMusicBot,
  pauseMusicBot,
  resumeMusicBot,
} = require("./commands/Music/exports");
const { DisTube } = require("distube");
const mongoose = require("mongoose");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

const distube = new DisTube(client, {
  emitNewSongOnly: true,
  leaveOnEmpty: true,
});

addSpeechEvent(client, { lang: "es-MX" });
main(client);
musicBot(distube, client);

client.on("ready", async () => {
  await mongoose.connect(MONGO_URI, {
    keepAlive: true,
  });

  console.log(`${client.user.tag} has logged in!`);
});

client.on("messageCreate", async (message) => {
  const messageArgs = message.content.split(" ");

  if (
    messageArgs[0] === PREFIX &&
    (messageArgs[1] === "alive" || messageArgs[1] === "vivo")
  ) {
    botVivo(message, client, messageArgs);
  }

  if (
    messageArgs[0] === PREFIX &&
    (messageArgs[1] === "connect" || messageArgs[1] === "entra")
  ) {
    connectBot(message, client, distube, messageArgs);
  }

  if (
    messageArgs[0] === PREFIX &&
    (messageArgs[1] === "chau" ||
      messageArgs[1] === "disconnect" ||
      messageArgs[1] === "andate")
  ) {
    disconnectBot(message, client, messageArgs);
  }

  if (
    messageArgs[0] === PREFIX &&
    (messageArgs[1] === "adios" ||
      messageArgs[1] == "adiós" ||
      messageArgs[1] == "bye")
  ) {
    disconnectUser(messageArgs, message, client);
  }

  if (
    messageArgs[0] === PREFIX &&
    (messageArgs[1] === "deci" ||
      messageArgs[1] === "di" ||
      messageArgs[1] === "vi" ||
      messageArgs[1] === "si" ||
      messageArgs[1] === "mi" ||
      messageArgs[1] === "tesis" ||
      messageArgs[1] === "say" ||
      messageArgs[1] === "decí")
  ) {
    sayBot(messageArgs, message, client);
  }

  if (messageArgs[0] === PREFIX && messageArgs[1] === "help") {
    help(message, client, messageArgs);
  }

  if (messageArgs[0] === PREFIX && messageArgs[1] === "play") {
    playMusicBot(message, messageArgs, distube, client);
  }

  if (messageArgs[0] === PREFIX && messageArgs[1] === "skip") {
    skipMusicBot(message, distube, client, messageArgs);
  }

  if (messageArgs[0] === PREFIX && messageArgs[1] === "stop") {
    stopMusicBot(message, distube, client, messageArgs);
  }

  if (messageArgs[0] === PREFIX && messageArgs[1] === "pause") {
    pauseMusicBot(message, distube, client, messageArgs);
  }

  if (messageArgs[0] === PREFIX && messageArgs[1] === "resume") {
    resumeMusicBot(message, distube, client, messageArgs);
  }

  if (messageArgs[0] === PREFIX && messageArgs[1] === "setchannel") {
    setChannel(message, client, messageArgs);
  }
});

client.on("speech", (message) => {
  botListen(message, client);
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === "alive") {
      botVivo(interaction);
    }

    if (interaction.commandName === "connect") {
      connectBot(interaction, client);
    }

    if (interaction.commandName === "disconnect") {
      disconnectBot(interaction);
    }
  }
});
