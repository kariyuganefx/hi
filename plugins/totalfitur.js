let handler = async (m, { conn, args, command }) => {
let sender = m.sender
let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.sendFile(m.chat, 'https://a.uguu.se/MVvxdyON.mp3', 'https://a.uguu.se/MVvxdyON.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: `Total Current Bot Features: ${totalf}`, body: `${pickRandom(['Kakashi Md'])}`, sourceUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}`, thumbnail: await (await fetch(pp)).buffer(),}} 
     })
}

handler.help = ['totalfeature']
handler.tags = ['info']
handler.command = ['totalfeature']
module.exports = handler
