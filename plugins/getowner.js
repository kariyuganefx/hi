let handler = async (m, { conn, text }) => {
    m.reply('Wait a moment, the process of getting the owner.json file')
    let data = await fs.readFileSync('.src/owner.json')
    let user = global.db.data.users[m.sender]
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {}) }, message: { contactMessage: { displayName: 'Get Owner', vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${conn.getName(m.sender)}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    return await conn.sendMessage(m.chat, { document: data, mimetype: 'application/json', fileName: 'owner.json' }, { quoted: fkon })
}
handler.help = ['getowner','getownerfile'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(getownerfile|getowner)$/i

handler.rowner = true

module.exports = handler
