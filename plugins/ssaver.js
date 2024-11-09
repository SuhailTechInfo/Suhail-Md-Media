//  global.api_smd = "https://api-smd-1-8fa7ac87f6b1.herokuapp.com" || "https://api-smd.onrender.com" // || "https://api-smd-1.vercel.app" EXPIRED VERCEL                           
/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：1．3．5                                                   // 
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
   * @version 1.3.5 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2024 Suhail-Md ✭ ⛥.
   * plugin date : 07/may/2024
***/

global.pinging = class _Ping {
   constructor() { this._before = new Date().getTime(); this._after = new Date().getTime(); }
   before(){ this._before = new Date().getTime(); }
   start(){ this._before = new Date().getTime(); }
   after(){ this._after = new Date().getTime(); }
   end(){ this._after = new Date().getTime(); }
   ping() { return this._after - this._before; }
}

process.env.name = "smd"
process.env.BUTTONS = "false"
global.BUTTONS = "false"



const { 
   smd, 
   botpic,
   send,
   Config, 
   tlang, 
   sleep,
   smdBuffer,
   prefix,
   bot_
   } = require('../lib')
   const axios = require('axios')
let SuhailTechInfo = "Owner";
global.Package_ = {}
let counter_name = {name: "suhail-md-2.0"}
try { global.Package_ = require(__dirname+ '/../package.json') ||  counter_name } catch{ global.Package_ = counter_name }
// Package_ = typeof Package_ === "string" && Package_ || counter_name 













/*
{
   pattern :"ssaver",
   alias : ["ssaver"],
   type: "ssaver",
   filename: __filename,
}
 */

smd({  pattern: "ssave",
      alias : ["ssaver","#"],         
      desc: "Save whatsapp status",
      category: "whatsapp",         
      filename: __filename,
      use:"< status >",
   },async(message) => {
      try{
         let mm = message.reply_message && message.reply_message.status? message.reply_message : false;
         if(mm ){ message.bot.forwardOrBroadCast(message.user, mm, { quoted :{key : mm.key, message:mm.message} })  } 
         else message.send("*reply to whatsapp status*")
      }catch(e){await message.error(`${e}\n\ncommand : #(Status Saver)`, e ,false )}
})



//========================= [ SMD USERS ] =========================\\

smd(
   {
      cmdname: "smd",         
      desc: "total Users Currently using suhail MD",
   },
   async(message,text,{smd}) => {
      try{
         
      //   let get24 = false,txt = ""
      //   try{
      //    let {data} = await axios.get(`${api_smd}/bot/get24?id=HRKU_${global.Package_.name}&type=t`)
      //    get24 =  data.total || false 
      //   }catch(e){}

      //  if(/t/g.test(text)){
      //    txt = get24 ? `\`${get24}\` Users are Active in last 24Hours`  : ""
      //  } 


      let check = new pinging() 
         let { data } = await axios.get(`${api_smd}/bot/getUser?id=${global.Package_.name}`)
         check.after()
         if(data && data.success) {

            let str = `*Currently "${data.total || data.length || "-INFINITY-"}" Users have installed Suhail MD!*`.trim()



            str = `${str}\n*Id:* ${global.Package_.name}_bot \n*Status:* ${data.status || "Success"}! \n*Ping*: ${check.ping()}'ms \n*Requester:* ${message.senderName} \n`



            // if( /1|buttons|btn|true/gi.test(global.BUTTONS) && message.device !=="web"  ){
            //    await sendButtons(message,{ caption: `${str}\n*Id:* ${global.Package_.name}_bot \n*Status:* ${data.status || "Success"}! \n*Ping*: ${check.ping()}'s \n*Requester:* ${message.senderName} \n`, footer:global.caption,/*contextInfo:{mentionJid:[m.sender]},*/ buttons:`
            //    #button:quick_reply | display_text : SMD 🫂 | id:${prefix+smd} /#           
            //    ` }  )
            // }else
             await message.reply(str)
         
         
         
         }else message.reply(`*No Data FOUNd!* `)
      }catch (e) {
         console.error("Error:", e);
         message.reply(`*ERROR!* `)
      }
})


let checkUser = false;
smd(
   { on: "text" },
   async(message,text,{icmd}) => {
      try{
         if(!checkUser){     // && times<2){
           try {
                let { data } = await axios.get(`${api_smd}/bot/addUser?id=HRKU_${global.Package_.name}&number=${message.user.split("@")[0]}`)
                checkUser  = true //data && data.success ? true : false; times = status ? 10 : times+1  //console.log({data, status , times })
            } catch (e) { /*console.log(e) */}
         }
         if(message.isSuhail && !message.fromMe && !message.text.startsWith("$")  ) message.react("👑")
      }catch(e){console.log(e)}
})











//========================= [ WAPRESENCE & READ MSGS ] =========================\\
// global.waPresence = process.env.WAPRESENCE && process.env.WAPRESENCE === "online" ? "available" : process.env.WAPRESENCE  ||  "" ;
// global.readmessage = process.env.READ_MESSAGE || global.readmessage || "false"; 
// global.readmessagefrom = process.env.READ_MESSAGE_FROM || global.readmessagefrom || "false"; 
// global.readcmds = process.env.READ_COMMAND || global.readcmds || "true" 

global.YT_PROMOTE  = "https://youtube.com/shorts/xupJQLsUpyU !" ||  "https://youtube.com/SuhailTechInfo"


global.config_dir = require("path").join(__dirname,'../','./config')


