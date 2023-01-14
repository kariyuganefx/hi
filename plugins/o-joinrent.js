let handler = async (m, { conn, text, usedPrefix, args, participants }) => {
  var time = db.data.users[m.sender].lastjoin + 86400000
  var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  var delay = time => new Promise(res => setTimeout(res, time))
 
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6285346545126@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  var [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `Where is the link?` 
  if (!code) throw `Invalid link!`
  if (!args[1]) throw `Where is the number??`
  if (isNaN(args[1])) throw `Just a number, representing the day!`
  var anubot = owner[0]
  m.reply(`Wait 3 seconds the bot will join`)
  await delay(3000)
  try {
  var res = await conn.groupAcceptInvite(code)
  var b = await conn.groupMetadata(res)
  var d = b.participants.map(v => v.id)
  var member = d.toString()
  var e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
  var jumlahHari = 86400000 * args[1]
  var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
  else global.db.data.chats[res].expired = now + jumlahHari
  if (e.length) await m.reply(`Successfully invite bot to the group\n\n${await conn.getName(res)}\n\nThe bot will exit automatically after *${msToDate(global.db.data.chats[res].expired - now)}*`)
  if (e.length) await conn.reply(res, `Hey @${anubot} My owner is here, I just want to get out, Im afraid of getting angry.
@${conn.user.jid.split(`@`)[0]} will come out in 5 seconds
Bye😑
Thanks for inviting me *${m.name}*`, fkonn, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `But Boong 🤭`, 0)
     await conn.reply(owner[0]+'@s.whatsapp.net', `*INVITING!*\n\n@${m.sender.split('@')[0]} has invited ${conn.user.name} to group\n\n${await conn.getName(res)}\n\n${res}\n\nMessage : ${args[0]}\n\nThe bot will exit automatically after *${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(owner[0]+'@s.whatsapp.net', `*INVITING!*\n\n@${m.sender.split('@')[0]} has invited ${conn.user.name} to group\n\n${await conn.getName(res)}\n\n${res}\n\nMessage : ${args[0]}\n\nThe bot will exit automatically after *${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`Successfully invite bot to the group\n\n${await conn.getName(res)}\n\nThe bot will exit automatically after *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `Hello Everyone👋🏻
*${conn.user.name}* is a WhatsApp Multi-Device Bot built with Node.js, *${conn.user.name}* Just been invited by *${m.name}*
To use *${conn.user.name}* please type
#menu
@${conn.user.jid.split('@')[0]} will exit automatically after *${msToDate(global.db.data.chats[res].expired - now)}*`
  await conn.send2Button(res, mes, wm, null, [[`Owner`, `.owner`], [`Menu`, `${usedPrefix}menu`]], fkonn, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(owner[0]+'@s.whatsapp.net', e)
      throw `Sorry bots cant join the group!`
      }
}
handler.help = ['joins <chat.whatsapp.com> <day>']
handler.tags = ['owner']
handler.command = /^joinr(ent)?$/i

handler.owner = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " day " + hours + " hours " + minutes + " minutes";
    // +minutes+":"+sec;
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
  seconds = Math.floor((duration / 1000) % 60),
  minutes = Math.floor((duration / (1000 * 60)) % 60),
  hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}