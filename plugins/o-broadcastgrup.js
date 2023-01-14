let handler = async (m, { conn,isOwner, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'the text?'
    m.reply(`Send Broadcast To ${anu.length} Chat, Times up ${anu.length * 0.5} second`)
    for (let i of anu) {
    await delay(500)
    conn.send3TemplateButtonImg(i, 'https://i.imgur.com/c17uGDe.jpeg', pesan, wm, 'Menu', '.menu', 'Owner', '.owner', 'Rules', '.rules', m)
    }
  m.reply(`Successfully Sending Broadcast To ${anu.length} Group`)
}
handler.help = ['bcgc <text>']
handler.tags = ['owner']
handler.command = /^(broadcastgc|bcgc)$/i

handler.owner = true

module.exports = handler