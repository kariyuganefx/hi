let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.user.name
    let hao = `*Official Bot By @${'0'.split('@')[0]}* 
*Powered By @${global.owner[0].split('@')[0]}*`
    if (new Date - user.pc < 86400000) return //
        await conn.send2ButtonVid(m.chat, menuvideo, text.trim(), hao, 'Owner', '.owner', 'Rules', '.rules', m, { 
     quoted: ftoko, 
     contextInfo: { forwardingScore: 99999, isForwarded: true, 
         externalAdReply: { 
             title: 'Kakashi Whatsapp Md Bot', 
             body: `sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`, 
             description: `Turbo X Ajmal`, 
             mediaType: 2, 
           thumbnail: await genProfile(conn, m),
          mediaUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}` 
         } 
      } 
     }).
 ${user.banned ? 'you are banned' : `
I Am Kakashi, Whatsapp Bot Which You Can Use To Make Stickers, Downloading Something, Playing Games, Etc.

Please Dont Spam Phone Vc Send Virtex.`} 
 `.trim(), hao, user.banned ? 'Owner' : 'Menu', user.banned ? '!owner' : '.menu', 'User guide', '.tutorbot', 'Verify', '.verify ${conn.getName(m.sender)}.16', m) 
     user.pc = new Date * 1 
 } 
 

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Good morning"
    if (time >= 4) {
        res = "Good morning 🌅"
    }
    if (time > 10) {
        res = "Good afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good night 🌌"
    }
    return res
}
