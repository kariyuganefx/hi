let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send3ButtonImg(m.chat, await (await fetch(fla+ 'Rules')).buffer(),`
*Rules Bot*:
1. No calls/vc bots
2. Please give pause when using bot (dont spam)
3. It is forbidden to exploit bots
4. It is forbidden to buy and sell bots, because these bots are free to use
5. Bot does not save user data
6. We are not responsible for what the user does to the bot or otherwise
7. Avoid pornographic content (in the form of images, documents, videos, and stickers)
8. A bot that has been kicked from the group means the rental period is over

*Privacy Policy*
 1. bot will not record user chat history data. 
 2. bots will not share user numbers. 
 3. bots will not save media submitted by users. 
 4. bots will not abuse data data users. 
 5. The owner of the bot has the right to view the chat history data of users. 
 6. Owner bot has the right to see the status of users. 
 7. The owner of the bot can see the chat history, and the media sent by users.
 
 *Terms & Policy Of Bot*
 1. The bot will leave the group when its time to leave. 
 2. bots can ban users unilaterally regardless of wrong users or not. 
 3. bots *will not be responsible for anything that users do to the bot features.* 
 4. bots will impose penalties: block or ban on users who violate the rules. 
 5. bot is responsible for fatal errors in programming and owner.

Be thankful because you dont have to pay to use this bot, use it wisely, dont over do it.

Be a smart user and good luck!
`.trim(), 'Kakashi Md ©2022 By Turbo And Ajmal', '⋮☰ Menu', '.menu', 'Owner', '.owner', 'Donate', '.donasi', m, {
    quoted: m,
    contextInfo: {
        externalAdReply: {
            title: 'Please follow the rules bro >~<',
            body: `${pickRandom(['Kakashi Md','The Copy Ninja Kakashi Hatake 🔥','By Turbo And Ajmal'])}`,
            description: `${pickRandom(['Kakashi Md','The Copy Ninja Kakashi Hatake 🔥','By Turbo And Ajmal'])}`,
            mediaType: 2,
          thumbnail: await (await fetch('https://i.imgur.com/3ZHCEZU.jpeg')).buffer(),
         mediaUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}` 
        }
     }
    })
handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(snk|syarat|peraturan|rules)$/i

module.exports = handler

let wm = global.botwm
