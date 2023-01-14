let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `reply video with command *${usedPrefix + command}*`
let mime = m.quoted.mimetype || ''
let media = await m.quoted.download()
fs.writeFileSync(`./KakashiMedia/kakashi.jpg`, media)
fs.writeFileSync(`./KakashiMedia/logo.jpg`, media)
fs.writeFileSync(`./src/logo.jpg`, media)
fs.writeFileSync(`./thumbnail.jpg`, media)
m.reply(`*Done ✔️*`)
}
handler.help = ['setlogo','setthumb']
handler.tags = ['owner']
handler.command = /^(setlogo|setthumb)$/i

module.exports = handler