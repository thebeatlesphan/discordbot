const { SlashCommandBuilder } = require("@discordjs/builders");

// mod.cjs
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let summary = {};
async function getWeatherData(a, b) {
  let url = `https://weather-react-api.now.sh/forecast/coords/${a},${b}`;
  let response = await fetch(url);
  let data = await response.json();
  summary = {
    summary: data.currently.summary,
  };
  return summary["summary"];
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("weather")
    .setDescription("Replies with weather summary over X n X coordinates!"),
  async execute(interaction) {
    let outA, outB;

    await interaction.reply("two numbers").then(() => {
      const filter = (m) => interaction.user.id === m.author.id;

      interaction.channel
        .awaitMessages({
          filter,
          time: 60000,
          max: 1,
          errors: ["time"],
        })
        .then((messages) => {
          let numberRegex = /\D/g;
          let coords = messages.first().content.split(" ");

          [a, b] = coords;
          outA = a;
          outB = b
          interaction.followUp(a + " " + b);
          interaction.editReply("nope");

        })
        .catch(() => {
          interaction.followUp("no input found!");
        });
    });


    const weather = await getWeatherData(0, 0);
    await interaction.followUp(weather);
  },
};
