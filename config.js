let fs = require('fs')
global.botnamecon = process.env.BOT_NAME
global.owner = process.env.OWNER // Put your number to /src/owner.json
global.tagowner = process.env.TAG_OWNER // Put your number
global.mods = process.env.MODS // Want some help?
global.thumbt = fs.readFileSync('./KakashiMedia/kakashi.jpg')
global.fsx = 999999999999
global.contact = [['916380260672', 'Turbo Mods', true], ['918590508376', 'Ajmal', true] ]
global.APIs = { // API Prefix
  // name: 'https://website'
  turboapis: 'https://turboapis.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  maskser: 'https://api-mask-ser.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  violetics : 'https://violetics.pw',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://turboapis.herokuapp.com': 'TurboMods',
  'https://api.neoxr.eu.org': 'eF6MUU',
  'https://api.xteam.xyz': 'Apikeys',
  'https://melcanz.com': 'Apikeys',
  'https://api.lolhuman.xyz': '5e0b5cf41125348368c4f017',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://violetics.pw': 'beta',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.linkyt = process.env.YT_LINK
global.WM = process.env.WATER_MARK
global.linkgc = process.env.GROUP_LINK
global.linkig = process.env.INSTA_LINK
global.deslink = ''
global.logo = 'https://telegra.ph/file/1665521d176fbf172d735.jpg'
global.titlink = process.env.TITLE_LINK
global.bodlink = process.env.BODY_LINK
global.wait = 'Pʟᴇᴀsᴇ Wᴀɪᴛ A Mɪɴᴜᴛᴇ ...'
global.eror = 'Error Please Report To Developers'

//========Url Template Buttons==========//
global.dtu = '🌏 GROUP OFFICIAL'
global.url = global.linkgc

//============= callButtons ============//
global.callname = '𝒄𝒂𝒍𝒍 𝒐𝒘𝒏𝒆𝒓'
global.callnumber = process.env.CALL_OWNER

//========== Tampilan Bot =============//
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]

//============= Games ================//
global.gameright = '_*Right ✅*_'
global.gamewrong = '_*Wrong❌*_'
global.gamelittmore = "a little more, cheer up :')"

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
