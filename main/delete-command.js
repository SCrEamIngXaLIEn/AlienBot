const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const rest = new REST().setToken(token);

rest.delete(Routes.applicationGuildCommand(clientId, guildId, '1280224998455251016'))
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error);

/* // All Commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error); */

