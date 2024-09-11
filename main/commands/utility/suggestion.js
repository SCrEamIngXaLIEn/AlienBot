const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggestion')
        .setDescription('Make a suggestion.')
        .addStringOption(option =>
            option.setName('suggestion')
                .setDescription('Your suggestion.')
                .setMaxLength(2_000)
                .setRequired(true)
        ),
    async execute(interaction) {
        const suggestion = interaction.options.getString('suggestion');
        const user = interaction.user;

        const suggestionEmbed = new EmbedBuilder()
            .setColor(0x5b79a9)
            .setTitle('New suggestion!')
            .setDescription(suggestion)
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            .setFooter({ text: `Suggested by ${user.tag}` })
            .setTimestamp()

        const message = await interaction.reply({ embeds: [suggestionEmbed], fetchReply: true });

        await message.react('✅');
        await message.react('❌');
    }
};