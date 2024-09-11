const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
    cooldown: 60, 
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption( option =>
            option.setName('input')
                .setDescription('The input to echo back.')
                .setMaxLength(2_000)
                .setRequired(true))
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to eco into')
                .addChannelTypes(ChannelType.GuildText)),
    async execute(interaction) {
        const input = interaction.options.getString('input');
        const channel = interaction.options.getChannel('channel') || interaction.channel;

        await channel.send(input);

        await interaction.reply({ content: `Message sent to ${channel.name}`, ephemeral: true });
    },
};