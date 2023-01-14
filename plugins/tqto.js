/**
* don't delete/replace
* You're just making up so don't do anything, bitch
* it's better if you add your name, don't delete the credit
**/

let handler = async (m, { conn, usedPrefix }) => {
    let tqto = `*BIG THANKS TO*
──────────────────────
• Turbo
• Ajmal
• Nurutomo
• Adiwajshing
• Ariffb
• Amel
• IrwanX
• Dawnfrosty
• Rteam1
• Beniismael
• Raditya 
• AlyaaXzy 
• Haori 
• David
• Rozi
• Letta
• Yanzz
• Furqan
• Elyas
• Rasel
• Xteam
• Khael
• Atenabot
• Baka Botz
• ZeeoneOfc
• Zeks
• Rendycraft  
• Krizynofc
• Nadin
• Mursid
• Jarot
• Tio
• Aca Mirabel
• Penyedia Layanan API
──────────────────────`
await conn.sendButtonLoc(m.chat, await conn.resize('https://i.imgur.com/c17uGDe.jpeg', 300, 300),  tqto, `This is a thank you to people who have participated

Official By @${'0'.split('@')[0]}`, 'Rules', '.rules', m)
}
handler.help = ['credits']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
