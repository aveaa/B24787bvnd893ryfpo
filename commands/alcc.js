const Discord = require("discord.js");
const config = require("../config.json");
const roles = config.rTD;

module.exports.run = async (bot, message, args) => {
    const modRole = message.guild.roles.find('name', "ZONTIk") 
    function cRole() {
        let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        let colors = ["#a6a6a6","#ffcccc","#ff66ff","#cc99ff","#ccffff","#ccff99","#ff9933","#595959","#66ff33","#cc6699","#003366","#336699","#002266","#993333","#999966","#333399","#660066","#336600","#0000e6","#4d1300","#ffe6cc","#ffdab3","#ffce99","#ffb566","#ffa94d","#ff9c33","#ff901a","#ff8400","#e67700","#b35c00","#994f00","#804200","#992600","#602040","#250e1a","#999900","#339966","#133926","#0d261a","#67cb9b","#54c48e","#267326","#66cc66","#808000","#ff9900","#99003d","#ff4d94","#6b00b3","#2e004d","#00cc00","#0080ff","#3d3d5c","#7575a3","#ff0000","#cc0000","#ff4d4d","#19334d","#29a3a3","#5bd7d7","#db4dff","#cccc00","#802000","#cc3300","#993300","#00ff55","#1aff1a","#666600","#e600e6","#b300b3","#ff80ff","#990099","#595959","#0000cc","#3333ff","#0066cc","#c653c6","#9494b8","#0033cc","#993366","#705c66","#4d3399","#993333","#994d33","#998033","#809933","#33994d","#333399","#803399","#ff9933","#33ff99","#ff3333","#33ff33","#3366ff","#6633ff","#33ccff","#1a8cff","#ffc61a"]
        let colres = Math.floor((Math.random() * colors.length)); 
        roles.forEach((role) => {
            let aRole = message.guild.roles.find('name', "Admin")
            let tRole = message.guild.roles.find("name", "Elite");
            let dRole = message.guild.roles.find("name", "Посетитель");
            let rdRole = message.guild.roles.find("name", "Гость");
            let cArole = ["#080707", "#080707", "#080707", "#310125", "#191f20"];
            let ctRole = ["#000066","#000000","#333399","#4040bf"];
            let cdRole = ["#95291d","#d53b2a","#d94f3f","#aa2f22"];
            let crdRole = ["#217961","#1b6451","#268c71","#31b491"];
            let cctRoler = Math.floor((Math.random() * ctRole.length)); 
            let ccdRoler = Math.floor((Math.random() * cdRole.length)); 
            let ccrdRoler = Math.floor((Math.random() * crdRole.length)); 
            let cAroler = Math.floor((Math.random() * cArole.length))
            aRole.edit({color: cArole[cAroler]})
          .then(tRole.edit({color: ctRole[cctRoler]}))
          .then(dRole.edit({color: cdRole[ccdRoler]}))
          .then(rdRole.edit({color: crdRole[ccrdRoler]}))
          .catch(e => {
            return message.channel.sendMessage("Произошла ошибка,зайдите в консоль.");
          });
        });
      }
      let int = args[0]
   var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#ff0066")
  .setTitle("Функция смены цветов для нескольких ролей")
  .addField("Частота смены цвета", `${int}`)
  .setTimestamp()
  .setFooter("RR Function handler")
  message.channel.send(embed)
    if(message.member.roles.has(modRole.id)) {
        let intr = args[0]
    setInterval(() => { cRole(); }, intr);
     
  } else {
    message.reply(`у Вас недостаточно прав.`);
  }
}
    module.exports.help = {
        name: "rall"
    }
