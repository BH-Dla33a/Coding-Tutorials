const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+';
const { MessageEmbed } = require('discord.js');


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});





  

client.login('TOKEN_HERE')
