const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Harmony Moderasyon Komutları')
.setTimestamp()
.addField('» Otorol Sistemi', '!otorol @Rol #Kanal')
.addField('» Sayaç Sistemi', '!sayaç <Sayı> #Kanal')
.addField('» Ayarlanabilir Giriş-Çıkış Sistemi', '!giriş-çıkış-ayarla #Kanal')
.addField('» Ayarlanabilir SA-AS Sistemi', '!sa-as-ayarla <aç/kapat>')
.addField('» Link Engelleme Sistemi', '!link-engel <aç/kapat>')
.addField('» Küfür Engelleme Sistemi', '!küfür-engel <aç/kapat>')
.addField('» Yazı Kanalı Açmak', '!yazı-kanalı-aç <İsim>')
.addField('» Ses Kanalı Açmak', '!ses-kanalı-aç <İsim>')
.addField('» Herkese Birden Rol Vermek', '!herkese-rol-ver @Rol')
.addField('» Herkesten Birden Rol Almak', '!herkesten-rol-al @Rol')
.addField('» Sohbet Temizleyici', '!temizle <1/99> ')
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};