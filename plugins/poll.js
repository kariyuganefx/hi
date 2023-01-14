//Credit: TurboMods
//Use This Feature Wisely Because It Include Whatsapp Bug

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

if (!args[0]) throw `No text for survey \n\nExample : \n*${usedPrefix + command}*Message  |Hai|Bro`
if (!text.includes('|')) throw  `Split poll with *|* \n\nExample : \n*${usedPrefix + command}* my survey|n  |What|news|good`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `ðŸ“‹ *Survey requested by:* ${name}\n\n*Message:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <Hello|what|news>']
handler.tags = ['group'] 
handler.command = ['poll', 'polling'] 
handler.group = true

module.exports = handler