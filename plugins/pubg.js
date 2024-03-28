/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：1．3. 1                                                   // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo
   * @infoription : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.3.1 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
   * plugin date : 3/28/2023
**/
let Owner = "Suhail";


/*
cmd({
   pattern :"pubg",
   desc: "creates logo for given text",
   category: "pubg",
   use:"< text >",
   filename: __filename,
}
 */

let {  smd, textToLogoGenerator, prefix } = require(lib_dir);
let pubg = { type: "pubg",info: "create pubg text logo.", filename: __filename,}
let singleText = async(message, match, {cmdName}) => {
    try{
        let logo = {
            "pubg1" : 'tao-cover-game-pubg-anh-bia-game-playerunknown-s-battlegrounds-401',
            "pubg2" : 'tao-anh-bia-cover-facebook-game-pubg-407',
            "pubg3" : 'tao-logo-pubg-truc-tuyen-mien-phi-714',
            "pubg4" : 'tao-logo-mascot-pubg-online-sieu-ngau-716',
            'pubg5' : 'tao-logo-pubg-truc-tuyen-nhieu-mau-sac-717',
            "pubg6" : 'tao-logo-pubg-phong-cach-chibi-online-721',
        }
        if (!match) return message.reply(`*_Example : ${prefix+cmdName} Suhail_*`);
        return await textToLogoGenerator(message, logo[cmdName] , match ,"suhail" , "1")
     }catch(e){return await message.error(`${e}\n\ncmdName: ${cmdName}`,e);} 
  }
  //----------------------------------------------------------------------------------
for (cmd of ["pubg1","pubg2","pubg3","pubg4", 'pubg5',"pubg6"]) { smd({ cmdname: cmd , ...pubg }, singleText)
}
smd({ cmdname: "pubg7", ...pubg }, async(message, match, {cmdName}) => {
    try{
        //if (!text) return message.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
        let text1 = match ? match.split(';')[0] : '';
        let text2 = match ? match.split(';')[1] : '';
        if(!text2 || !text1) return await message.reply(`*_Example : ${prefix+cmdName} text1;text2_*`);
        return await textToLogoGenerator(message, 'tao-logo-pubg-truc-tuyen-phong-cach-den-trang-715' , text1 , text2,"1" )
    }catch(e){return await message.error(`${e}\n\ncmdName: ${cmdName}`,e);} })
