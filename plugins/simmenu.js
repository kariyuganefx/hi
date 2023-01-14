let levelling = require('../lib/levelling') 
 let fs = require('fs') 
 let path = require('path') 
 let fetch = require('node-fetch') 
 let moment = require('moment-timezone') 
 let jimp = require('jimp') 
 let PhoneNumber = require('awesome-phonenumber') 
let handler = async (m, { conn, usedPrefix: _p, args, command }) => { 
	let hao = ` 
 *Official Bot By @${'0'.split('@')[0]}* 
 *Powered By @${'2347086086722'.split('@')[0]}*
 *Powered By @${'918590508376'.split('@')[0]}*` 
  let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Not Registered*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
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
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const hariRaya = new Date('January 1, 2023 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const hariRayaramadan = new Date('April 21, 2023 23:59:59')
    const sekarangg = new Date().getTime()
    const lebih = hariRayaramadan - sekarangg
    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));
    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))
    const detikk = Math.floor( lebih % (1000 * 60) / 1000)
    const ultah = new Date('April 5, 2023 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    const natal = new Date('December 25, 2022 23:59:59')
    const kapanatal = new Date().getTime() 
    const natalnya = natal - kapanatal
    const nhari = Math.floor( natalnya / (1000 * 60 * 60 * 24));
    const njam = Math.floor( natalnya % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const nmenit= Math.floor( natalnya % (1000 * 60 * 60) / (1000 * 60))
    const mdetek = Math.floor( natalnya % (1000 * 60) / 1000)
    let pe = '```'
    let { premium, premiumTime } = global.db.data.users[m.sender]
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mode = global.opts['self'] ? 'Private' : 'Public'
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let user = db.data.users[m.sender]
  let id = m.chat
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let sender = m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
const fkgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "994403219940-1631515755@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":`Kakashi Md 🌱 ┊ Whatsapp Md Bot`,
                 "title": `Kakashi Md 🌱 ┊ Whatsapp Md Bot`,
                 'jpegThumbnail': await (await fetch('https://i.imgur.com/ihNQ9ky.jpeg')).buffer()
                        }
	                  } 
                     }
                     
                     let tksk = `${pe}${ucapan()}, @${m.sender.split`@`[0]} ${pickRandom(['😅', '🥰', '😜'])}${pe}

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
               *《 USER INFO 》*
◦ *Name: ${name}*
◦ *Status :* ${premium ? 'Premium' : 'Free'} User
◦ *Limit: ${limit}*
◦ *Your Wa:* wa.me/${m.sender.split('@')[0]}

             *《 YOUR PROGRESS 》*
◦ *Level: ${level}*
◦ *XP: ${exp}*
◦ *Rank: ${role}*

●────━───༺༻───━────●
             *《 BOT STATUS 》*
❏ *Runtime ${uptime}*
𒍮 *User Register: ${totalreg}*
●────━───༺༻───━────●`

