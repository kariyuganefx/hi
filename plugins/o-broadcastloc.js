let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Send a broadcast message to ${chats.length} chat_`, m)
  for (let id of chats) {
       let bcbg = 'https://i.imgur.com/c17uGDe.jpeg'
       await conn.delay(1500)
       await conn.send2ButtonLoc(id, bcbg,'*——————「 Broadcast 」——————*\n' + text.trim(), wm, 'Menu', '.menu', 'Owner', '.owner', m)
     }
  m.reply('*Broadcast finished*')
}
handler.help = ['broadcastloc','bcloc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastloc|bcloc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
