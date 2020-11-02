const { Discord , MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send('Pinging...')
    const Embed = new MessageEmbed()
    .setTitle('Pong!')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms\n API Ping is ${Math.round(bot.ws.ping)}`)
    .setColor('BLACK')
    msg.edit(Embed)
    msg.edit("\u200b")
}

module.exports.config = {
    name: "ping",
    description: "Show you your ping",
    usage: "=ping",
    accessableby: "",
    aliases: ["p"]
    }