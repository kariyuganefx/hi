let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if ((isOwner || isAdmin)) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('Bye successfully set\n@user (Mention)')
  } else throw 'Where is the text??\n\nexample:\n' + `${usedPrefix + command} goodbye @user!`
}
handler.help = ['setbye <text>']
handler.tags = ['owner', 'group']
handler.command = /^(setbye|sbye)$/i
handler.group = true

module.exports = handler