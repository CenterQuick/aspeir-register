const Discord = require('discord.js');
module.exports = member => {
  client.channels.cache.get("799569943921688577").send(`<@${member.id}> @Ψ Teyit Görevlisi`);
  const hgembed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Yardım`,client.user.avatarURL())
    .setColor("RED")
    .addField(`<@${member.id}> İsimli şahıs sunucuya Katıldı`)
    .addField(`Kayıt olmak için @Ψ Teyit Görevlisi ile iletişime geçebilirsin.`)
    .addField(`Tagımızı alarak bize destek olabilirsin ; Ψ`)
    .setFooter(`${message.author.username}`, message.author.avatarURL)
    .setTimestamp();
  client.channels.cache.get("799569943921688577").send(hgembed);
};
