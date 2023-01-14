const uploadFile = require('../lib/uploadFile') 
 const uploadImage = require('../lib/uploadImage') 
  
  let handler = async (m, { conn, text, usedPrefix: _p, command }) => { 
  if (!text) throw `Send orders : ${_p}${command} [nama file]

Contoh : ${_p}${command} ${pickRandom(['Kakashi Md','Turbo And Ajmal'])}`
let fvdocs = {
	key: { 
     fromMe: false, 
     participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net', 
     remoteJid: 'status@broadcast', 
   }, 
       message: {
                    documentMessage: {
                    title: 'Here...\nStay Grateful With Your Life ;3', 
                    jpegThumbnail: await (await fetch('https://i.imgur.com/stNJ8gE.jpeg')).buffer() 
                          }
                        }
                      }
   let q = m.quoted ? m.quoted : m 
   let mime = (q.msg || q).mimetype || '' 
   if (!mime) throw 'No media found' 
   if (text.length > 12) throw `too long, max 12 character!`
   let media = await q.download() 
   let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime) 
   let link = await (isTele ? uploadImage : uploadFile)(media) 
   let data =await (await fetch(`https://api.xteam.xyz/imagetopdf?url=${link}&APIKEY=bf8ff984af1506b7`)).buffer() 
 conn.reply(m.chat, '*WAIT! | Please wait a moment...*', m)
await conn.sendMessage(m.chat, { document: data, mimetype: 'application/pdf', fileName: `${text}` }, { quoted: fvdocs })
 } 
 handler.help = ['pdf <reply image>'] 
 handler.tags = ['tools'] 
 handler.command = /^(pdf)$/i 
  
 handler.limit = true 
  
 module.exports = handler
