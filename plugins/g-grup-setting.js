let { groupsSettingUpdate } = require('@adiwajshing/baileys')
let handler = async (m, { isAdmin, isOwner, isBotAdmin, conn, args, usedPrefix, command }) => {
	if (!(isAdmin || isOwner)) {
		global.dfail('admin', m, conn)
		throw false
	}
	if (!isBotAdmin) {
		global.dfail('botAdmin', m, conn)
		throw false
	}
let prefix = usedPrefix
let bu = `Group has been opened by @${m.sender.split`@`[0]} and now all members can send messages

type *${usedPrefix}open group*
To open a group!`.trim()            
    
	let isClose = {
		'open': 'not_announcement',
		'buka': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'tutup': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2Button(m.chat, `
contoh:
${usedPrefix + command} close
${usedPrefix + command} open
	`.trim(), wm, 'Open', '#grup 1', 'Close', '#grup 0', m)
		throw false
	} else if (isClose === 'announcement') {
	await conn.groupSettingUpdate(m.chat, isClose)
	let teks = `Group has been closed by @${m.sender.split`@`[0]} and now only admin can send messages

type *${usedPrefix}open group*
To open a group!`.trim()
	await conn.sendButton(m.chat, teks, wm, 'Open', '.group open', m, { mentions: [m.sender] })
	} else if (isClose === 'not_announcement') {
	await conn.groupSettingUpdate(m.chat, isClose)
	await conn.sendButton(m.chat, bu, wm, 'Close', '.group close', m, { mentions: [m.sender] })
	} else if (isClose === undefined) {
	await conn.send2Button(m.chat, `
example:
${usedPrefix + command} close
${usedPrefix + command} open
	`.trim(), wm, 'Open', '#grup 1', 'Close', '#grup 0', m)
	}
}

handler.help = ['grup <open/close>']
handler.tags = ['group']
handler.command = /^(g(ro?up|c?)?)$/i
handler.group = true
handler.botAdmin = false

module.exports = handler
   