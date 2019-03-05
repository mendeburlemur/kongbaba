const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`Temizle` Adlı Komutu Özel Mesajlarda Kullanamazsın.');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('Kaç Mesaj Silmem Gerektiğini Belirtmedinelirtmedin.')
  if (mesajsayisi > 99) return message.channel.send('99 Adetden Fazla Mesaj Silemem!');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesajsayisi +' Adet Mesaj Sildim!')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
