const { SlashCommandBuilder } = require("@discordjs/builders");

// mod.cjs
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function chuck() {
  let url = "https://api.chucknorris.io/jokes/random";
  let response = await fetch(url);
  let data = await response.json();
  let joke = data.value;
  return joke;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("chuck")
    .setDescription("Replies with a 'Chuck Norris' joke"),
  async execute(interaction) {
    await interaction.deferReply();
    const joke = await chuck();
    await interaction.editReply(joke);
  },
};