let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if ((isOwner || isAdmin)) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome set successfully\n@user (Mention)\n@subject (Group Title)\n@desc (Group Description)')
  } else throw `Where is the text??\n\nexample:\n${usedPrefix + command} hai, @user!\nWelcome to the group @subject\n\n@desc`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']
handler.command = /^(setwelcome|setw)$/i
handler.group = true

module.exports = handler