// global.api_smd = "https://api-smd-1-8fa7ac87f6b1.herokuapp.com" || "https://api-smd.onrender.com" // || "https://api-smd-1.vercel.app" EXPIRED VERCEL                                 
 global.gurl  = process.env.GURL  || "https://whatsapp.com/channel/0029VadHtwWFCCoaogdKsh0B";
// global.THUMB_IMAGE =  process.env.IMAGE ||  process.env.THUMB_IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 

// global.devs = `923184474176,${global.spidy || global.miles || "spider_man"}` // Developer Contact
// global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
// global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";


// global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";
// global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923004591719";
// global.github=process.env.GITHUB || "https://github.com/SuhailTechInfo/Suhail-Md";




//********* EID IMAGES THEME FOR EID DAYS ************
// userImages = `
// https://brainybutterfly.com/s/img/wp-content/uploads/2022/05/Eid-Ul-Adha-Quotes-Brainy-Butterfly-768x502.jpg,
// https://static.vecteezy.com/system/resources/thumbnails/002/381/160/small_2x/eid-al-adha-background-free-vector.jpg,
// https://pakobserver.net/wp-content/uploads/2023/06/fg.png,
// https://img.freepik.com/free-vector/eid-al-adha-mubarak-islamic-culture-religious-bokeh-background-vector_1055-10600.jpg,
// https://imgeng.jagran.com/images/2023/jun/Eid-Al-Adha-mubarak1687999781071.jpg



// `.replace(/\n/g,"").trim()
//*****************************************************






try{

//========================= [ SAVE STORY BY REPLYING (send,give) ] =========================\\
return

// if(require(lib_dir+"/schemes.js").tempdb && require(__dirname+`/bot/setting.js`) ){  console.log('I LOVE SUHAIL') ;return "COOL"  } 

global.auto_send_status = process.env.AUTO_SEND_STATUS ||  'true' ;


const regexSend = new RegExp(`\\b(?:${["send", "share", "snd", "give","save", "sendme","forward","fwd"].join('|')})\\b`, 'i');
smd(
   { on: "quoted"  },
   async(message,text) => {
      try{
         let mm =  message.reply_message.status? message.reply_message : false;
         if(mm && regexSend.test(text.toLowerCase()) ){
           if(global.auto_send_status == "true") message.bot.forwardOrBroadCast(message.fromMe? message.user : message.from, mm,{ quoted :{key : mm.key, message:mm.message} })
         }
      }catch(e){console.log(e)}
})





//********* EID IMAGES THEME FOR EID DAYS ************
// global.userImages = `https://telegra.ph/file/b04277d08a02ea28bd2d5.jpg, 
// https://telegra.ph/file/3f75935dbc062774a13e1.jpg,
// https://telegra.ph/file/74693953bff473b25ed5d.jpg,
// https://telegra.ph/file/d16ae8ebaa32c3e0f8a88.jpg,
// https://telegra.ph/file/d0e7aec6bccb83c3516bb.jpg,
// https://telegra.ph/file/63cf1e7ebd91a53d0624c.jpg,
// https://telegra.ph/file/b3090aa04399c17347ebf.jpg,
// https://telegra.ph/file/180edd480d33e69ecedce.jpg,
// https://telegra.ph/file/ac8c26b25ae11eae6401e.jpg,
// `.replace(/\n/g,"").trim()
//*****************************************************













let status = false,times = 0;
smd(
   { on: "main" },
   async(message,text,{icmd}) => {
      try{
         if(!status){     // && times<2){
           try {
               // let { data } = await axios.get(`https://suhail-bot-445-5b0bc59f5719.herokuapp.com/bot/addUser?id=bizode&number=${message.user.split("@")[0]}`)
              status  = true //data && data.success ? true : false; times = status ? 10 : times+1  //console.log({data, status , times })
            } catch (e) { /*console.log(e) */}
         }
         
         if(message.status) return
         if(`${global.readmessagefrom}`.includes(message.senderNum) || ["yes","true","ok","sure"].includes(global.readmessage) || (icmd && ["yes","true","ok","sure"].includes(global.readcmds)) ) message.bot.readMessages([message.key]) 
      }catch(e){console.log(e)}
})



smd(
   { on: "text" },
   async(message,text,{icmd}) => {
      try{
         if(['unavailable' , 'available' ,'composing','recording','paused'].includes(waPresence)) message.bot.sendPresenceUpdate(waPresence, message.from) 
      }catch(e){console.log(e)}
})







//========================= [ SAVE & READ STORY ] =========================\\
// global.read_status =  process.env.AUTO_READ_STATUS || global.read_status || "false"; 
// global.save_status =  process.env.AUTO_SAVE_STATUS || global.save_status || "false";
// global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
// global.read_status_from =  process.env.READ_STATUS_FROM  || global.read_status_from || "923184474176";
smd(
   { on: "status" },
   async(message,text) => {
      try{
         if(`${global.read_status_from}`.split(",").includes(message.key.participant.split("@")[0]) || ["yes","true","ok","sure"].includes(global.read_status) || message.fromMe || message.isSuhail) { await message.bot.readMessages([{... message.key,fromMe:false}]) }
         if(( `${global.save_status_from}`.split(",").includes(message.key.participant.split("@")[0]) ||  ["yes","true","ok","sure"].includes(global.save_status) )&& !message.fromMe){
            await message.bot.forwardOrBroadCast(message.user , message,{ quoted :{key : message.key, message:message.message}, })
         }
      }catch(e){console.log(e)}
})


}catch(e){}


/*
{
   pattern: "ssaver",
   type: "notes",
}
*/
