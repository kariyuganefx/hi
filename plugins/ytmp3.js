let fetch = require('node-fetch')
const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let handler = async(m, { conn, args, }) => {

if (args && /(?:https?:\/{2})?(?:w{3}|m|music)?\.?youtu(?:be)?\.(?:com|be)(?:watch\?v=|\/)([^\s&]+)/i.test(args[0])) {
    let opt = args[1] && args[1].isNumber() ? args[1].replace(/\D/g, '') : ''
    let res = await fetch(`https://yt-downloader.aliefputra.repl.co/yt?url=${args[0]}`)
    res = await res.json()
    if (!res) res = ''
    let { description, ownerChannelName, viewCount, uploadDate, likes, dislikes } = res.result.videoDetails
    let { thumbnail, video: _video, title } = await youtubedlv2(args[0]).catch(async _ => await youtubedl(args[0])).catch(async _ => await youtubedlv3(args[0]))
    m.reply(wait)
    let video, quality, link, lastError //, source
    for (let i in _video) {
      try {
        video = _video[i]
        quality = video.quality
        console.log(video)
        if ( 1080p/.test(quality) || !quality.includes(opt)) continue
        link = await video.download()
        if (link) break
        // if (source instanceof ArrayBuffer) break
      } catch (e) {
        video = quality = link = null
        lastError = e
        continue
      }
    }
    if (!link) throw 'Error: ' + (lastError || 'Can\'t download video')
    let _thumb = {}
    try { _thumb = { jpegThumbnail: await (await fetch(thumbnail)).buffer() } }
    catch (e) { }
    await conn.sendMessage(m.chat, { [/^(?:-|--)doc$/i.test(args[1]) || 'document' : 'video']: { url: link }, fileName: `${title}.mp4`, mimetype: 'video/mp4', ..._thumb }, { quoted: global.adReply },{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: global.linkig,
      mediaType: "VIDEO",
      description: global.bodlink, 
      title: 'Kakashi Md',
      body: global.WM,
      thumbnail: global.thumbt,
      sourceUrl: global.linkig
    }}}).then(async (msg) => {
      let caption = `*Tɪᴛʟᴇ:* ${title}\n*ǫᴜᴀʟɪᴛʏ:* ${quality}\n*ᴄʜᴀɴɴᴇʟ:* ${ownerChannelName || ''}\n*ᴠɪᴇᴡs:* ${viewCount}\n*ᴜᴘʟᴏᴀᴅ ᴅᴀᴛᴇ:* ${uploadDate}${likes ? `\n*ʟɪᴋᴇs:* ${likes}` : ''}${dislikes ? `\n*ᴅɪsʟɪᴋᴇ*: ${dislikes}` : ''}${description ? `\n*ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:*\n${description}` : ''}`.trim()
      await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption }, { quoted: msg })
    })
  } else throw 'Invalid URL'
}
handler.help = ['ytmp4']
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i

module.exports = handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}
