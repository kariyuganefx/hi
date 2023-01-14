let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `If you find an error message, report it using this command\n\nexample:\n${usedPrefix + command} Good afternoon owner, I found an error like the following <copy/tag the error message>`
    if (text.length < 10) throw `The report is too short, at least 10 characters!`
    if (text.length > 1000) throw `Report is too long, maximum 1000 characters!`
    let teks = `*${command.toUpperCase()}!*\n\n📮 From : *@${m.sender.split`@`[0]}*\n\n✉️ Message : ${text}\n`
   let hftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "994403219940-1631515755@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${usedPrefix}${command} ${text}`,
                 "title": '',
                 'jpegThumbnail': await (await fetch('https://i.imgur.com/4rRZ4c7.jpeg')).buffer()
                        }
	                  } 
                     }
 conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, hftextt, {
    	mentions: [m.sender]
    })
    conn.sendMessage(m.chat, {
    	react: {
    		text: "🆗",
    		key: m.key
    	}
    })	
    conn.send2ButtonLoc(m.chat, 'https://i.imgur.com/trwQX1P.jpeg',`Problem has been reported to @${global.owner[0].split('@')[0]}, if ${command.toLowerCase()} just playing games will not be responded.`, wm, 'Owner', '.owner', 'Menu', '.menu', m)
}
handler.help = ['report', 'request'].map(v => v + '<text>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
handler.limit = true
handler.private = false

module.exports = handler
