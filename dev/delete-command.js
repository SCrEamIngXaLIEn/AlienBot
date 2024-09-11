const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const rest = new REST().setToken(token);

rest.delete(Routes.applicationGuildCommand(clientId, guildId, 1281602166254993523))
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error);