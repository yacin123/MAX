const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { //playing
    client.user.setGame(`قريبا احلى سيرفر قادم ✨🎻`,'https://www.twitch.tv/faresgameryt');
    client.user.setStatus('Online')
});


client.login("NTAwMDExNTQyNjc1MzI0OTM5.DrkRRA.Z0t2WlUO2VbVdKGehlCoXAuLeAI");
