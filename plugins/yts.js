let yts = require('yt-search') 
 let handler = async (m, { conn, text }) => { 
   if (!text) return conn.reply(m.chat, 'Find out what?', m) 
   let results = await yts(text) 
   let teks = results.all.map(v => { 
     switch (v.type) { 
       case 'video': return ` 
 💌 *Title :* ${v.title}  
💻 *Url :* (${v.url}) 
⏰ *Duration :* ${v.timestamp}
📤 *Uploaded :* ${v.ago}
👥 *View :* ${v.views} Viewer
  `.trim() 
       case 'channel': return ` 
 🏮 *Name :* ${v.name}
💻 *Url :* (${v.url}) 
👥 *Subscriber :* ${v.subCountLabel} (${v.subCount}) Subscriber
🎥 *Video :* ${v.videoCount} video
 `.trim() 
     } 
   }).filter(v => v).join('\n┄┈┈┈┈┈┈┈┈┈┈┄┈┈┈┈┈┈┈┈┈┈\n') 
  conn.sendButtonDoc(m.chat, '*────────「 Youtube Search 」────────*\n\n' + teks, wm, 'Menu', '.menu', m, {quoted: m, contextInfo: { 
         externalAdReply: { 
             title: global.wm,
             body: 'Is this really what people are looking for??',
             description: 'Is this really what people are looking for??', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://i.imgur.com/stNJ8gE.jpeg')).buffer(), 
          mediaUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}` 
         } 
      } 
   })
 } 
 handler.help = ['ytsearch <query>'] 
 handler.tags = ['tools', 'internet'] 
 handler.command = /^yts(earch)?$/i 
  
 module.exports = handler
