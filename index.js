const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('mohammad fake Online Shod!');
});

client.on("ready", () => {
    function AliveVoice() {
        const targetguild = client.guilds.cache.get("716511276242829324")
        const voiceChannels = targetguild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;

        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        client.user.setActivity(`🔊 Total Mic | ${count}`, { type: "LISTENING" })
    }; setInterval(AliveVoice, 3000)
});

client.login('');
