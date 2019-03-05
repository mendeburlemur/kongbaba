const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "Bot Tekrardan Aktif",
		"Eğlence is Death",
		"Bot 7/24 Aktif",
		"!destek-sunucusu | Destek Sunucusu",
		"!sunucu-kur | Hızlı Sunucu Kurulum",
		"!sunucu-panel | Sunucuya Özel Panel",
		"!yardım | Yardım Al",     
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/harmonybot");
        }, 3000);
}