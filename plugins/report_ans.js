let handler = m => m
handler.before = async function (m, { conn, isOwner }) {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(REPORT|REQUEST|KONFIR|KONFIRM)!/i.test(m.quoted.text)) return !0
    if (!isOwner) throw false
let hftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "994403219940-1631515755@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": '',
                 "h": '',
                 'seconds': '999999999', 
                 'gifPlayback': 'true', 
                 'caption': `Qontes For You🥀
I Miss It So It Feels Close
Not Away`,
                 'jpegThumbnail': await (await fetch('https://i.imgur.com/trwQX1P.jpeg')).buffer()
                        }
	                  } 
                     }
    conn.sendButton(m.quoted.mentionedJid[0], '*✉️ Reply Message from Owner:*\n\n📮: ' + m.text, wm, 'Sip', 'Ok', hftextt)
    //conn.reply(m.quoted.mentionedJid[0], '*Owner:* ' + m.text + m.quoted.mentionedJid[0] + `${m.quoted.text.split`Pesan :`[1]}`, null)

}
module.exports = handler
