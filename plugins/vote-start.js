let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) return conn.sendButton(m.chat, 'There are still votes in this chat!', wm, 'Delete', `${usedPrefix}-vote`, m)
    conn.send2Button(m.chat, `Voting starts!
*${usedPrefix}upvote* - to agree
*${usedPrefix}devote* - to disagree
*${usedPrefix}cekvote* - to check the vote
*${usedPrefix}deletevote* - to delete votes`, wm, 'Upvote', `${usedPrefix}upvote`, 'Devote', `${usedPrefix}devote`, m)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['start [reason]']
handler.tags = ['vote']
handler.command = /^(start|mulai|\+)vote$/i

handler.group = true

module.exports = handler
