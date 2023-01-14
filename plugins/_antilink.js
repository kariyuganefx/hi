let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroup)) throw false // if the group link itself is not kicked
      if (!isBotAdmin) m.reply(` *「 ANTILINK 」* ${isAdmin ? "admin month helpless sacrifice :'v" : `\n\ngroup link detected and ${global.namabot} Im not an admin so I cant kick!`}`)
    if (isBotAdmin) {
      m.reply(` *「 ANTILINK 」* \n\nGroup Link Detected, bye you will be kicked!!`.trim())
      await this.delay(500)
      await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }
  return true
}

module.exports = handler
