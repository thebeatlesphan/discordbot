const fs = require("fs");
const { Client, Collection, Intents, Message } = require("discord.js");
const { prefix, token } = require("../config.json");
const deck = require("./deck");
const { SlashCommandBuilder } = require("@discordjs/builders");

// Create a new Client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//client.config = config;

client.commands = new Collection();

// parse through 'commands' directory
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

// parse through 'events' directory
const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// Command handling with arguments
client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('pong');
  }
});


// Login to Discord with your client's token
client.login(token);
