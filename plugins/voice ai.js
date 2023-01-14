let handler = async (m, { usedPrefix,command,text }) => {
try{
	let name = m.sender
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '2347086086722@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let fetch = require('node-fetch')
    let kakashi = await fetch(`http://api.brainshop.ai/get?bid=164728&key=MKPsfkgXLZPGrWoH&uid=teamcloseup&msg=${text}`)
    let json = await kakashi.json()
    let {cnt}=json
    let res 
    try { res = await tts(cnt, 'en') }
    catch {
      res = await tts(cnt)
    } finally {
    conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
    }
    //conn.reply(m.chat,cnt)
handler.help = ['ai <message>']
handler.command =  /^(ai|chat)$/i

module.exports = handler


function tts(text, lang = 'en') {
    let gtts = require('node-gtts')
    let fs = require('fs')
    let path = require('path')
    console.log(lang, text)
    return new Promise((resolve, reject) => {
      try {
        let tts = gtts(lang)
        let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
        tts.save(filePath, text, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
        })
      } catch (e) { reject(e) }
    })
  }
