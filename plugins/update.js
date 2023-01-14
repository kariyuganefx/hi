let { execSync } = require('child_process')
let handler = async (m, { conn, text, isROwner }) => {
  if (global.conn.user.jid == conn.user.jid) {
    let stdout = execSync('git remote set-url origin https://github.com/TURBOHYPER/Kakashi-Md.git && git pull' + (isROwner && text ? ' ' + text : ''))
    if (isROwner) require('fs').readdirSync('plugins').map(v => global.reload('', v))
    conn.sendButton(m.chat, stdout.toString(), wm,`Node Test`, `$ node test`, m)
  }
}
handler.help = ['update']
handler.tags = ['host']
handler.command = /^(update|uo?p?|uodate)$/i

handler.rowner = true

module.exports = handler
