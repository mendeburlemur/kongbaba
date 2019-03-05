//http://turkmedya.radyotvonline.com/turkmedya/alemfm.stream/playlist.m3u8

const Discord = require("discord.js");
const bot = new Discord.Client();
const ffmpeg = require("ffmpeg");
const ayarlar = "./ayarlar.json";
const prefix = ayarlar.prefix;



var fenomen = "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio";
var metro   = "http://17773.live.streamtheworld.com/METRO_FM_SC";
var number1 = "http://nr1digitalsc.radyotvonline.com/stream/264/";
var power   = "http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio";
var alemfm  = "http://turkmedya.radyotvonline.com/turkmedya/alemfm.stream/playlist.m3u8";
var joyturk = "http://17733.live.streamtheworld.com/JOY_TURK_SC";
var slowtr  = "https://radyo.dogannet.tv/slowturk";
var efkar = "https://17753.live.streamtheworld.com/EFKAR.mp3";
var ntv = "http://ntvrdsc.radyotvonline.com";
var trt = "https://www.canliradyodinle.fm/?p=784";





exports.run = function (bot, message, args) {
		let mesaj = args.slice(0).join(' ');
if(!mesaj) {
	message.reply("Lütfen Herhangi Bir Radyo Numarası Seçiniz.\n\n__Radyo Kanalları__\n\n**[1] - JoyTürk**\n**[2] - Alem FM**\n**[3] - Fenomen FM**\n**[4] - Metro**\n**[5] - Number1**\n**[6] - PowerTürk**\n**[7] - SlowTürk**\n**[8] - Efkar**\n**[9] - NTV Radyo**\n**[10] - TRT Radyo 1**\n\n\nÖrnek = **!radyo**\nVe Ardından Sayı\nÖrnek = **!radyo 2**\nRadyo Harmony Blocker")
}		
    if (!message.member.voiceChannel) return message.reply("Radyo Komutunu Kullanabilmek İçin Lütfen Sesli Bir Kanala Giriş Yapınız.");

		    if (mesaj === "1") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(joyturk);
            return message.channel.send("**JoyTürk** FM Oynatılıyor.");
        }));
        return;
    };
	
	    if (mesaj === "2") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(alemfm);
            return message.channel.send("**Alem FM** FM Oynatılıyor.");
        }));
        return;
    };
  
  if (mesaj === "10") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(alemfm);
            return message.channel.send("**TRT Radyo 1** FM Oynatılıyor.");
        }));
        return;
    };
    // 2 Fenomen
    if (mesaj === "3") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(fenomen);
            return message.channel.send("**Fenomen** FM Oynatılıyor.");
        }));
        return;
    };
    // 6 Metro
    if(mesaj === "4") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(metro);
            return message.channel.send("**Metro** FM Oynatılıyor.");
        }));
        return;
    };
    // 8 Number1
    if(mesaj === "5") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(number1);
            return message.channel.send("**Number1** FM Oynatılıyor.");
        }));
        return;
    };    
  	    if (mesaj === "7") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(slowtr);
            return message.channel.send("**SlowTürk** FM Oynatılıyor.");
        }));
        return;
    };
    	    if (mesaj === "8") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(efkar);
            return message.channel.send("**Efkar** FM Oynatılıyor.");
        }));
        return;
    };
      if(mesaj === "9") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(metro);
            return message.channel.send("**NTV** FM Oynatılıyor.");
        }));
        return;
    };
  
    // 14
    if(mesaj === "6") {
        if (message.member.voiceChannel.join()
        .then(connection => {
            const dispatcher = connection.playStream(power);
            return message.channel.send("**PowerTürk** FM Oynatılıyor.");
        }));
        return;
    } 
	
	if (mesaj === "bitir") {
							const voiceChannel = message.member.voiceChannel;

			voiceChannel.leave()
	}
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "radyo",
    description: "Belirtilen Radyo istasyonunu bulunduğu kanalda paylaşır.",
    usage: "radyo <name>"
};