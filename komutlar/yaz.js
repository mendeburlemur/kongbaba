const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Lütfen Yazdırılacak Mesajı Giriniz!');
  message.delete();
			const embed = new Discord.RichEmbed()
.setTitle("Bota Yazdırılan Mesaj")				
.setDescription(`${mesaj}`)
				.setColor("RED")
				.setFooter(`${message.author.tag} Tarafından Kullanıldı!`, message.author.avatarURL)
			message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: '[Admin Komutu]',
  usage: 'yaz-bot [yazdırmak istediğiniz şey]'
};