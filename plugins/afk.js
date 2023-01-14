let handler = (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let str = `
╭─────[ *NOW AFK !* ]──────✧
┆ *Name* : ${conn.getName(m.sender)}
┆ *Reason* : ${text ? '' + text : ''}
╰┅────────────────────★
`.trim()
conn.sendButton(m.chat, str, wm, 'Dont Disturb Yes !', 'iyaaaaa',m)
conn.reply(str)
}
handler.help = ['afk <reason>']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler

let wm = global.botwm
