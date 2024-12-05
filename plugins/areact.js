const emojis = ['😊', '👍', '🙏', '🚩', '🇮🇳', '💞', '🕊️',]
const mojis = ['❤️‍','🩹','💯','♨️','💢','💬','👁️‍🗨️','🗨️','🗯️','💭']


//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：1．2．2                                                   // 
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
   * @version 1.2.2 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
   * plugin date : 10/6/2023
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/


/*
{
   cmdname: "autoreaction",
   type: "owner",
}
*/

let bots = false;
const { 
  smd, 
  botpic,
  send,
  Config, 
  tlang, 
  sleep,
  smdBuffer,
  prefix,
  bot_,
  react
  } = require('../lib')
let utd = false;
//---------------------------------------------------------------------------

smd({
  pattern: "areact",
    alias:["autoreaction","autoreact"],
    desc: "enable/disable auto reaction",
    category: "general",
    filename: __filename
},
async( message, text) => {
  try{ function _0x3b5c(){const _0x50c295=['autoreaction','6278zzdokq','reset','318CjHkMY','reply','updateOne','376FLRxnf','false','14017192YKJRkF','send','218554rBaGHc','disable','user','trim','367800QVBSbl','9fBACWx','Disabled','*_Auto_Reaction\x20Succesfully\x20Disable!_*','true','deact','*_Auto_Reaction\x20already\x20enabled!_*','*_Use\x20on/cmd/all/off\x20to\x20Auto_Reaction_*','204gNKvKS','command','616MZUACs','all','cmd','enable','2909580FPowba','bot_','_*Status:*\x20','Enabled','startsWith','5168570wRcqdX','15786KCzAmZ','findOne'];_0x3b5c=function(){return _0x50c295;};return _0x3b5c();}const _0x651b79=_0x4fd2;(function(_0x353fd4,_0x115a2e){const _0x58b66a=_0x4fd2,_0x1e0010=_0x353fd4();while(!![]){try{const _0x37b27d=-parseInt(_0x58b66a(0x162))/0x1*(parseInt(_0x58b66a(0x15d))/0x2)+parseInt(_0x58b66a(0x15a))/0x3*(parseInt(_0x58b66a(0x172))/0x4)+parseInt(_0x58b66a(0x154))/0x5+-parseInt(_0x58b66a(0x15f))/0x6*(parseInt(_0x58b66a(0x166))/0x7)+parseInt(_0x58b66a(0x164))/0x8*(parseInt(_0x58b66a(0x16b))/0x9)+-parseInt(_0x58b66a(0x159))/0xa+-parseInt(_0x58b66a(0x150))/0xb*(-parseInt(_0x58b66a(0x16a))/0xc);if(_0x37b27d===_0x115a2e)break;else _0x1e0010['push'](_0x1e0010['shift']());}catch(_0x247468){_0x1e0010['push'](_0x1e0010['shift']());}}}(_0x3b5c,0xec11c));function _0x4fd2(_0x312b7a,_0x46e942){const _0x3b5ce5=_0x3b5c();return _0x4fd2=function(_0x4fd2da,_0x209d0d){_0x4fd2da=_0x4fd2da-0x14f;let _0x3da0ec=_0x3b5ce5[_0x4fd2da];return _0x3da0ec;},_0x4fd2(_0x312b7a,_0x46e942);}let checkinfo=await bot_[_0x651b79(0x15b)]({'id':_0x651b79(0x155)+message[_0x651b79(0x168)]})||await bot_['new']({'id':_0x651b79(0x155)+message[_0x651b79(0x168)]}),textt=text?text['toLowerCase']()[_0x651b79(0x169)]():'',action=textt['startsWith']('on')||textt[_0x651b79(0x158)]('act')||textt[_0x651b79(0x158)](_0x651b79(0x153))||textt[_0x651b79(0x158)]('true')?_0x651b79(0x16e):textt[_0x651b79(0x158)](_0x651b79(0x152))||textt[_0x651b79(0x158)](_0x651b79(0x14f))?'cmd':textt[_0x651b79(0x158)](_0x651b79(0x151))?_0x651b79(0x151):textt[_0x651b79(0x158)]('off')||textt[_0x651b79(0x158)](_0x651b79(0x15e))||textt['startsWith'](_0x651b79(0x16f))||textt[_0x651b79(0x158)](_0x651b79(0x167))?'false':'';utd=!![];if(!action)return await message[_0x651b79(0x165)]('*_Auto_Reaction\x20currently\x20*'+(checkinfo['autoreaction']===_0x651b79(0x163)?_0x651b79(0x16c):_0x651b79(0x157))+'!_*\x0a'+(checkinfo['autoreaction']===_0x651b79(0x163)?'':_0x651b79(0x156)+(checkinfo[_0x651b79(0x15c)]==='true'?'on':checkinfo[_0x651b79(0x15c)])+'_\x0a')+_0x651b79(0x171));else{if(action===_0x651b79(0x163)){if(checkinfo[_0x651b79(0x15c)]===_0x651b79(0x163))return await message['reply']('*_Auto_Reaction\x20Already\x20Disabled_*');return await bot_[_0x651b79(0x161)]({'id':'bot_'+message[_0x651b79(0x168)]},{'autoreaction':_0x651b79(0x163)}),await message[_0x651b79(0x165)](_0x651b79(0x16d));}else{if(action==='cmd'||action===_0x651b79(0x151)||action===_0x651b79(0x16e)){if(checkinfo[_0x651b79(0x15c)]===action)return await message['reply'](_0x651b79(0x170));return await bot_['updateOne']({'id':_0x651b79(0x155)+message[_0x651b79(0x168)]},{'autoreaction':action}),await message['send']('*_Auto_Reaction\x20succesfully\x20enabled!_*');}else return await message[_0x651b79(0x160)]('*_Please\x20provide\x20valid\x20instructions!_*\x0a*_Use\x20true/all/cmd/off\x20to\x20set\x20autoreaction!_*');}}}catch(e){await message.error(`${e}\n\ncommand:areact`,e)}
})





 smd({ on: "main" }, async(msg,text,{icmd}) => {
    try{
      if(!msg  || msg.reaction || msg.protocol || msg.pollUpdate ) return "Not Allowed"
        if(!bots || utd ){ bots = await bot_.findOne({id: `bot_${msg.user}` }); utd=false} 
        if(!bots || !bots.autoreaction || bots.autoreaction==="false") return "AUTO REACTION DISABLED"
        if((bots.autoreaction === 'group' && !msg.isGroup) || (bots.autoreaction === 'pm' && msg.isGroup)   ) return "pm/group not found for auto reaction"



        else if (bots.autoreaction === 'true' || bots.autoreaction === 'group' || bots.autoreaction === 'pm' || (icmd && bots.autoreaction === 'cmd') ) {let emokis = emojis[Math.floor(Math.random() * (emojis.length))];await react(msg,emokis)}
        else if (bots.autoreaction === 'all') {var mokis = mojis[Math.floor(Math.random() * (mojis.length))]; await react(msg,mokis) }
    }catch(e){console.log("error in auto reatcion : " , e)}
})
