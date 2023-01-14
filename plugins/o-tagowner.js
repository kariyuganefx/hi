let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *My Owner Someone is calling you ehe ehe:V*`, m)

  conn.reply(m.chat, `
Why did you call my owner?
if you want to rent the bot
Dont be shy
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@916380260672 |@918590508376/i
handler.command = new RegExp

module.exports = handler