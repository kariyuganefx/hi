let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
 let hao = `*Official Bot By @${'0'.split('@')[0]}* 
 *Powered By @${global.owner[1].split('@')[0]}*` 
 let ext= `
┌─〔 TUTORIAL  〕
│ 
├〘 Tutorial EPIC RPG 〙
├➥ *✗claim*
│   Claimable starter pack 
│   every 12 hours
├➥ *✗please*
├➥ *✗adventure*
├➥ *✗adventurer*
│   To find resources like
│   Money, Exp, etc...,required  
│   at least 80 lives to be able 
│   do it and, you dont 
│   get spam because there is a delay of 5 
│   minute
├➥ *✗use potion <amount>*
│   To use a potion/for 
│   filling life/health
├➥ *✗shop buy potion <amount>*
│   To buy a potion and type 
├➥ *✗use potion <amount>*
│   to use potions
├➥ *✗shop <args>*
│   To buy or sell something
├➥ *✗shop buy <crate> <amount>*
│   To buy crate
├➥ *✗profile*
├➥ *✗pp*
├➥ *✗profil*
│   to find out your whatsapp number, etc
├➥ *✗inv*
├➥ *✗inventory*
├➥ *✗bal*
│   To check life, money, etc.
├➥ *✗judi <amount>*
│   *_Dont gamble, because you wont_*
│   *_return on investment. REALLY GK LIE_*
│  
├➥ *©BOT 2022-2023*
└─「 *Tutorial Main BOT* 」

`.trim()
conn.send3ButtonLoc(m.chat, logo, ext, hao, 'Adventure', '.adventure', 'Claim', '.claim', 'Rent Bot', '.rent', m)

}
handler.help = ['tutoriarpgl']
handler.tags = ['main']
handler.command = /^(tutorialrpg|tutorpg)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
