const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { //playing
    client.user.setGame(`♯ ~ Étoiles . Shop .`,'https://www.twitch.tv/faresgameryt');
    client.user.setStatus('Online')
});


client.login("NDgzNjg2MTcyMjIxMjQzNDAy.DqUUwg.x5oWC4P-4UMdnr4XSrz2C90HJMY");