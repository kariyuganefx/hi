let levelling = require('../lib/levelling') 
 let fs = require('fs') 
 let path = require('path') 
 let fetch = require('node-fetch') 
 let moment = require('moment-timezone') 
 let jimp = require('jimp') 
 let PhoneNumber = require('awesome-phonenumber') 
 const defaultMenu = { 
   before: `%readmore`.trim(),
  header: `˚₊· ͟͟͞͞%category༉`, 
   body: '◦ %cmd %islimit %isPremium', 
   footer: '', 
   after: `⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕. 
 
*%me@^%version*
${'```%npmdesc```'}
 `,
}
 let handler = async (m, { conn, usedPrefix: _p, args, command }) => { 
  
   let tags 
   let teks = `${args[0]}`.toLowerCase() 
   let array = ['all', 'rpg', 'anime', 'downloader', 'game', 'fun', 'xp', 'github', 'group', 'image', 'quotes', 'admin', 'info', 'internet', 'shell', 'maker',  'sound', 'vn', 'furry', 'owner', 'voice', 'premium', 'quotes', 'info', 'stalk', 'shortlink', 'sticker', 'tools', 'text', 'nsfw', 'intake', 'random', 'textpro', 'photooxy'] 
   if (!array.includes(teks)) teks = '404' 
   if (teks == 'all') tags = { 
   'main': 'MAIN MENU', 
   'advanced': 'ADVANCED MENU', 
   'anime': 'ANIME MENU', 
   'sticker': 'CONVERT MENU', 
   'downloader': 'DOWNLOADER MENU', 
   'xp': 'EXP MENU', 
   'fun': 'FUN MENU', 
   'game': 'GAME MENU', 
   'github': 'GITHUB MENU', 
   'group': 'GROUP MENU', 
   'image': 'IMAGE MENU', 
   'info': 'INFO MENU', 
   'internet': 'INTERNET MENU', 
   'shell': 'SHELL MENU', 
   'maker': 'MAKER MENU', 
   'sound': 'Sound Music',
   'vn': 'Vn Imuet',
   'owner': 'OWNER MENU', 
   'Voice Changer': 'VOICE CHANGE MENU', 
   'premium': 'PREMIUM MENU', 
   'quotes': 'QUOTES MENU', 
   'rpg': 'RPG MENU', 
   'stalk': 'STALK MENU', 
   'shortlink': 'SHORT LINK MENU', 
   'tools': 'TOOLS MENU', 
   'vote': 'VOTING MENU', 
   'nsfw': 'NSFW MENU',  
   'intake': 'INTAKE MENU',  
   'random': 'RANDOM MENU',  
   'textpro': 'TEXT PRO MENU',  
   'photooxy': 'PHOTO OXY MENU',  
   } 
   if (teks == 'absen') tags = { 
     'absen': 'ABSEN', 
     'vote': 'VOTING', 
   } 
   if (teks == 'anime') tags = { 
   'anime': 'ANIME', 
   } 
   if (teks == 'sticker') tags = { 
   'sticker': 'CONVERT', 
   } 
   if (teks == 'downloader') tags = { 
   'downloader': 'DOWNLOADER', 
   } 
   if (teks == 'xp') tags = { 
   'xp': 'EXP', 
   } 
   if (teks == 'fun') tags = { 
   'fun': 'FUN', 
   } 
   if (teks == 'game') tags = { 
   'game': 'GAME', 
   } 
   if (teks == 'github') tags = { 
   'github': 'GITHUB', 
   } 
   if (teks == 'group') tags = { 
   'group': 'GROUP', 
   } 
   if (teks == 'image') tags = { 
   'image': 'IMAGE', 
   }
   if (teks == 'info') tags = { 
   'info': 'INFO', 
   } 
   if (teks == 'internet') tags = { 
   'internet': 'INTERNET', 
   } 
   if (teks == 'kerang') tags = { 
   'kerang': 'KERANG', 
   } 
   if (teks == 'maker') tags = { 
   'maker': 'MAKER', 
   } 
   if (teks == 'owner') tags = { 
     'owner': 'Owner', 
     'host': 'Host', 
     'advanced': 'Advanced' 
   } 
   if (teks == 'suara') tags = { 
   'Voice Changer': 'VOICE CHANGE', 
   } 
 if (teks == 'sound') tags = {
    'sound': 'Sound Music'
  }
  if (teks == 'vn') tags = {
    'vn': 'Vn Imuet'
  }
   if (teks == 'text') tags = { 
   'text': 'MAKER TEXT', 
   } 
   if (teks == 'premium') tags = { 
   'premium': 'PREMIUM ', 
   } 
   if (teks == 'quotes') tags = { 
   'quotes': 'QUOTES', 
   } 
   if (teks == 'rpg') tags = { 
   'rpg': 'RPG', 
   } 
   if (teks == 'stalk') tags = { 
   'stalk': 'STALK', 
   } 
   if (teks == 'shortlink') tags = { 
   'shortlink': 'SHORT LINK', 
   } 
   if (teks == 'tools') tags = { 
   'tools': 'TOOLS', 
   } 
   if (teks == 'nsfw') tags = { 
   'nsfw': 'NSFW ',  
   } 
   if (teks == 'intake') tags = { 
   'intake': 'INTAKE ',  
   } 
   if (teks == 'random') tags = { 
   'random': 'RANDOM ',  
   } 
   if (teks == 'textpro') tags = { 
   'textpro': 'TEXT PRO ',  
   } 
   if (teks == 'photooxy') tags = { 
   'photooxy': 'PHOTO OXY ',  
   }
  
  
  
  
  
   try { 
           let hao = `▸ Ⓟ = for premium users.\n▸ Ⓛ = fitur berlimit.
 
 *Official Bot By @${'0'.split('@')[0]}* 
 *Powered By @${'2347086086722'.split('@')[0]}*
 *Powered By @${'436993888888443'.split('@')[0]}*`
 let kakashimp3 = fs.readFileSync('./KakashiMedia/Kakashi.mp3')
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
     let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
     let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}')) 
     let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender] 
     let { min, xp, max } = levelling.xpRange(level, global.multiplier) 
     let umur = `*${age == '-1' ? 'Not Registered*' : age + '* Thn'}` 
     let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender) 
     let d = new Date(new Date + 3600000) 
     let locale = 'id' 
     // d.getTimeZoneOffset() 
     // Offset -420 is 18.00 
     // Offset    0 is  0.00 
     // Offset  420 is  7.00 
     let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5] 
     let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
     let date = d.toLocaleDateString(locale, { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
     }) 
     let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
     }).format(d) 
     let time = d.toLocaleTimeString(locale, { 
       hour: 'numeric', 
       minute: 'numeric', 
       second: 'numeric' 
     }) 
     let flu = `${pickRandom(['https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='])}`
     let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
     let wibh = moment.tz('Asia/Jakarta').format('HH') 
     let wibm = moment.tz('Asia/Jakarta').format('mm') 
     let wibs = moment.tz('Asia/Jakarta').format('ss') 
     let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss') 
     let wita = moment.tz('Asia/Makassar').format('HH:mm:ss') 
     let wktuwib = `${wibh} H ${wibm} M ${wibs} S` 
     const hariRaya = new Date('January 1, 2023 23:59:59') 
     const sekarang = new Date().getTime() 
     const Selisih = hariRaya - sekarang 
     const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24)); 
     const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) 
     const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60)) 
     const ddetik = Math.floor( Selisih % (1000 * 60) / 1000) 
     const hariRayaramadan = new Date('April 21, 2023 23:59:59') 
     const sekarangg = new Date().getTime() 
     const lebih = hariRayaramadan - sekarangg 
     const harii = Math.floor( lebih / (1000 * 60 * 60 * 24)); 
     const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) 
     const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60)) 
     const detikk = Math.floor( lebih % (1000 * 60) / 1000) 
     const ultah = new Date('October 1 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
     let fkon = { key: { fromMe: false, participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {}) }, message: { contactMessage: { displayName: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}} 
     let ftoko = { 
     key: { 
     fromMe: false, 
     participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net', 
     remoteJid: 'status@broadcast', 
   }, 
   message: { 
   "productMessage": { 
   "product": { 
   "productImage":{ 
   "mimetype": "image/jpeg", 
   "jpegThumbnail": await (await fetch('https://i.imgur.com/4rRZ4c7.jpeg')).buffer(),
     }, 
   "title": `${ucapan()}`, 
   "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib, 
   "currencyCode": "US", 
   "priceAmount1000": "100", 
   "retailerId": wm, 
   "productImageCount": 999 
         }, 
   "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net` 
   } 
   } 
   } 
 const fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999,
    status: 1,
    surface : 1,
    message: '[❗] Loading Menu ' + teks + '...',
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch('https://i.imgur.com/4rRZ4c7.jpeg')).buffer(),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Kakashi Md By Turbo And Ajmal`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch('https://i.imgur.com/4rRZ4c7.jpeg')).buffer(),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
     let pe = '```' 
     let { premium, premiumTime } = global.db.data.users[m.sender] 
     let _uptime = process.uptime() * 1000 
     let _muptime 
     if (process.send) { 
       process.send('uptime') 
       _muptime = await new Promise(resolve => { 
         process.once('message', resolve) 
         setTimeout(resolve, 1000) 
       }) * 1000 
     } 
     let emot = `${pickRandom(['❤️','🔥','🇮🇳','🐦','🐧','🦄'])}` 
     let menuvideo = fs.readFileSync('./KakashiMedia/menu.mp4')
     let muptime = clockString(_muptime) 
     let uptime = clockString(_uptime) 
     global.jam = time 
     let totalreg = Object.keys(global.db.data.users).length 
     let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
     let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => { 
       return { 
         help: Array.isArray(plugin.help) ? plugin.help : [plugin.help], 
         tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags], 
         prefix: 'customPrefix' in plugin, 
         limit: plugin.limit, 
         premium: plugin.premium, 
         enabled: !plugin.disabled, 
       } 
     }) 
     if (teks == '404') {
 	let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
 	let mode = global.opts['self'] ? 'Private' : 'Public'
 	let kaka = `${pickRandom(['https://i.imgur.com/4rRZ4c7.jpeg', 'https://i.imgur.com/7c88Zco.jpeg', 'https://i.imgur.com/ihNQ9ky.jpeg', 'https://i.imgur.com/SKUjlZw.jpeg','https://i.imgur.com/imKhdgW.jpeg','https://i.imgur.com/c17uGDe.jpeg'])}` 
 	let ori = `
●────━───༺༻───━────●
                *《 BOT INFO 》*
⚘ *Bot Name: Kakashi Md*
⚘ *Creator: Turbo And Ajmal*
⚘ *Contact Owner Bot*
*http://wa.me/2347086086722*
*http://wa.me/436993888888443*
⚘ *Date: ${date}*  
⚘ *Time: ${time}*
⚘ *Status: 「 ${mode} 」*
⚘ *Prefix: 「 MULTI PREFIX 」*
           
❉───────────────────❉
`
conn.sendMessage(m.chat, {
    	react: {
    		text: emot,
    		key: m.key
    	}
    })	
return conn.send2ButtonVid(m.chat, menuvideo, ori, ` *I Am Kakashi The Copy Ninja I Know 1000 Jutsu I Am Going To Use Them All* 🔥`, 'COMMAND', '.simplemenu', 'OWNER', '.owner', m)
    
    }
  
     let groups = {} 
     for (let tag in tags) { 
       groups[tag] = [] 
       for (let plugin of help) 
         if (plugin.tags && plugin.tags.includes(tag)) 
           if (plugin.help) groups[tag].push(plugin) 
     } 
     conn.menu = conn.menu ? conn.menu : {} 
     let before = conn.menu.before || defaultMenu.before 
     let header = conn.menu.header || defaultMenu.header 
     let body = conn.menu.body || defaultMenu.body 
     let footer = conn.menu.footer || defaultMenu.footer 
     let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Presented by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after 
     let _text = [ 
       before, 
       ...Object.keys(tags).map(tag => { 
         return header.replace(/%category/g, tags[tag]) + '\n' + [ 
           ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => { 
             return menu.help.map(help => { 
               return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help) 
                 .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                 .trim() 
             }).join('\n') 
           }), 
           footer 
         ].join('\n') 
       }), 
       after 
     ].join('\n') 
     text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : '' 
     let replace = { 
       '%': '%', 
       p: _p, uptime, muptime, 
       me: conn.user.name, 
       npmname: package.name, 
       npmdesc: package.description, 
       version: package.version, 
       exp: exp - min, 
       maxexp: xp, 
       totalexp: exp, 
       xp4levelup: max - exp <= 0 ? `Ready for *${_p}levelup*` : `${max - exp} More XP for levelup`, 
       github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]', 
       level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, 
       readmore: readMore 
     } 
     text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name]) 
     //await conn.reply(m.chat, '*L o a d i n g . . .*', fload) 
 
   conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 50000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: text.trim(),
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
//await conn.send3ButtonLoc(m.chat, await conn.resize(await (await fetch('https://api.xteam.xyz/textpro/glitch?text=' + teks + '&text2=Kakashi%20Md%20BY%20Turbo%20And%20Ajmal&APIKEY=bf8ff984af1506b7')).buffer(), 300, 200), '◈┈┉────[ *DASHBOARD* ]────┉┈◈' , text.trim(), 'Owner', '.owner', 'Donasi', '.donasi', 'Rules', '.rules', m)
//await conn.send2ButtonLoc(m.chat, await conn.resize(await (await fetch(flu + teks)).buffer(), 300, 200), text.trim(), `Active During : ${uptime}\n${week} ${date}\n${dateIslamic}`, 'Owner', `${_p}owner`, 'Donasi', `${_p}donasi`, m)
//await conn.send2ButtonImg(m.chat, await (await fetch(`${logos()}`)).buffer(), '──────────[ *DASHBOARD* ]──────────', text, 'OWNER', '.owner', '\n\nI Am Kakashi The Copy Ninja I Know A 1000 Jutsu I Am Going To Use Them All꒪꒳꒪', 'a', fkon, { contextInfo: { forwardingScore: 999, isForwarded: true}})
/*await conn.send2ButtonDoc(m.chat, '──────────[ *DASHBOARD* ]──────────', text, 'OWNER', '.owner', 'Rules', '.rules', m, { 
     quoted: ftoko, 
     contextInfo: { forwardingScore: 99999, isForwarded: true, 
         externalAdReply: { 
             title: 'Kakashi Md Testing Project By Turbo And Ajmal', 
             body: `${pickRandom(['Kakashi Md'])}`, 
             description: `${pickRandom(['Kakashi Md'])}`, 
             mediaType: 2, 
           thumbnail: await (await fetch(`${logos()}`)).buffer(),
          mediaUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}` 
         } 
      } 
     })*/
     //conn.sendFile(m.chat, pp, menuvideo, text.trim(), m).catch(_ => conn.reply(m.chat, text.trim(), m))
