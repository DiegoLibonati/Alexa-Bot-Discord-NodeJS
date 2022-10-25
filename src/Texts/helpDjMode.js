const helpDjMode = () => {
  commands =
    "PREFIX: diego \n\ndiego **play** <url> or <text> - This command allows you to play music by passing a text to search for or a url. Also if Die-BOT is in ALEXA MODE it will switch from ALEXA MODE to DJ MODE.[ONLY WORKS IN DJ MODE]\ndiego **skip** - This command allows you to switch to another song if there is another song in the queue.[ONLY WORKS IN DJ MODE]\ndiego **stop** - This command allows you to switch to another song if there is another song in the queue.[ONLY WORKS IN DJ MODE]\ndiego **pause** - This command allows you to pause the current song.[ONLY WORKS IN DJ MODE]\n\ndiego **resume** - This command allows you to resume the current song.[ONLY WORKS IN DJ MODE]\n";

  return commands;
};
const helpDjModeAllowCommands = () => {
  commands = "play, skip, stop";

  return commands;
};

module.exports = { helpDjModeAllowCommands, helpDjMode };
