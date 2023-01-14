let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donation 」
│ • Just Give A ⭐
│ • To Our Github Account
│ • And Keep Using Our Bot
╰────
╭─「 *NOTE* 」
│ > If Anyone Telling That They Are Turbo Or Ajmal
│ And Asking For Donation Dont Trust We Never Ask To Donate
│ Turbo: wa.me/916380260672
│ Ajmal: wa.me/918590508376
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Add yourself if you want
handler.help = ['donate']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler