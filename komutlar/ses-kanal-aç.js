const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun İçin Gerekli İzinlere Sahip Değilsin.'); // Bunu Başkasıda Kullana Bilmesi İçin Kanalları Yönet Yetkisi Verin
    if (kanal.length < 1) return message.reply('Lütfen Oluşturulacak Kanalın Adını Yazınız.');
  message.delete();
  guild.createChannel(kanal, 'voice');
  message.channel.send("**Ses Kanalı Oluşturuldu!**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ses-kanalı-aç'],
  permLevel: 3
};

exports.help = {
  name: 'ses-kanal-aç',
  description: 'Bir ses kanalı açar',
  usage: 'ses-kanal-aç [açmak istediğiniz kanalın adı]'
};