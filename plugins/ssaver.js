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
 
 
   let SuhailTechInfo = "Owner";
/*
{
   pattern :"ssaver",
   desc: "Save whatsapp status",
}
 */

    smd({
         pattern: "#",         
         desc: "Save whatsapp status",
         category: "whatsapp",
         use:"< status >",
         filename: __filename,
         on: "text"
      },
      async(message,text,{smd}) => {
         try{
             let mm = message.reply_message && message.reply_message.status? message.reply_message : false;
             if(!mm && smd) return await message.send("*Uhh Please, reply to whatsapp status*")
             else if(!mm) return 
             if(text.toLowerCase().includes("send") || text.toLowerCase().includes("save") || smd){
                 return await message.bot.forwardOrBroadCast(smd?message.user : message.from, mm)
             }
 
         }catch(e){if(smd) await message.error(`${e}\n\ncommand : #(Status Saver)`, e ,false )}
      })



/*
{
   pattern: "ssaver",
   type: "notes",
}
*/