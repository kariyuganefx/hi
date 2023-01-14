const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let sn = createHash('md5').update(m.sender).digest('hex')
let fk = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999999828182719999,
    status: 4827204,
    surface : 4072824,
    message: '▸ Thank you for registering 🏷️', 
    orderTitle: wm,
    thumbnail: await (await fetch('https://i.imgur.com/stNJ8gE.jpeg')).buffer(), //The picture
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
let fz = {
	key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "994403219940-1631515755@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": wm,
                 "h": `Hmm`,
                 'seconds': '999999999', 
                 'gifPlayback': 'true', 
                 'caption': `「 RUNTIME BOT 」
⏲️ Time: ${time}
💌 Active During : ${uptime}`, 'jpegThumbnail': await (await fetch('https://i.imgur.com/c17uGDe.jpeg')).buffer()
                          }
                        }
                      }
 let user = global.db.data.home[m.sender]
  if (user.registered === true) return conn.sendButtonDoc(m.chat, `@${m.sender.split`@`[0]} Youre already registered! want to re-register?`, wm, 'Can', '.unreg ' + sn, m, {
    quoted: fz,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}`,
            title: wm + ' 🍃',
            body: `💌 Active During : ${uptime}`,
          thumbnail: await (await fetch('https://i.imgur.com/SKUjlZw.jpeg')).buffer()
        }
     }
    })
  if (!Reg.test(text)) return conn.sendButtonDoc(m.chat, `example:\n*${usedPrefix + command} TurboAndAjmal.18*`, wm, 'Menu', '.menu', m, {
    quoted: fz,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}`,
            title: wm + ' 🍃',
            body: `💌 Active During : ${uptime}`,
          thumbnail: await (await fetch('https://i.imgur.com/imKhdgW.jpeg')).buffer()
        }
     }
    })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Name cannot be empty (Alphanumeric)'
  if (!age) throw 'Age cannot be empty (Number)'
  age = parseInt(age)
  if (age > 50) throw 'Age too old'
  if (age < 5) throw 'Babies can type according to the bjir format, but I dont know if its too small now its epic² for sure the child likes it:v'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let prefix = usedPrefix
let hao = `

*Registered In Database*
*Supported By @${global.owner[1].split('@')[0]}*` 
  let emot = conn.pickRandom(["☑️"])
  let totalreg = Object.keys(global.db.data.home).length
  conn.sendMessage(m.chat, {
    	react: {
    		text: emot,
    		key: m.key
    	}
    })	
conn.sendButtonDoc(m.chat, `
◪ *「 LIST SUCCESSFUL 」*
╰───────────────────╮
╭───────────────────╯
├❏ Tag : @${m.sender.split`@`[0]}
├❏ Name : ${name}
├❏ Age : ${age} year
├❒ Total User : ${totalreg} number
╰───────────────────

*SN* (Serial Number) sent in private chat and used for re-registration, if you forget *SN* please type *${usedPrefix}sn* to check *SN* you! 
`.trim(), wm, `Profile`,`${prefix}pp`, m, {
    quoted: fk,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}`,
            title: 'Thank you for registering 🍃',
            body: 'Kakashi Md By Turbo And Ajmal',
          thumbnail: await (await fetch(fla + 'Registered')).buffer()
        }
     }
    })


handler.help = ['daftar', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(is(ter))?)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
