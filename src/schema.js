const mongoose = require("mongoose");

const GuildSchema = new mongoose.Schema({
  guild: {
    type: mongoose.SchemaTypes.String,
    require: true,
  },
  channelId: {
    type: mongoose.SchemaTypes.String,
    require: true,
  },
});

module.exports = mongoose.model("Guild", GuildSchema);
