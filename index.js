const Discord = require('discord.js');
const client = new Discord.Client();
const roller = require('./roller.js');

var cmd = [
   (new RegExp("/roll")),
   (new RegExp("/help")),
   (new RegExp('/adv')),
   (new RegExp('/dis')),
   (new RegExp('/dam'))
]

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
   if(msg.author.bot){return}

   // /roll - Roll a specified die
   if(cmd[0].test(msg.content)) {
     msg.channel.send(msg.author.toString() + ' ' +roller.rollDie(msg.content))
   }

   // /help - display help
   if(cmd[1].test(msg.content)){
      msg.channel.send(roller.help())
   }

   // /adv - roll a specified die with advantage
   if(cmd[2].test(msg.content)){
      msg.channel.send(msg.author.toString() + ' ' + roller.rollAdv(msg.content))
   }

   // /dis - roll a specified die with disadvantage
   if(cmd[3].test(msg.content)){
      msg.channel.send(msg.author.toString() + ' ' + roller.rollDis(msg.content))
   }

   // /dam - roll specified die a number of times for damage.
   if(cmd[4].test(msg.content)){
      msg.channel.send(msg.author.toString() + ' ' + roller.rollDam(msg.content))
   }
})
client.login('NTYzMDY2MzkxNjg3NzI1MDY4.XKT6jQ.JzvTmHmdzIGMV80TNGBFZyKy2uQ')
