const { toAudio, toPTT } = require('../lib/converter')
let fs = require('fs')
let fetch = require("node-fetch")
let handler = async (m, { conn, text }) => {
	let user = global.db.data.users[m.sender]
	let haori = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999999999,
    status: 404,
    surface : 404,
    message: `© Kakashi Md\nFrom ${conn.getName(m.sender)} 🌠`, 
    orderTitle: `▮By Turbo And Ajmal ▸`,
    thumbnail: await (await fetch('https://i.imgur.com/4rRZ4c7.jpeg')).buffer(),
    }
    }
    }
      let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
 let media = await q.download()
    if (!media) throw 'Media cant be downloaded'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw 'Failed to convert.'
    let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `Sent a broadcast audio to ${chats.length} chat_`, m)
  for (let id of chats) {
       await conn.delay(1500)
     await  await    await conn.sendFile(id, audio.data, 'error.mp3', null, m, true, {
type: 'audioMessage', // force without converting in ffmpeg
ptt: true, contextInfo: { forwardingScore: 999, isForwarded: true,
         externalAdReply: { 
             title: 'ꕥ─────•「 AUDIO BROADCAST 」•─────ꕥ',  
             body: '📢 Message Content :' + text,
             description: '',  
             mediaType: 2, 
           thumbnail: await (await fetch(fla + 'Broadcast')).buffer(), 
          mediaUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}`
         } 
      } 
   })
}
    m.reply('_*Broadcast Finished*_')
}
handler.help = ['bcvn'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(broadcastvn|bcvn)$/i

handler.owner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))