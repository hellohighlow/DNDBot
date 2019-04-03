module.exports = {

   // /roll d20
 	rollDie:function(msg){
      var die = msg.split('d')
      return 'rolled a ' + getRand(die[1])
   },

   // /help
   help:function(){
      return 'You can: \n'
      +'Roll a die: /roll d{number > 0}\n'
      +'Roll a die with advantage: /adv d{number > 0}\n'
      +'Roll a die with disadvantage: /dis d{number > 0}\n'
      +'Roll damage: /dam {number of dice > 0} d{number >0}\n'
      +'Get help: /help'
   },

   // /adv d20
   rollAdv:function(msg){
      var die = msg.split('d')
      var res1 = getRand(die[2])
      var res2 = getRand(die[2])
      var ret = 'rolled ' + res1 + ' and ' + res2 + '.\nHighest roll is '
      if(res1 > res2){
         return ret + res1
      }
      return ret + res2
   },

   // /dis d20
   rollDis:function(msg){
      var die = msg.split('d')
      var res1 = getRand(die[2])
      var res2 = getRand(die[2])
      var ret = 'rolled ' + res1 + ' and ' + res2 + '.\nLowest roll is '
      if(res1 < res2){
         return ret + res1
      }
      return ret + res2
   },

   // /dam 3 d8
   rollDam:function(msg){
      var num = msg.split(' ')
      num = num[1]
      var die = msg.split('d')
      die = die[2]
      var outcome = 0
      var roll = 0
      var ret = 'rolled '

      for(;num > 0; num--){
         roll = getRand(die)
         if(num === 1){
            ret = ret + roll
         }
         else{
           ret = ret + roll + ', '
         }
         outcome += roll
      }
      ret = ret + '\nDealt ' + outcome
      return ret
   }
}


function getRand(max){
   return 1 + Math.floor(Math.random()*max);
}
