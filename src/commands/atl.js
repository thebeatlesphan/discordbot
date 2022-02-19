const { SlashCommandBuilder } = require("@discordjs/builders");
const getweather = require("../weather");
module.exports = {

  data: new SlashCommandBuilder()
    .setName("atl")
    .setDescription("Replies with weather summary over Atl!"),
  async execute(interaction) {
    await interaction.reply(`Weather forecast over atl is: "${getweather}"`);
  },
};
