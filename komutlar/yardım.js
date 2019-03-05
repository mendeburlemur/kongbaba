const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Harmony Yardım')
.setTimestamp()
.addField('» Eğlence Komutları', '!eğlence')
.addField('» Moderasyon Komutları', '!moderasyon')
.addField('» Kullanıcı Komutları', '!kullanıcı')
.addField('» Şarkı Komutları', '!şarkı')
.addField('» Nsfw Komutları', '!nsfw')
.setFooter('© 2019 Harmony', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};