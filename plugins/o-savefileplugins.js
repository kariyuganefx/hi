let fs = require('fs')
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. where is the text?\n\nusage:\n${usedPrefix + command} <text>\n\nexample:\n${usedPrefix + command} menu`
    if (!m.quoted.text) throw `reply to message!`
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`tersimpan di ${path}`)
}
handler.help = ['sfp'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^sfp$/i

handler.rowner = true
module.exports = handler