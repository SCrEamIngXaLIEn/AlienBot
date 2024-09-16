const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    cooldowm: 20,
    data: new SlashCommandBuilder()
        .setName('bug-report')
        .setDescription('Create a bug report')
        .addStringOption(option =>
            option.setName('mod')
                .setDescription('Name of the mod you are submitting a report for.')
                .setRequired(true)
                .addChoices(
                    { name: 'Socketed Weapons', value: 'weapons_mod' },
                    { name: 'Socketed Armor', value: 'armor_mod' },
                    { name: 'Socketed Mods', value: 'mobs_mod'},
                    { name: 'Rubies & Sapphires', value: 'rubies_sapphires'},
                )
        )
        .addStringOption(option =>
            option.setName('report')
                .setDescription('What is the bug you are experiencing?')
                .setMaxLength(1_975)
                .setRequired(true)
        ),
    async execute(interaction) {
        const mod = interaction.options.getString('mod');
        const report = interaction.options.getString('report');
        const user = interaction.user;

        const modNames = {
            'weapons_mod': 'Socketed Weapons',
            'armor_mod': 'Socketed Armor',
            'mobs_mod': 'Socketed Mods',
            'rubies_sapphires': 'Rubies & Sapphires',
        };

        const reportEmbed = new EmbedBuilder()
            .setColor(0x5b79a9)
            .setTitle('🐞__**Bug Report**__🐞')
            .setDescription(`**Mod**: ${modNames[mod]}\n**Report**: ${report}`)
            .setFooter({ text: `Reported by: ${user.username}` })
            .setTimestamp()

        await interaction.reply({ embeds: [reportEmbed], fetchReply: true });
    }
};