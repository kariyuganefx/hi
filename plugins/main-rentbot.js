let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://i.imgur.com/4rRZ4c7.jpeg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "◈ Made by Turbo And Ajmal",
        "description": `
┌「 *Rent Bot* 」
│     
├ Want To Add Kakashi Md To Your Group?
├ Contact Owner To Add In Your Group
├ Developer: wa.me/916380260672
├ Developer: wa.me/918590508376
│
└────
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "click to see price",
                    "products": [
                        {
                            "productId": "4730029423700586"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4730029423700586",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "918270026275@s.whatsapp.net"
        },
        "footerText": "Developer: wa.me/916380260672\n\nDeveloper: wa.me/918590508376"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['rentbot', 'premium']
handler.tags = ['main']
handler.command = /^(rentbot|premium)$/i

module.exports = handler