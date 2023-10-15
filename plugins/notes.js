const { addnote, smd, delnote, allnotes, delallnote, tlang,botpic, prefix, Config } = require('../lib')

//---------------------------------------------------------------------------
smd({
            cmdname: "delnote",
            type: "notes",
            filename: __filename,
            info: "Deletes note from db.",
            use: '< note id | 1 >',
        },
        async(message, match,) => {
            try{
                if(!global.isMongodb) return await message.reply(message.isCreator? `*_Add MONGODB_URI to use these cmds_*`:`*_Please ask my Owner to add MONGODB_URI!_*`)
                if (!message.isCreator) return message.reply(tlang().owner)
                let id = match.split(' ')[0];
                if (!id || isNaN(id)) { return message.reply("*Provide Note ID. Example: .delnote 1*"); }
                await delnote(id)
                return await message.reply(`*Note with ID '${id}' has been deleted from MongoDB.*`);
            }catch(e){ await message.error(`${e}\n\ncommand: delnote`,e,`*Can't fetch data,please check MONGODB_URI!!*`) }
        }
    )
//---------------------------------------------------------------------------

smd({
    cmdname: "delallnote",
    type: "notes",
    filename: __filename,
    info: "Deletes all notes from db."
},
async(message) => {
    try{
        if(!global.isMongodb) return await message.reply(message.isCreator? `*_Add MONGODB_URI to use these cmds_*`:`*_Please ask my Owner to add MONGODB_URI!_*`)
        if (!message.isCreator) return message.reply(tlang().owner)
        await delallnote()
        return message.reply(`All notes deleted from mongodb.`)
    }catch(e){ await message.error(`${e}\n\ncommand: delallnotes`,e,`*Can't fetch data,please check MONGODB_URI!!*`) }
}
)
//---------------------------------------------------------------------------
smd({
    cmdname: "allnote",
    type: "notes",
    filename: __filename,
    info: "Shows list of all notes."
},
async(message,) => {
    try{
        if(!global.isMongodb) return await message.reply(message.isCreator? `*_Add MONGODB_URI to use these cmds_*`:`*_Please ask my Owner to add MONGODB_URI!_*`)
        if (!message.isCreator) return message.reply(tlang().owner)
    let leadtext = `All Available Notes are:-\n\n`
    leadtext += await allnotes()
    return message.reply(leadtext)
}catch(e){ await message.error(`${e}\n\ncommand: delallnotes`,e,`*Can't fetch data,please check MONGODB_URI!!*`) }
}
)

 //---------------------------------------------------------------------------

smd({
            cmdname: "addnote",
            type: "notes",
            info: "Adds a note on db.",
            filename: __filename,
            use: '< text >',
        },
        async( message, match,) => {
            try{                
                if(!global.isMongodb) return await message.reply(message.isCreator? `*_Add MONGODB_URI to use these cmds_*`:`*_Please ask my Owner to add MONGODB_URI!_*`)
            if (!message.isCreator) return message.reply(tlang().owner)
            let text =  match?match : message.reply_text
            if (!text) return message.reply("🔍 Please provide me a valid gist url.")
            await addnote(text)
            return message.reply(`New note ${text} added in mongodb.`)
        }catch(e){ await message.error(`${e}\n\ncommand: addnote`,e,`*Can't fetch data,please check MONGODB_URI!!*`) }
        }
    )
 //---------------------------------------------------------------------------
//                  ADD NOTE  COMMANDS
//---------------------------------------------------------------------------

smd({
    cmdname: "note",
    type: "notes",
    filename: __filename,
    info: "Shows list of all notes."
},
async(message, text,{smd}) => {
    try{                
        if(!global.isMongodb) return await message.reply(message.isCreator? `*_Add MONGODB_URI to use these cmds_*`:`*_Please ask my Owner to add MONGODB_URI!_*`)
        if (!message.isCreator) return message.reply(tlang().owner)
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
            let txt = text.replace("add", "").replace("new", "")
            await addnote(txt)
            return await message.reply(`New note "${txt}" added in mongodb.`)
        }else if(action === "all"){
            const note_store = new Array()
            let leadtext = `*All Available Notes are:-*\n\n`
            leadtext += await allnotes()
            return await message.reply(leadtext)
        }else if(action === "delall"){
            await delallnote()
            return await message.reply(`All notes deleted from mongodb.`)
        }else if(action === "del"){
            try{
                let id = text.split(' ')[1];
                if (!id || isNaN(id)) { return message.reply("*Uhh Please, Provide Note ID. Example: .delnote 1*"); }
                await delnote(id)
                return await message.reply(`Note with ID : ${id} has been deleted from MongoDB.`);
            } catch (error) {return message.reply("Uhh Please, Provide a Note ID. Example: .notes del 1"); }
        }else { return await message.reply(txt) ; }

    }catch(e){ await message.error(`${e}\n\ncommand: addnote`,e,`*Can't fetch data,please check MONGODB_URI!!*`) }
})
