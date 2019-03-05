const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Harmony Şarkı Komutları')
.setTimestamp()
.addField('» Şarkıyı Oynat', '!oynat')
.addField('» Şarkıyı Geç', '!geç')
.addField('» Şarkıyı Durdur', '!durdur')
.addField('» Şarkıyı Duraklat', '!duraklat')
.addField('» Şarkıyı Devam Ettir.', '!devam')
.addField('» Şarkı Ses Ayarla', '!ses <Seviye>')
.addField('» Şarkı Kuyruğu', '!sıra')
.addField('» Çalan Şarkı', '!çalan')

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
  name: 'şarkı',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};