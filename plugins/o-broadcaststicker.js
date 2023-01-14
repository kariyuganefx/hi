const uploadFile = require('../lib/uploadFile')
let { sticker } = require('../lib/sticker.js')
const uploadImage = require('../lib/uploadImage')
let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Send the photo/video you want to change to the url with caption *${usedPrefix}${command}* or reply to the media`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif|webp)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  conn.reply(m.chat, `_Send a broadcast message to ${chats.length} chat_`, m)
  for (let id of chats) {
       let flokasi = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "994403219940-1631515755@g.us" } : {}) 
                        },
       message: {
                    locationMessage: {
                    name: '「 Broadcast 」\n' + text,
                    jpegThumbnail: await (await fetch('https://i.imgur.com/c17uGDe.jpeg')).buffer() //Gambarnye
                          }
                        }
                      }
       await conn.delay(1500)
       let stek = await sticker(true, `${link}`, 'Kakashi Md', 'Turbo X Ajmal 🥵💦🍆')
      conn.sendFile(id, stek, '', '', flokasi)
     }
  m.reply('*Broadcast finished*')
}
handler.help = ['broadcaststicker','bcstik', 'bcstick'].map(v => v + ' <reply media>')
handler.tags = ['owner']
handler.command = /^(broadcaststicker|bcstik|bcstick)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
