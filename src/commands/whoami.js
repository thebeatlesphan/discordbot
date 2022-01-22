const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whoami')
		.setDescription('Replies with who are you!'),
	async execute(interaction) {
		await interaction.reply(`You are <@${interaction.user.id}>}`);
	},
};