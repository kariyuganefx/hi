let handler = async (m, { conn, usedPrefix, text, command }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `There is no hash`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'You dont have permission to delete this sticker command'
    delete sticker[hash]
    m.reply(`Succeed!`)
}


handler.help = ['cmd'].map(v => 'del' + v + ' <text>')
handler.tags = ['database', 'premium']
handler.command = ['delcmd']
handler.premium = true
module.exports = handler