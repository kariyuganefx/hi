let fetch = require('node-fetch')
let img = fs.readFileSync('./KakashiMedia/kakashi.jpg')
let handler = async (m, { conn }) => conn.send3ButtonImg(m.chat, img,
`Hi @${m.sender.split('@')[0]} 

◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ https://github.com/TURBOHYPER/Kakashi-Md
│ *Base :* 
│ ╰ https://github.com/Ajmal-Achu/Wizard-Ser
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Dont forget to ask the owners permission before using the script bro!
• Dont forget to give a star & give credit

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Bot Owner', '#owner', 'Rules', '#rules' ,'Menu', '#menu', m)
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|git|script|github)$/i

module.exports = handler
