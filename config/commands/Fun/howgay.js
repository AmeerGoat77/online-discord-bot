const Discord = require('discord.js')

module.exports = {
    name: "gayrate",
    description: "a howgay command",
    usage: "[prefix]howgay",

    async run (client, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
        .setTitle('Gay Machine')
        .setColor("RANDOM")
        .setDescription(`${member.username}  is `   + rng + "% Gay:rainbow:")

        message.channel.send(howgayembed);
    }  
}                       