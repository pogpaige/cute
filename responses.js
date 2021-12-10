const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
  reactToMessage: function(message, content) {{
    if (message.author.id == '246594063896150016' || message.author.bot) { return };
    {
    if (message.content.includes("!!")) {
        message.react("‼️"); 
    }}{
    if (message.content.includes("🇨🇳")) {
        message.react("🇨🇳"); 
    }}{
    if (message.content.includes("fuck thing1")) {
        message.react('882827667550896160')
        .catch(console.error); 
    }}
    {
    if (message.content.includes("🇵🇱")) {
        message.react("🇵🇱"); 
    }}{
    if (message.content.includes("polish") || message.content.includes("poland")) {
        message.react("🇵🇱"); 
    }}{
      if (message.content.includes("Polish") || message.content.includes("Poland")) {
          message.react("🇵🇱"); 
    }}{
      if (message.content.startsWith("bruh")) {
          message.react("😤"); 
      }}
  }
},
respondToMessage: function(message, content) { 
  var yea = Math.random() * 100;
  if (message.author.id == '246594063896150016' || message.author.bot) { return };
  
  if (message.content.startsWith("!coinflip")) {
    if (yea > 50) {
      message.channel.send("heads"); }
    else 
      message.channel.send("tails");
  }
  if (message.content.includes("hiii")) {
    message.channel.send("hi :3");
  }{
    if (message.content.includes("absolute bullshit")) {
      message.channel.send("https://media.discordapp.net/attachments/295109703103545345/678483847285047347/unknown.png");
  }}{
    if (message.content.includes("accuse")) {
      message.channel.send("https://catgirl.top/i/ed5neckf.png");
  }}{
    if (message.content.includes("AAAAA") || message.content.includes("aaaaa")) {
      message.channel.send("https://pog.gay/i/afla91fe.mp4");
  }}{
    if (message.content.startsWith("actually ")) {
      message.channel.send("https://pog.gay/i/283r2xm5.png");
  }}{
    if (message.content.includes("argue")) {
      message.channel.send("https://catgirl.top/i/uc9laxl2.png");
  }}{
    if (message.content.includes("autism")) {
      if (yea < 21) { // 20%
        message.channel.send("https://cdn.discordapp.com/attachments/782326236340682803/905530408979030106/kmbfR5BaXpMu8kjL.mp4") }
      else // 80%
        return;
  }}{
    if (message.content.includes("autistic")) {
      if (yea < 36) { // 35%
        message.channel.send("https://pog.gay/i/5zwe4y15.png") }
      else if (yea < 46) // 10%
        message.channel.send("https://cdn.discordapp.com/attachments/782326236340682803/905530408979030106/kmbfR5BaXpMu8kjL.mp4")
      else // 55%
        return;
  }}{
    if (message.content.includes("grocery")) {
      message.channel.send("https://pog.gay/i/4b6xnerz.png");
  }}{
    if (message.content.includes("argument") || message.content.includes("arguing")) {
      message.channel.send("https://catgirl.top/i/uc9laxl2.png");
  }}{
    if (message.content.includes("assumption")) {
      message.channel.send("https://catgirl.top/i/fjzxxm16.png");
  }}{
    if (message.content.includes("beanguy")) {
      message.channel.send("https://cdn.discordapp.com/attachments/634047352591745044/776058891925848074/kz_beanguy_v2_in_00_58.74_by_Jak.webm");
  }}{
    if (message.content.includes("bible")) {
      message.channel.send("https://catgirl.top/i/umdq0jj3.png");
  }}{
    if (message.content.includes("bladee") || message.content.includes("BLADEE")) {
      if (yea < 11) // 10%   
        message.channel.send("love em") 
      else if (yea < 16) // 5%
        message.channel.send("https://cdn.discordapp.com/attachments/780872292263657475/906343310900199485/bladee.png")
      else if (yea < 36) // 20%
        message.channel.send("♻️✨♻️✨♻️✨♻️✨♻️✨")
      else if (yea < 41) // 5%
        message.channel.send("I Want To Have Sex With Bladee ‼️👊")
      else if (yea < 56) // 15%
        message.channel.send("drain gang man drain ceo shit man")
      else if (yea < 71) // 15%
        message.channel.send("drain high school scholar man first in the class man")
      else if (yea < 76) // 5%
        message.channel.send("https://cdn.discordapp.com/attachments/782326236340682803/905531290596573224/unknown-16.png")
      else if (yea < 86) // 10%
        message.channel.send("bladee")
      else if (yea < 91) // 5%
        message.channel.send("https://media.discordapp.net/attachments/882739815752290375/905937693291204689/IMG_5508.png")
      else if (yea < 96) // 5%
        message.channel.send("MAN IF U GIVE UP THATS WHEN U FUCKED UP GET UR FUCKIN RACKS UP 📈")
      else if (yea < 101) // 5%
        message.channel.send("https://c.tenor.com/FessOPQPe20AAAAM/bladee-chaewon.gif")
  }}{
    if (message.content.includes("breakaway")) {
      message.channel.send("https://catgirl.top/i/uwa2rln8.png");
  }}{
    if (message.content.includes("boob") || message.content.includes("Boob")) {
      if (yea < 34) // 33%
        message.channel.send("https://pog.gay/i/nzp4yu9i.png")
      else if (yea < 67) // 33%
        message.channel.send("https://pog.gay/i/x1d46g5z.png")
      else if (yea < 101) // 33%
        message.channel.send("https://pog.gay/i/t9mdqm9r.png");
  }}{
    if (message.content.includes("crazy")) {
      if (yea < 41) // 40%
        message.channel.send("https://media.discordapp.net/attachments/462217571081650186/906938146682437632/u457xhebz6y71.jpg")
      else
        return;
  }}{
    if (message.content.includes("caja")) {
      message.channel.send("https://cdn.discordapp.com/attachments/634047352591745044/776061041473749022/kz_by_caja_and_persona_in_00_22.71_by_Jak.webm");
  }}{
    if (message.content.startsWith("cat")) {
      message.channel.send("cat");
  }}{
    if (message.content.includes("cum")) {
      message.channel.send("Fortnite");
  }}{
    if (message.content.includes("confederate") || message.content.includes("pride")) {
      message.channel.send("https://pog.gay/i/alcyzfer.png");
  }}{
    if (message.content.includes("cock") || message.content.includes("COCK")) {
      message.channel.send("https://pog.gay/i/9ez9s7f7.png");
  }}{
    if (message.content.includes("balls") || message.content.includes("BALLS") || message.content.includes("Balls")) {
      if (yea <51) // 50%
        message.channel.send("https://pog.gay/i/9ez9s7f7.png")
      if (yea < 101) // 50%
        message.channel.send("https://pog.gay/i/rml7eg3g.jpg")
  }}{
    if (message.content.includes("ballin")) {
      if (yea < 34) // 50%
        message.channel.send("https://pog.gay/i/s4n4oycz.png")
      else if (yea < 68) // 50%
        message.channel.send("https://pog.gay/i/fx1f1stc.png")
      else if (yea < 101)
        message.channel.send("https://pog.gay/i/jqefuqsl.mp4");
  }}{
    if (message.content.includes("china") || message.content.includes("chinese") || message.content.includes("CHINA") | message.content.includes("China") || message.content.includes("Chinese") || message.content.includes("CHINESE")) {
      if (yea < 86) // 85%
        message.channel.send("🇨🇳 📈\nfuck aspire lol")
      else if (yea < 91) // 5%
        message.channel.send("此视频为CSGOKZ的基础课程，联合斗鱼蛇门美杜莎与CNC共同制作。第一课一共十个小节，完全学习后可跳过T1、T2难度的KZ地图，还有简单的T3地图。课程目录：第一节、松开W原理：与别的FPS游戏不同，你在CS中，只要你有地面速度的基础下，一但跳起来，它会自动向你屏幕面朝的方向往前移动。其中W不会对你在空中的移动造成任何的影响。如果你在CS游戏中按着W起跳的情况下，你想要转向是非常困难的，所以在起跳之后，你一定要快速地松开你的W按键，后续的转向才能轻松完成。第二节、空中转向原理：与别的FPS游戏不同，别的FPS游戏在空中按左和右是无法转向的，但是在CS里，你在空中松开W之后，你按左键（A）的同时鼠标往左转，就会往左边转向，你按右键（D）的同时鼠标往右转，就会往右边转向。第三节、空中转向的运用（旋转跳）原理：在理解了空中转向之后，你会额外得到一点空中的加速度，你就可以使用空中转向在实战当中进行一些点位的移动，也就是大家熟知的“旋转跳”，在起跳之后调整自己空中的方向，实现直线跳跃无法做到的操作，绕过障碍物，从而到达你要去的点位")
      else if (yea < 101) // 10% bing chilling
        message.channel.send("https://pog.gay/i/8h7sm503.mp4");
  }}{
    if (message.content.includes("daniel")) {
      message.channel.send("https://media.discordapp.net/attachments/780872292263657475/849525149668474920/unknown.png");
  }}{
    if (message.content.includes("deadlift")) {
      message.channel.send("https://catgirl.top/i/0zlopti2.png");
  }}{
    if (message.content.includes("disadvantage")) {
      message.channel.send("https://catgirl.top/i/hvv5tw3t.png");
  }}{
    if (message.content.includes("dick")) {
      if (yea < 41) // 40%
      message.channel.send("https://media.discordapp.net/attachments/696314290239700992/696636441458900992/Discord_EkoydxSNIE.png")
      else
        return;
  }}{
    if (message.content.includes("eliminate")) {
      message.channel.send("https://catgirl.top/i/vao4extv.png");
  }}{
    if (message.content.includes("ecco") || message.content.includes("ecco2k") || message.content.includes("Ecco2k")) {
      if (yea < 41) // 40%
        message.channel.send("https://tenor.com/view/ecco2k-bladee-drain-gang-obedient-blingee-gif-18120409")
      else if (yea < 51) // 10%
        message.channel.send("[Verse 2: Ecco2k]\nEvery time I close my eyes I stop existing\nEvery now and again I can tell the difference\nWoke up falling I'm still falling off of buildings\nWant a new addiction want to fall victim\nSomething you might crush my heart but I'ma risk it\nAnd I'm still sinking need a curse lifted\nBlacklisted at all the clubs but I can fix this\nThink I need stitches pray to three sixes\nI wanna see heads roll execute past life\nHundred white birds ninety-nine fall out the sky\nFast life race against time it will outrun you\nRains return to the earth sunlight to the underworld\nMaybe in another life we could be lovers\nEver since we met these thoughts keep getting worse\nIron will ironed shirt now I want a Fendi purse\nI don't talk with empty words what is any of it worth?\nEvery time I close my eyes I go to prison\nEvery now and again I can feel the distance\nWoke up running I'm still running through the system\nWant a new sickness want to fall victim\nSomewhere someone broke your heart but I'ma fix it\nAnd I'm still wishing for that first kiss\nGet blacklisted at all the clubs in Seven Sisters\nIndustry children play with three sixes")
      else
        return;
  }}{
    if (message.content.includes("femboy")) {
      message.channel.send("love em");
  }}{
    if (message.content.includes("fries")) {
      message.channel.send("https://pog.gay/i/tplxmks1.mp4");
  }}{
    if (message.content.includes("fucker cringe")) {
      message.channel.send("https://catgirl.top/i/8el4yyrx.png");
  }}{
    if (message.content.includes("gemischte")) {
      message.channel.send("https://catgirl.top/i/ntxx77z1.png");
  }}{
    if (message.content.includes("gunna") || message.content.includes("Gunna") || message.content.includes("GUNNA")) {
      message.channel.send("https://media.discordapp.net/attachments/762855442778685461/902173321616035930/unknown.png");
  }}{
    if (message.content.includes("hater") || message.content.includes("bitch ass") || message.content.includes("whats up")) {
      message.channel.send("ayo man its ya boy thaiboy man man fuck you man you a bitch ass man fuck all the hater shit man man i be turning up bitch whats up man whats up bitch :100:");
  }}{
    if (message.content.includes("genius")) {
      if (yea < 51) // 50%
      message.channel.send("https://i.imgur.com/VldNe2h.png")
      else
        return;
  }}{
    if (message.content.includes("inspiration")) {
      message.channel.send("https://cdn.discordapp.com/attachments/326941062893535242/655739592946876435/unknown.png");
  }}{
    if (message.content.includes("insult")) {
      message.channel.send("i didn’t insult you to help me get unbanned i do not care about the server, i insulted you because you’re too oblivious to realize that you’re a piece of shit human being, and if someone didn’t tell you, you would never even try to better yourself, so maybe now the people you meet in the future will be spared from dealing with your enormous ego and assholish personality");
  }}{
    if (message.content.includes("jew")) {
      if (yea < 21) // 20%
      message.channel.send("https://cdn.discordapp.com/attachments/326941062893535242/735658296534368296/image0-4.png")
      else
        return;
  }}{
    if (message.content.includes("kebab")) {
      message.channel.send("REMOVE KEBAB remove kebab you are worst turk. you are the turk idiot you are the turk smell. return to croatioa. to our croatia cousins you may come our contry. you may live in the zoo….ahahahaha ,bosnia we will never forgeve you. cetnik rascal FUck but fuck asshole turk stink bosnia sqhipere shqipare..turk genocide best day of my life. take a bath of dead turk..ahahahahahBOSNIA WE WILL GET YOU!! do not forget ww2 .albiania we kill the king , albania return to your precious mongolia….hahahahaha idiot turk and bosnian smell so bad..wow i can smell it. REMOVE KEBAB FROM THE PREMISES. you will get caught. russia+usa+croatia+slovak=kill bosnia…you will ww2/ tupac alive in serbia, tupac making album of serbia . fast rap tupac serbia. we are rich and have gold now hahahaha ha because of tupac… you are ppoor stink turk… you live in a hovel hahahaha, you live in a yurt tupac alive numbr one #1 in serbia ….fuck the croatia ,..FUCKk ashol turks no good i spit﻿ in the mouth eye of ur flag and contry. 2pac aliv and real strong wizard kill all the turk farm aminal with rap magic now we the serba rule .ape of the zoo presidant georg bush fukc the great satan and lay egg this egg hatch and bosnia wa;s born. stupid baby form the eggn give bak our clay we will crush u lik a skull of pig. serbia greattst countrey");
  }}{
    if (message.content.includes("ketamine")) {
      if (yea < 21) // 20%
      message.channel.send("https://www.youtube.com/watch?v=O3skZlcsiSY")
      else
        return;
  }}{
    if (message.content.includes("kanye")) {
      if (yea < 16) // 15%
        message.channel.send("https://pog.gay/i/s45m5owy.png")
      else if (yea < 31) // 15%
        message.channel.send("https://i.gifer.com/25nA.gif")
      else if (yea < 46) // 15%
        message.channel.send("https://tenor.com/view/headbob-kanye-headbang-offthegrid-dababy-gif-22861259")
      else if (yea < 61) // 15%
        message.channel.send("https://pog.gay/i/ph6mewxt.jpg")
      else if (yea < 76) // 15%
        message.channel.send("https://pog.gay/i/qj9riss1.jpg")
      else if (yea < 91) // 15%
        message.channel.send("https://pog.gay/i/nn5hm4ix.jpg")
      else if (yea < 101) // 10%
        message.channel.send("https://pog.gay/i/nwuc1pgt.png")
  }}{
    if (message.content.includes("lawnmower")) {
      message.channel.send("https://www.youtube.com/watch?v=9Yrt9qkBQ2Q");
  }}{
    if (message.content.includes("lesser")) {
      message.channel.send("https://pog.gay/i/s728sivq.png");
  }}{
    if (message.content.includes("lets go")) {
      message.channel.send("https://tenor.com/bexIZ.gif");
  }}{
    if (message.content.includes("liberal")) {
      message.channel.send("https://i.redd.it/pf9dkh5u1b371.jpg");
  }}{
    if (message.content.includes("lifechanging") || message.content.includes("life changing")) {
      message.channel.send("'Outstanding' Gamespot\n'Life Changing' IMDB\n'A Little Something For Everyone' IGN");
  }}{
    if (message.content.includes("ligma")) {
      message.channel.send("https://i.redd.it/gz0yso71gtn51.jpg");
  }}{
    if (message.content.includes("llnuke")) {
      message.channel.send("https://cdn.discordapp.com/attachments/295109703103545345/797769157927501834/unknown.png");
  }}{
    if (message.content.includes("mp3")) {
      message.channel.send("https://pog.gay/i/8yavyc2w.png");
  }}{
    if (message.content.includes("mystery")) {
      message.channel.send("https://cdn.discordapp.com/attachments/326941062893535242/655738130044813312/unknown.png");
  }}{
    if (message.content.includes("nekomimi")) {
      message.channel.send("reddit.com/r/nekomimi");
  }}{
    if (message.content.includes("WOOO")) {
      message.channel.send("https://media.discordapp.net/attachments/696314290239700992/856606962074910750/unknown.png");
  }}{
    if (message.content.includes("weed")) {
      if (yea < 51)
        message.channel.send("https://pog.gay/i/q86tabvr.mp4")
      else if (yea < 101)
        message.channel.send("https://pog.gay/i/pze5w3cd.mp4");
  }}{
    if (message.content.includes("racist") || message.content.includes("RACIST")) {
      message.channel.send("thing1 pedo racist transphobe homophobe xenophobe furry queer");
  }}{
    if (message.content.includes("stfu")) {
      message.channel.send("https://www.youtube.com/watch?v=x55HD7PhO-s");
  }}{
    if (message.content.includes("prison")) {
      message.channel.send("https://pog.gay/i/kp0s4000.png");
  }}{
    if (message.content.includes("retarded")) {
      if (yea < 51)
        message.channel.send("https://i.pog.gay/i/zay1jcxn.png");
      else
        return;
  }}{
    if (message.content.includes("!idiot")) {
      message.channel.send("Persona");
    }}   
  }
}