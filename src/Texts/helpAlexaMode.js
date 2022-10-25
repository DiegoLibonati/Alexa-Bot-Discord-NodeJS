const helpAlexaMode = () => {
  commands =
    "PREFIX: diego \n\ndiego **connect** - This command allows the bot to connect to the voice channel in ALEXA mode. Also, if you are playing music on the channel, i.e. it is in DJ MODE, it will switch from DJ MODE to ALEXA MODE.\ndiego **disconnect** - This command allows the bot to disconnect from the ALEXA mode and leave the voice channel.\n";

  return commands;
};

const helpAlexaModeAllowCommands = () => {
  commands = "alive, disconnect, bye, say";

  return commands;
};

module.exports = { helpAlexaMode, helpAlexaModeAllowCommands };
