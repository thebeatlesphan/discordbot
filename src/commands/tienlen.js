const { SlashCommandBuilder } = require('@discordjs/builders');

const deck = []

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tienlen')
		.setDescription('Replies with a game of Tien Len!'),
	async execute(interaction) {
		await interaction.reply('Lets start a game of Tien Len!');
	},
};