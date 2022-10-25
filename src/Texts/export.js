const helpGeneralCommands = require("./helpGeneralCommands");
const helpMusicCommands = require("./helpMusicCommands");
const helpModCommands = require("./helpModCommands");
const helpFunCommands = require("./helpFunCommands");
const {
  helpAlexaMode,
  helpAlexaModeAllowCommands,
} = require("./helpAlexaMode");
const { helpDjMode, helpDjModeAllowCommands } = require("./helpDjMode");

module.exports = {
  helpGeneralCommands: helpGeneralCommands,
  helpMusicCommands: helpMusicCommands,
  helpModCommands: helpModCommands,
  helpFunCommands: helpFunCommands,
  helpAlexaMode: helpAlexaMode,
  helpDjMode: helpDjMode,
  helpAlexaModeAllowCommands: helpAlexaModeAllowCommands,
  helpDjModeAllowCommands: helpDjModeAllowCommands,
};
