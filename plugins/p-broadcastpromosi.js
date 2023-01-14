let handler  = async (m, { conn, text }) => {
  let p = global.petik
  if (!text) throw 'Where is the text? ?'
  let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Sending promotional broadcast messages to ${chats.length} chat_`, m)
  for (let id of chats) {
       let bcbg = 'https://i.imgur.com/4rRZ4c7.jpeg'
       await conn.delay(1500)
       await conn.send2ButtonImg(id, bcbg, `${p}𓊈𒆜𝘉𝘳𝘰𝘢𝘥𝘤𝘢𝘴𝘵 𝘗𝘳𝘰𝘮𝘰𝘵𝘪𝘰𝘯𒆜𓊉${p}\n\n` + text.trim(), wm, 'Menu', '.menu', 'Owner', '.owner', ftroli)
     }
  m.reply('*Broadcast promotion finished*')
}
handler.help = ['broadcastpromosi','bcp'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastpromosi|bcp)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.fail = null

module.exports = handler