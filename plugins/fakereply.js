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
   * @author : Suhail <https://github.com/SuhailTechInfo>
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo
   * @infoription : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.5 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
   * plugin date : 11/12/2023
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
    tlang,
    prefix, 
    Config ,
    sleep,
    getBuffer, 
    smdJson,
    smdBuffer
     } = require('../lib')

     smd({
        cmdname: "fakereply",
        alias :['freply'],
        desc: "Create fake Reply by given texts!",
        type: "general",
        use:" msg| reply_text | number ",
        usage:"generates fake messages of given text and number!",
        filename: __filename,
        public : true,
      },
      async (m,text) => {
        try {
      let types = ["text","order","contact","image" , "video"]
          let args = text.split("|")
          if(!text || args.length < 3) return await m.reply(`*Use ${prefix}fakereply text |Reply_text|923184474176|type(text,order,contact,image,video)*`)
          let reply = args[0],msg = args[1],num = `${args[2].replace(/[^0-9]/g, '')}@s.whatsapp.net` , type = args[3] && types.includes(args[3])? args[3] :"text", charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',smds = 'SMD';    
          for (let i = 0; i < 13; i++) { smds += charset[Math.floor(Math.random() * charset.length)];  }
          let  fak =await m.bot.fakeMessage(type,{id: smds,remoteJid:m.isGroup? m.chat : num,participant:num},msg) 
          try{ if(type === "contact") {fak.message.contactMessage.jpegThumbnail =  await m.getpp(num)  }}catch(e){console.log(e)}
          await m.bot.sendMessage(m.chat,{text : reply}, { quoted : fak})
      } catch (e) {
        m.error(`${e}\n\nCommand: fakereply`, e, false);
      }
      });