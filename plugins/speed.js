let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix }) => {
	let tag = `@${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
	let waofc = `@${'0'.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
 let ow = `@${global.owner[0].split('@')[0]}`
 const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: ` Speed ${await conn.getName(conn.user.jid)}`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://i.imgur.com/ihNQ9ky.jpeg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
      let ftr = `
Verify By ${waofc}
Powered By ${ow}`
  await m.reply('_Testing speed..._')
  await conn.delay(2000)
  const chats = Object.keys(await conn.chats)
  const groupsIn = chats.filter(id => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
  await conn.send2ButtonDoc(m.chat, `ðŸ’¬ Status : 
*${groupsIn.length}* Group Chats
*${groupsIn.length}* Groups Joined
*${groupsIn.length - groupsIn.length}* Groups Left
*${chats.length - groupsIn.length}* Personal Chats
*${chats.length}* Total Chats
 
*Server Info* :
RAM: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}
_NodeJS Memory Usage_
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim(), ftr, 'Speedtest', usedPrefix + 'speedtest', 'Menu', usedPrefix + 'Menu', m, { 
 quoted: ftrol,
 contextInfo: {forwardingScore:99999,isForwarded:true, 
 externalAdReply:{ 
 sourceUrl:`${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}`,
 title: `Respond in ${speed} milliseconds`, 
 body: '© Kakashi Md By Turbo And Ajmal', 
 thumbnail: await (await fetch(fla + 'Ping')).buffer()
 } 
 } 
 }) 
 }
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed|info)$/i

module.exports = handler
