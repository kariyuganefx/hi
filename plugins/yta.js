let fetch = require('node-fetch')
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Exmple:\n${usedPrefix + command} url`
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  m.reply(wait)
  await conn.sendMessage(m.chat, { document: { url: dl_link }, mimetype: 'audio/mpeg', fileName: title + `.mp3`}, {quoted: m})
  conn.sendMessage(m.chat, { audio: { url: dl_link }, mimetype: 'audio/mpeg', fileName: title + `.mp3`, contextInfo: {
        externalAdReply: {
            title: `${title}`, 
            body: 'Now Playing...',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch(thumb)).buffer(),
         mediaUrl: `https://instagram/toxic_turbo777`
         sourceUrl: `https://instagram/toxic_turbo777`
        }
     }
  })
}
handler.help = ['ytmp3', 'yta', 'song']
handler.tags = ['downloader']
handler.command = /^(yta|ytmp3|song)$/i

module.exports = handler