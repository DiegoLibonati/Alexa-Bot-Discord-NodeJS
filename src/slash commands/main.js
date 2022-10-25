const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const { TOKEN, CLIENT_ID } = require("../../config");

const rest = new REST({ version: 10 }).setToken(TOKEN);

async function main(client) {
  const commands = [
    {
      name: "alive",
      description: "Check if the is on",
    },
    {
      name: "connect",
      description: "Connect Die-BOT to voice channel",
    },
    {
      name: "disconnect",
      description: "Disconnect Die-BOT to voice channel",
    },
    {
      name: "bye",
      description: "Disconnet a user from voice channel",
      options: [
        {
          name: "username",
          description: "The tag of the user",
          type: 3,
          required: true,
        },
      ],
    },
  ];

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    client.login(TOKEN);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  main: main,
};

/*     {
      name: "probando",
      description: "hola diego",
      options: [
        {
          name: "hola",
          description: "esto es una descripcion",
          type: 3,
          required: true,
        },
      ],
    }, */