let ftt = `*Note:* If you find bugs, errors or difficulties in use, please report/ask the Owner

 *Official Bot By @${'0'.split('@')[0]}* 
 *Powered By @${'2347086086722'.split('@')[0]}*
 *Powered By @${'436993888888443'.split('@')[0]}*`
       let judul = `${ucapanl()}`.trim() 
       const sections = [
                              {
                                "rows": [{
                                         "title": "📊 › Status ",
                                         "description": "Status カ Kakashi Md",
                                         "rowId": ".botstat"
                                    }, {
                                         "title": "⚡› Speed ",
                                         "description": "Display Response Speed カ Kakashi Md",
                                         "rowId": ".ping"
                                    }, {
                                         "title": "🗒️› Info ",
                                         "description": "Showing Info カ Kakashi Md",
                                         "rowId": ".info"
                                    }, {
                                         "title": "🎐 › Bot Developer ",
                                         "description": "Contact Creator",
                                         "rowId": ".owner"
                                    }, {
                                         "title": "❗ › Terms And Conditions ",
                                         "description": "Cultivate Reading Before Using Bots",
                                         "rowId": ".rules"
                                    }, {
                                         "title": "🪙 ›  Leaderboard",
                                         "description": "Check Your Position",
                                         "rowId": ".lb"  
                                    }, {
                                         "title": "💌 › Group Official Bot",
                                         "description": "Join to get information about bots or just to enliven",
                                         "rowId": ".gcbot"                               
      }],             
                    "title": "▮Status 」"
                }, {
                  "rows": [{
                  "title": "「 💬 」› All Orders",
                  "description": "Show all the features of the bot",
                  "rowId": ".? all"
                }, {              
                  "title": "「 🎮 」› Game ",
                  "description": "Showing the features of the game",
                  "rowId": ".? game"
                }, {
                  "title": "「 🌱 」› Rpg ",
                  "description": "Showing the features of rpg ! ",
                  "rowId": ".? rpg"
                }, {
                  "title": "「 📈 」› Exp & Limit ",
                  "description": "Showing the features of xp",
                  "rowId": ".? xp"
                }, {
                  "title": "「 🧩 」› Fun ",
                  "description": "Showing the features of fun",
                  "rowId": ".? fun"
                }, {
                  "title": "「 🎁 」› Gift ",
                  "description": "Showing the features of the gift!",
                  "rowId": ".? gift"
                }, {
                  "title": "「 🔞 」› Nsfw ",
                  "description": "Showing the features of nsfw",
                  "rowId": ".? nsfw"
                }, {
                  "title": "「 ⛩️ 」› Anime ",
                  "description": "Featuring features from anime",
                  "rowId": ".? anime"
                }, {
                  "title": "「 📰 」› News ",
                  "description": "Showing the features of the news",
                  "rowId": ".? News"
                }, {
                  "title": "「 📚 」› Education ",
                  "description": "Showing the features of education",
                  "rowId": ".? education"
                }, {
                  "title": "「 🖼️ 」› Random Pict ",
                  "description": "Show features from photos",
                  "rowId": ".? image"
                },  {
                  "title": "「 🎫 」› Sticker ",
                  "description": "Showing the features of the sticker",
                  "rowId": ".? stiker"
                }, {
                  "title": "「 🐚 」› Magic Shell",
                  "description": "Featuring the features of magic shells",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "「 🎵 」› Sound Music ",
                  "description": "Featuring features of sound music",
                  "rowId": ".? sound"
                }, { 
                  "title": "「 🎧 」› Random Vn",
                  "description": "Show features of rendom vn",
                  "rowId": ".? vn"                                                      
                }, {
                  "title": "「 📑 」› Quotes ",
                  "description": "Showing the features of random text",
                  "rowId": ".? quotes"
                }, {
                  "title": "「 🏛️  」› Group Settings ",
                  "description": "Showing features from group settings",
                  "rowId": ".? admin"
                }, {
                  "title": "「 👥 」› Group ",
                  "description": "Showing the features of the group",
                  "rowId": ".? grup"
                }, {
                  "title": "「 🌟 」› Premium ",
                  "description": "Featuring features from premium",
                  "rowId": ".? premium"
                }, {
                  "title": "「 💻 」› Internet ",
                  "description": "Showing the features of the internet",
                  "rowId": ".? internet"
                }, {
                  "title": "「 🖊️ 」› Editz Menu ",
                  "description": "Showing the features of the logo",
                  "rowId": ".? nulis"
                }, {
                  "title": "「 📩 」› Downloader ",
                  "description": "Show features of download",
                  "rowId": ".? downloader"
                }, {
                  "title": "「 🎭 」›  Anonymous Chat",
                  "description": "Showing the features of anonymous chat",
                  "rowId": ".? anonymous"  
                }, {              	
                  "title": "「 🧰 」› Tools ",
                  "description": "Showing the features of the tools",
                  "rowId": ".? tools"
                }, {
                  "title": "「 📂 」› Database ",
                  "description": "Showing the features of the database",
                  "rowId": ".? database"
                }, {
                  "title": "「 🗳️ 」› Vote ",
                  "description": "Showing the features of the vote",
                  "rowId": ".? vote"
                }, {
                  "title": "「 🎙️ 」› Voice Changer ",
                  "description": "Showing features of voice changer ",
                  "rowId": ".? audio"
                }, {
                  "title": "「 ℹ️ 」› Info ",
                  "description": "Show features from info",
                  "rowId": ".? info"
                }, {
                  "title": "「 ❓ 」› No Category ",
                  "description": "Showing features from no categories",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "「 👩🏻‍💻 」› Owner ",
                  "description": "Showing the features of the owner",
                  "rowId": ".? owner"
                }],
                                "title": "▮Category 」"
                                }, {
                                "rows": [{                                	
                                "title": "📝 ∫  Change Note ",
                                "description": "Last Update Of Kakashi Md",
                                "rowId": ".notes"                  
                }],                
                                "title": "▮Last Update 」"
                                }, {
                                "rows": [{                                	
                  "title": "「 🗨️ 」› Chat ",
                  "description": "Chat With Others",
                  "rowId": ". start"
                }],
                                "title": "▮Anonymous Chat 」"
                                }, {
                                "rows": [{                                	
                                         "title": "📣 › Group Setting ",
                                         "description": "Setting Grup",
                                         "rowId": ".setelangrub" 
                                     }, {
                                         "title": "⚙️ › Bot Setting ",
                                         "description": "Setting Bot",
                                         "rowId": ".botsett" 
                 }],
                                "title": "▮Arrangement 」" 
                                }, {
                                "rows": [{
                                "title": "🗳️ ∫  Donasi ",
                                "description": "No Need Of Donation",
                                "rowId": ".donasi"
                                }, {
                                "title": "🔖 ∫  Rent bot - Premium ",
                                "description": "For those of you who want to see a list of rental and premium prices",
                                "rowId": ".sewa"
                                }, {
                                "title": "🌟 ∫  Premium ",
                                "description": "Showing premium price list",
                                "rowId": ".premium"
                                }, {
                                "title": "🔬  ∫  Source Code ",
                                "description": "Displaying the Bot's Source Code",
                                "rowId": ".sc"
                                }, {
                                "title": "💭 ∫  Questions About This Bot ",
                                "description": "Especially WhatsApp users whose numbers start with +212",
                                "rowId": ".QnA"
                                }, {
                                "title": "☎️ ∫  Closing remarks ",
                                "description": "Thank you for users who have used bots, if there is an error or request, you can chat to the owner's number\nNote: chat P/main² will not be responded to (users can be banned/blocked)",
                                "rowId": ".creator"
                                }], 
                    "title": "▮More Info 」"
                }, {
                  "rows": [{
                  "title": "🥇「 Contributor 」",
                  "description": "Thank you very much for the users who have participated",                  
                  "rowId": ".? thnks"
                       }],
                                "title": "▮Thanks To  」"
                            }
           ] 
    const listMessage = {
      text: `Hi ${name} Choose the menu below, bro`.trim(),
      footer: 'Kakashi Md',
      title: judul,
      buttonText: "Choose Here",
      sections
    }
     await conn.send3ButtonLoc(m.chat, await conn.resize(await genProfile(conn, m), 300, 180), tksk, ftt, 'RENT', '.rent', 'OWNER', '.owner', 'CREDITS', '.tqto', m)
     //await conn.send3ButtonLoc(m.chat, await conn.resize(pp, 300, 300), tksk, ftt, 'RENT', '.sewa', 'OWNER', '.owner', 'CREDITS', '.tqto', m)
    return conn.sendMessage(m.chat, listMessage, { quoted: fkgif, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }
handler.help = ['simplemenu'] 
handler.tags = ['main']
handler.command = /^(simplemenu)$/i
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
 function ucapan() { 
   const time = moment.tz('Asia/Jakarta').format('HH') 
   res = "Good morning" 
   if (time >= 4) { 
     res = "Good morning" 
   } 
   if (time > 10) { 
     res = "Good afternoon" 
   } 
   if (time >= 15) { 
     res = "Good afternoon" 
   } 
   if (time >= 18) { 
     res = "Good night" 
   } 
   return res 
 } 
 function ucapanl() {
    const timel = moment.tz('Asia/Jakarta').format('HH')
    resl = "Good morning 🎑"
    if (timel >= 4) {
        resl= "Good Morning 🌅"
    }
    if (timel > 10) {
        resl = "Good Afternoon 🏞️"
    }
    if (timel >= 15) {
        resl = "Good Afternoon 🌇"
    }
    if (timel >= 18) {
        resl = "Good Evening 🌃"
    }
    return resl
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
