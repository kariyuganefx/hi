let fetch = require('node-fetch') 
let split = '|'
 let handler = async (m, { conn, usedPrefix: _p, text: txt, args, command }) => { 
    let dude = 'nominal?'
let [text, ...text2] = txt.replace(dude, '').trimStart().split(split)
  text2 = text2.join(split)
if (!text) throw `Enter Text
Example : ${_p}${command} Turbo|Ajmal`
if (!text2) throw `Enter Text
Example : ${_p}${command} Turbo|Ajmal`
   m.reply('_Process..._') 
   let res = `https://api.xteam.xyz/textpro/glitch?text=${text}&text2=${text2}&APIKEY=bf8ff984af1506b7` 
   conn.sendFile(m.chat, res, `${command}`, wm3, m, false) 
 } 
 handler.help = ['glitch'].map(v => v + ' <text>|<text>') 
 handler.tags = ['textpro'] 
 handler.command = /^(glitch)$/i 
  
 module.exports = handler
