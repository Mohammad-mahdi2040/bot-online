const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('your-simlatour-bot-now-online!');
});

client.login('you-bot-token');
