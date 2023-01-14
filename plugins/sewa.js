let fetch = require('node-fetch') 
 let moment = require('moment-timezone') 
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
     let name = db.data.users[m.sender].name 
 let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: `${ucapan()}`,
    orderTitle: `${ucapan()}`,
    thumbnail: await conn.resize(await (await fetch('https://i.imgur.com/4rRZ4c7.jpeg')).buffer(), 300, 200),  //The picture
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
 	const sections = [ 
                 { 
                   "rows": [{ 
                     "title": `Bot Owner`, 
                     "description": "Bot Owner Number (owner)", 
                     "rowId": `${usedPrefix}creator` 
                   }, { 
                     "title": "Terms and Conditions and Rules", 
                     "description": "Please read the Rules for our comfort together", 
                     "rowId": `${usedPrefix}rules` 
                   }, { 
                     "title": "Official Group For Kakashi Md", 
                     "description": "Join to get information about the bot or just live", 
                     "rowId": `${usedPrefix}gcbot` 
                   }], 
                   "title": "Bot Information" 
                 }, { 
                   "rows": [{ 
                     "title": `Free 1 Day Trial`, 
                     "description": "Enter bots for free for 1 Day", 
                     "rowId": `${usedPrefix}join` 
                     }], 
                   "title": "────────「 Trial 」" 
                 }, { 
                     "rows": [{ 
                       "title": `Add For More Time Or Permanent`, 
                       "description": "Adding The Bot For More Time Or Permanent Then Message Owner!", 
                       "rowId": ".owner"
                   }], 
                     "title": "───────「 Permanent 」" 
                 } 
               ]
         const listMessage = {
      text: `*❏ RENT BOT*
For the bot feature, you can read the menu until its finished, bro/sis, try it first so you know ( Type *.menu* )
Please contact the owner ( Type *.owner* ) if you want to rent a bot for your group chat

➠ If You Want To Add Bot For Permanent Then Contact The Owner
➠ If You Want To Add Bot Its Bro Get Permission For Owner
➠ Need A Proof That You Got Permission From The Owner For Adding
➠ *Important!* Save The Owner Number And Join The Official Group Below To Find Out The Latest Bot Number Updates If Banned.
➠ Bots Can Be Moved From Group To Group (Valid For Rented Ones) To Another Group (Only 1 Group)
➠ Sorry for those who have Dont Get The Permission For Adding Because You Get Some Thing Wrong So You Dont Get Permission
➠ Rent Means Agree To These Terms`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Click Here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul), contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
    
    }
 handler.help = ['rent'] 
 handler.tags = ['main'] 
 handler.command = /^rent|rentbot$/i 
 module.exports = handler 
  
 module.exports = handler 
 function ucapan() { 
     const time = moment.tz('Asia/Jakarta').format('HH') 
     res = "Good morning" 
     if (time >= 4) {  
         res = "Good morning 🌄" 
   } 
   if (time > 10) { 
     res = "Good afternoon ☀️" 
   } 
   if (time >= 15) { 
     res = "Good afternoon 🌇" 
   } 
   if (time >= 18) { 
     res = "Good night 🌙" 
     } 
     return res 
 }
