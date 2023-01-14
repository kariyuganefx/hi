let { addExif } = require('../lib/sticker.js')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!m.quoted) throw `Reply sticker with command *${usedPrefix + command}*`
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Reply to the sticker!'
    let img = await m.quoted.download()
    if (!img) throw 'Reply Sticker!'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
    else throw 'Failed to give wm cock!\ntry to send and reply to the sticker, ok!'
  }
}
handler.help = ['take <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^take$/i

module.exports = handler
