let { lyrics, lyricsv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Use example ${usedPrefix}${command} look at me`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
Lyrics *${result.title}*
Author ${result.author}
${result.lyrics}
Url ${result.link}
`.trim())
}
handler.help = ['lyrics <name>']
handler.tags = ['search']
handler.command = /^lyrics$/i


module.exports = handler