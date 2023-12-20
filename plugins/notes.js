/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
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
   * @version 1.2.3 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
   * plugin update : 10/22/2023
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
     note, 
     smd,
     prefix 
    } = require('../lib')


/*
{
   pattern: "notes",
   type: "notes",
}
 */



//---------------------------------------------------------------------------
smd({
           cmdname: "delnote",
           type: "notes",
           filename: __filename,
 fromMe:true,
           info: "Deletes note from db.",
           use: '< note id | 1 >',
       },
       async(message, match) => {
           try{
               let id = match.split(' ')[0];
               if (!id || isNaN(id)) { return message.reply(`*Provide Note ID, Example: ${prefix}delnote 1*`); }
               let res = await note.delnote(message,id)
               return await message.reply(res.msg);
           }catch(e){ await message.error(`${e}\n\ncommand: delnote`,e,) }
       }
   )
//---------------------------------------------------------------------------

smd({
   cmdname: "delallnote",
   type: "notes",
 fromMe:true,
   filename: __filename,
   info: "Deletes all notes from db."
},
async(message) => {
   try{
     let res = await note.delallnote(message)
     return await message.reply(res.msg);
   }catch(e){ await message.error(`${e}\n\ncommand: delallnotes`,e,) }
}
)
//---------------------------------------------------------------------------
smd({
   cmdname: "allnote",
   type: "notes",
   filename: __filename,
 fromMe:true,
   info: "Shows list of all notes."
},
async(message,) => {
   try{
     let res = await note.allnotes(message,"all")
     return await message.reply(res.msg);
}catch(e){ await message.error(`${e}\n\ncommand: delallnotes`,e,`*Can't fetch data, Sorry!!*`) }
}
)
//---------------------------------------------------------------------------
smd({
 cmdname: "getnote",
 type: "notes",
 filename: __filename,
fromMe:true,
 info: "Shows note by id.",
 use: '< id|1|2 >',
},
async(message,match) => {
 try{
   if(!match)return await  message.reply(`*Provide Note ID, Ex: ${prefix}getnote id|1|2|..*`); 
   let res = await note.allnotes(message,match.split(" ")[0].toLowerCase().trim())
   return await message.reply(res.msg);
}catch(e){ await message.error(`${e}\n\ncommand: getnote`,e,`*Can't fetch data, Sorry!!*`) }
}
)

//---------------------------------------------------------------------------

smd({
           cmdname: "addnote",
           type: "notes",
           info: "Adds a note on db.",
 fromMe:true,
           filename: __filename,
           use: '< text >',
       },
       async( message, match,) => {
       try{                
           if (!match) return await message.reply(`*Please provide text to save in notes!*`)
           let res = await note.addnote(message,match)
           return await message.reply(res.msg);
       }catch(e){ await message.error(`${e}\n\ncommand: addnote`,e,) }
       }
   )
//---------------------------------------------------------------------------
//                  ADD NOTE  COMMANDS
//---------------------------------------------------------------------------

smd({
   cmdname: "note",
   type: "notes",
 fromMe:true,
   filename: __filename,
   info: "Shows list of all notes."
},
async(message, text,{smd}) => {
   try{                
let txt = `╭───── *『 MONGODB NOTES 』* ───◆
┃ Here You Can Store Notes For Later Use
┃ *------------------------------------------*
┃  ┌┤  *✯---- ADD NEW NOTE ----⦿*
┃  │✭ *Cmd :* ${prefix+smd} add 'Your Text'
┃  │✭ *Usage :* Save Text in MongoDb Server
┃  ╰───────────────────◆
┃
┃  ┌┤  *✯---- GET ALL NOTES ----⦿*
┃  │✭ *Cmd :* ${prefix+smd} all
┃  │✭ *Usage :* Read/Get All Saved Notes 
┃  ╰───────────────────◆
┃
┃  ┌┤  *✯---- DELETE A NOTE ----⦿*
┃  │✭ *Cmd :* ${prefix+smd} del 'note id'
┃  │✭ *Usage :* Delete A Single Note By ID Number 
┃  ╰───────────────────◆
┃
┃  ┌┤  *✯---- DELETE ALL NOTES ----⦿*
┃  │✭ *Cmd :* ${prefix+smd} delall
┃  │✭ *Usage :* Delete All Saved Notes 
┃  ╰───────────────────◆
╰━━━━━━━━━━━━━━━━━━━━━━──⊷` ; 


       if (!text) return await message.reply(txt);
       let action = text.split(' ')[0].trim().toLowerCase()

       if(action === "add"  || action === "new" ){
         let res = await note.addnote(message,text.replace("add", "").replace("new", ""))
         return await message.reply(res.msg);
       }else if(action === "all"){
         let res = await note.allnotes(message,"all")
         return await message.reply(res.msg);
       }else if(action === "delall"){
         let res = await note.delallnote(message)
         return await message.reply(res.msg);
       }else if(action === "del"){
         let id = text.split(' ')[1];
         if (!id || isNaN(id)) { return message.reply("*Uhh Please, Provide Note ID. Example: .delnote 1*"); }
         let res = await note.delnote(message,id)
         return await message.reply(res.msg);
       }else { return await message.reply(`*Invalid action provided, please follow* \n\n${txt}`) ; }

   }catch(e){ await message.error(`${e}\n\ncommand: addnote`,e,`*Can't fetch data, Sorry!*`) }
})

