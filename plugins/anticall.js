
/**

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


let antiCallMessage = process.env.ANTICALL_MESSAGE ||  "\`\`\`Hii this is Suhail-Md a Personal Assistant!!\n\n\tSorry for now, we cannot receive calls, whether in a group or personal \n\n if you need help or request features please chat owner\n\n\nPowered by Suhail-Md Chatbot\`\`\`" ;



/*
{
   cmdname: "anticall",
   type: "owner",
}
*/

const _0x24ad93=_0x5b4c;(function(_0x50b3a2,_0xb5c8f){const _0xea06c2=_0x5b4c,_0x158708=_0x50b3a2();while(!![]){try{const _0x214a29=parseInt(_0xea06c2(0x135))/0x1*(parseInt(_0xea06c2(0x138))/0x2)+parseInt(_0xea06c2(0x146))/0x3*(parseInt(_0xea06c2(0x154))/0x4)+-parseInt(_0xea06c2(0x152))/0x5*(parseInt(_0xea06c2(0x130))/0x6)+-parseInt(_0xea06c2(0x13e))/0x7*(-parseInt(_0xea06c2(0x11b))/0x8)+parseInt(_0xea06c2(0x132))/0x9*(-parseInt(_0xea06c2(0x123))/0xa)+parseInt(_0xea06c2(0x128))/0xb*(parseInt(_0xea06c2(0x131))/0xc)+-parseInt(_0xea06c2(0x145))/0xd;if(_0x214a29===_0xb5c8f)break;else _0x158708['push'](_0x158708['shift']());}catch(_0x2d88b1){_0x158708['push'](_0x158708['shift']());}}}(_0x47da,0xecc3f));const _0x48b34b=_0x1c87;(function(_0x59e32,_0x301416){const _0x2006be=_0x5b4c,_0x2aa6b3=_0x1c87,_0xa7b2f3=_0x59e32();while(!![]){try{const _0x30b6e8=-parseInt(_0x2aa6b3(0x1c1))/0x1*(parseInt(_0x2aa6b3(0x1be))/0x2)+-parseInt(_0x2aa6b3(0x1bb))/0x3+parseInt(_0x2aa6b3(0x1b7))/0x4+-parseInt(_0x2aa6b3(0x1b6))/0x5+-parseInt(_0x2aa6b3(0x1bc))/0x6*(parseInt(_0x2aa6b3(0x1da))/0x7)+parseInt(_0x2aa6b3(0x1d6))/0x8+parseInt(_0x2aa6b3(0x1e3))/0x9;if(_0x30b6e8===_0x301416)break;else _0xa7b2f3[_0x2006be(0x137)](_0xa7b2f3['shift']());}catch(_0x33c54e){_0xa7b2f3['push'](_0xa7b2f3[_0x2006be(0x14e)]());}}}(_0x1336,0x21ea7));function _0x5b4c(_0x2b0d35,_0x5a2bad){const _0x47da99=_0x47da();return _0x5b4c=function(_0x5b4cd0,_0x13d039){_0x5b4cd0=_0x5b4cd0-0x117;let _0xcd4f1f=_0x47da99[_0x5b4cd0];return _0xcd4f1f;},_0x5b4c(_0x2b0d35,_0x5a2bad);}let antiCallCountries=[],antiCallusers={},bots=![];function _0x1c87(_0x2004d4,_0xd8eeb1){const _0x383ce0=_0x1336();return _0x1c87=function(_0x36048a,_0x53c2c3){_0x36048a=_0x36048a-0x1b5;let _0x235642=_0x383ce0[_0x36048a];return _0x235642;},_0x1c87(_0x2004d4,_0xd8eeb1);}const {smd,botpic,send,Config,tlang,sleep,smdBuffer,prefix,bot_}=require(_0x24ad93(0x119));function _0x1336(){const _0x413bb2=_0x24ad93,_0x511723=[_0x413bb2(0x139),'480rkGVOl',_0x413bb2(0x151),'false',_0x413bb2(0x12d),_0x413bb2(0x122),_0x413bb2(0x11a),_0x413bb2(0x14d),_0x413bb2(0x13b),'findOne',_0x413bb2(0x150),_0x413bb2(0x11c),_0x413bb2(0x133),_0x413bb2(0x120),'offer',_0x413bb2(0x13f),_0x413bb2(0x144),'\x22!*',_0x413bb2(0x12a),_0x413bb2(0x134),_0x413bb2(0x11e),_0x413bb2(0x118),_0x413bb2(0x140),_0x413bb2(0x149),_0x413bb2(0x147),_0x413bb2(0x153),_0x413bb2(0x13d),'isBot',_0x413bb2(0x11f),_0x413bb2(0x12c),_0x413bb2(0x125),_0x413bb2(0x142),_0x413bb2(0x124),_0x413bb2(0x14a),_0x413bb2(0x129),_0x413bb2(0x126),'filter',_0x413bb2(0x136),_0x413bb2(0x127),_0x413bb2(0x117),_0x413bb2(0x11d),_0x413bb2(0x12b),_0x413bb2(0x148),_0x413bb2(0x141),_0x413bb2(0x14b),_0x413bb2(0x13c),_0x413bb2(0x12e)];return _0x1336=function(){return _0x511723;},_0x1336();}function _0x47da(){const _0x58261d=['150856JCFJmk','new','<on\x20|\x20off>','Not\x20set\x20to\x20any','284373txAeSM','*_anticall\x20','12559715DLfolj','deact','Detects\x20calls\x20and\x20decline\x20them.\x20','owner','..!!_*','*anticall\x20Disable\x20Succesfully!*','suhail','23686897cexPhR','48BSgrRA','toString','user','map','trim','warn','*anticall\x20Already\x20Disabled\x20In\x20Current\x20Chat!*','updateOne','shift','decline','send','anticall\x20all\x20|\x2092_*','80cxbBwF','1219920dDRpDd','138704MRlyeY','all','off','../lib','includes','8JJqIVK','*anticall\x20Succesfully\x20set\x20to\x20\x22','96005QyDHDY','bot_','*_Please\x20provide\x20a\x20Valid\x20country\x20code_*\x0a*example:\x20','some','anticall\x20all,212,91,231_*','split','4248460UwHkXJ','*_Please\x20provide\x20country\x20code\x20to\x20block\x20calls_*\x0a*_eg:\x20','startsWith','\x20Country\x20Code!_*\x0a\x20*Provide\x20Country\x20code\x20to\x20Update\x20Status*\x0a*Eg:\x20_.anticall\x20all\x20|\x20212,\x2091_*','2807325oUmGcA','467203YRDOZm','from','join','488436OhrRIL','1176091zoPIve','690rVQptf','6cDJuwM','false','86826kRHSdy','204XCRsPO','9kLFxOi','fromMe','\x20Call\x20rejected\x20From\x20User\x20@','5wfRKAP','anticall','push'];_0x47da=function(){return _0x58261d;};return _0x47da();}smd({'pattern':_0x48b34b(0x1e2),'desc':_0x48b34b(0x1d3),'category':_0x48b34b(0x1b9),'use':_0x24ad93(0x13a),'filename':__filename},async(_0x3079c3,_0x16cfc8)=>{const _0x205fb4=_0x24ad93,_0x4fb4e6=_0x48b34b;let _0x20f464=await bot_[_0x4fb4e6(0x1c6)]({'id':_0x4fb4e6(0x1d1)+_0x3079c3[_0x4fb4e6(0x1b8)]})||await bot_[_0x4fb4e6(0x1bd)]({'id':_0x4fb4e6(0x1d1)+_0x3079c3[_0x4fb4e6(0x1b8)]}),_0xfa720=_0x16cfc8?_0x16cfc8['toLowerCase']()[_0x4fb4e6(0x1de)]():'';if(_0xfa720[_0x4fb4e6(0x1db)](_0x4fb4e6(0x1d2))||_0xfa720[_0x4fb4e6(0x1db)](_0x4fb4e6(0x1cc))||_0xfa720[_0x205fb4(0x125)]('disable')){if(_0x20f464[_0x4fb4e6(0x1e2)]===_0x4fb4e6(0x1c0))return await _0x3079c3[_0x4fb4e6(0x1c7)](_0x205fb4(0x14c));return await bot_[_0x4fb4e6(0x1c4)]({'id':_0x4fb4e6(0x1d1)+_0x3079c3['user']},{'anticall':_0x205fb4(0x12f)}),await _0x3079c3[_0x4fb4e6(0x1c7)](_0x205fb4(0x143));}else{if(!_0x16cfc8)return await _0x3079c3['send'](_0x4fb4e6(0x1d7)+(_0x20f464[_0x4fb4e6(0x1e2)]==='false'?_0x4fb4e6(0x1c5):'set\x20to\x20\x22'+_0x20f464[_0x4fb4e6(0x1e2)]+'\x22')+_0x4fb4e6(0x1e0));}let _0x550952=_0xfa720[_0x205fb4(0x11a)](_0x4fb4e6(0x1b5))?_0x4fb4e6(0x1b5):_0x16cfc8?_0x16cfc8[_0x4fb4e6(0x1c2)](',')[_0x4fb4e6(0x1d4)](_0x5dedec=>parseInt(_0x5dedec))[_0x4fb4e6(0x1e1)](_0x388aec=>!isNaN(_0x388aec))[_0x4fb4e6(0x1cf)](','):![];if(!_0x16cfc8||!_0x550952)return await _0x3079c3[_0x4fb4e6(0x1c7)](_0x4fb4e6(0x1dd)+prefix+_0x4fb4e6(0x1bf));else{if(_0x550952)return await bot_[_0x4fb4e6(0x1c4)]({'id':_0x4fb4e6(0x1d1)+_0x3079c3[_0x4fb4e6(0x1b8)]},{'anticall':''+_0x550952}),await _0x3079c3[_0x4fb4e6(0x1c7)](_0x4fb4e6(0x1c8)+_0x550952+_0x4fb4e6(0x1ce));else return await _0x3079c3[_0x4fb4e6(0x1c7)](_0x4fb4e6(0x1d9)+prefix+_0x205fb4(0x121));}}),smd({'call':_0x48b34b(0x1cb)},async _0x1a2ce4=>{const _0x1b563a=_0x24ad93,_0x31f0ef=_0x48b34b;try{if(!bots)bots=await bot_[_0x31f0ef(0x1c6)]({'id':_0x31f0ef(0x1d1)+_0x1a2ce4[_0x31f0ef(0x1b8)]});if(_0x1a2ce4[_0x31f0ef(0x1c9)]||!bots||!bots[_0x31f0ef(0x1e2)]||bots[_0x31f0ef(0x1e2)]===_0x31f0ef(0x1c0))return;(!antiCallCountries||!antiCallCountries[0x0])&&(antiCallCountries=bots[_0x31f0ef(0x1e2)]?.[_0x31f0ef(0x1c2)](',')||[],antiCallCountries=antiCallCountries['filter'](_0x1e7c5a=>_0x1e7c5a[_0x31f0ef(0x1de)]()!==''));let _0x15d906=(''+bots[_0x1b563a(0x136)])[_0x31f0ef(0x1c3)](_0x31f0ef(0x1b5))?_0x31f0ef(0x1b5):'',_0x166d3c=_0x15d906==_0x31f0ef(0x1b5)?!![]:antiCallCountries[_0x31f0ef(0x1ca)](_0x464681=>_0x1a2ce4[_0x31f0ef(0x1df)]?.[_0x31f0ef(0x1d5)]()?.['startsWith'](_0x464681));if(_0x166d3c||_0x1a2ce4[_0x31f0ef(0x1d8)])try{return(!antiCallusers||!antiCallusers[_0x1a2ce4[_0x31f0ef(0x1df)]])&&(antiCallusers[_0x1a2ce4[_0x1b563a(0x129)]]={'warn':0x0}),antiCallusers[_0x1a2ce4[_0x31f0ef(0x1df)]][_0x31f0ef(0x1ba)]<0x2&&await _0x1a2ce4[_0x31f0ef(0x1c7)](antiCallMessage),antiCallusers[_0x1a2ce4[_0x31f0ef(0x1df)]][_0x31f0ef(0x1ba)]++,await _0x1a2ce4[_0x31f0ef(0x1c7)]('*_'+antiCallusers[_0x1a2ce4[_0x31f0ef(0x1df)]][_0x31f0ef(0x1ba)]+_0x31f0ef(0x1d0)+_0x1a2ce4[_0x1b563a(0x129)][_0x1b563a(0x122)]('@')[0x0]+_0x31f0ef(0x1dc),{'mentions':[_0x1a2ce4[_0x31f0ef(0x1df)]]},_0x31f0ef(0x1cd),'',_0x1a2ce4[_0x31f0ef(0x1b8)]),await _0x1a2ce4[_0x1b563a(0x14f)]();}catch{}}catch{}});