conn.sendFile(m.chat, kakashimp3, null, null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `Kakashi Whatsapp Md Bot`, body: `sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`, mediaUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}`, sourceUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}`, thumbnail: await (await fetch('https://i.imgur.com/4rRZ4c7.jpeg')).buffer(),}} 
     })
} catch (e) { 
     conn.reply(m.chat, 'Sorry, the menu is in error', m) 
     throw e 
   } 
 } 
 handler.help = ['menu', 'help', '?']  
 handler.tags = ['main'] 
 handler.command = /^(m(enu)?|help|\?)$/i   
 handler.owner = false 
 handler.mods = false 
 handler.premium = false 
 handler.group = false 
 handler.private = false 
  
 handler.admin = false 
 handler.botAdmin = false 
  
 handler.fail = null 
 handler.exp = 3 
  
 module.exports = handler 
  
 const more = String.fromCharCode(8206) 
 const readMore = more.repeat(4001) 
  
 function clockString(ms) { 
   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 } 
 function logos() { 
   const lgs = moment.tz('Asia/Jakarta').format('HH') 
   res = "Good morning" 
   if (lgs >= 4) { 
     imp = 'https://i.imgur.com/7c88Zco.jpeg' 
   } 
   if (lgs > 10) { 
     imp = 'https://i.imgur.com/ihNQ9ky.jpeg' 
   } 
   if (lgs >= 15) { 
     imp = 'https://i.imgur.com/SKUjlZw.jpeg' 
   } 
   if (lgs >= 18) { 
     imp = 'https://i.imgur.com/imKhdgW.jpeg' 
   } 
   return imp 
 } 
 function dimas() { 
   const varel = moment.tz('Asia/Jakarta').format('HH') 
   res = "Good morning" 
   if (varel >= 4) { 
     dimrel = 'https://i.imgur.com/c17uGDe.jpeg' 
   } 
   if (varel > 10) { 
     dimrel = 'https://i.imgur.com/4rRZ4c7.jpeg' 
   } 
   if (varel >= 15) { 
     dimrel = 'https://i.imgur.com/imKhdgW.jpeg' 
   } 
   if (varel >= 18) { 
     dimrel = 'https://i.imgur.com/SKUjlZw.jpeg' 
   } 
   return dimrel 
 } 
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
     res = "Good night  🌙" 
   } 
   return res 
 }
  
  async function genProfile(conn, m) { 
   let font = await jimp.loadFont('./name.fnt'), 
     mask = await jimp.read('https://i.imgur.com/552kzaW.png'), 
     welcome = await jimp.read(thumbnailUrl.getRandom()), 
     avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')), 
     status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected' 
  
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
  
     await welcome.print(font, 550, 180, 'Name:') 
     await welcome.print(font, 650, 255, m.pushName.slice(0, 25)) 
     await welcome.print(font, 550, 340, 'About:') 
     await welcome.print(font, 650, 415, status) 
     await welcome.print(font, 550, 500, 'Number:') 
     await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
     return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
 }
