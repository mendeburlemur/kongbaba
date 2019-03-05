const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Kullanıcı Bulunamadı!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Gerekli İzinlere Sahip Değilsin");
  let muterole = message.guild.roles.find(`name`, "susturulmuş");


  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "susturulmuş",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Lütfen Bir Zaman Belirtiniz !süreli-sustur @Kullanıcı 1d 1h 1m (d = gün / h = saat / m = dakika)");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> Adlı Kullanıcı, ${ms(ms(mutetime))} Süre Boyunca Susturuldu.`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Adlı Kullanıcının Susturulma Süresi Bitti.`);
  }, ms(mutetime));


}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sustur"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'süreli-sustur',
    description: 'tbc',
    usage: 'tbc'
  };