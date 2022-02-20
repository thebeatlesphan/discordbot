const { SlashCommandBuilder } = require("@discordjs/builders");

// mod.cjs
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let summary = {};
async function getWeatherData() {
  let url = "https://weather-react-api.now.sh/forecast/coords/33,-84";
  let response = await fetch(url);
  let data = await response.json();
  summary = {
    summary: data.currently.summary,
  };
  return;
}
getWeatherData();
module.exports = {
  data: new SlashCommandBuilder()
    .setName("atl")
    .setDescription("Replies with weather summary over Atl!"),
  async execute(interaction) {
    await interaction.reply(
      `Weather forecast over atl is: "${summary["summary"]}"`
    );
  },
};
