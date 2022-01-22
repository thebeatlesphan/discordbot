const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('valheim')
		.setDescription('Replies with Valheim!'),
	async execute(interaction) {
		await interaction.reply('```Valheim Server: 45.137.244.57:28400```\n__***Please consult the council for the password***__');
	},
};