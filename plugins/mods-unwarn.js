let handler = async (m, { conn, args, usedPrefix }) => {
    if (!args || !args[0]) throw 'Who wants to be in Unwar, sir?'
    let mention = m.mentionedJid[0] || m.quoted.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Tag one dear'
    if (!(mention in global.db.data.users)) throw 'User is not registered in DATABASE!!'
    let user = global.db.data.users[mention]
    if (user.banned) throw 'User has been banned!!'
    if ((user.warning * 1) < 1) throw 'User has no warning'
    let count = (args[1] || args.length > 0 ? !isNaN(parseInt(args[1])) ? parseInt(args[1]) : 1 : 1) || 1
    if ((user.warning * 1) < count * 1) throw `User only has *${user.warning * 1}* WARN!!`
    user.warning -= count * 1
    m.reply('Successfully Unwarn user!!')
    conn.sendButton(mention, 'You have been in Unwarn OWNER Or MODERATOR, now you have *' + (global.db.data.users[mention].warning * 1) + '* WARN', wm, 'Owner', usedPrefix + 'owner', null)
}

handler.help = ['unwarn @mention']
handler.tags = ['owner']
handler.command = /^unwarn(user)?$/i
handler.owner = true
handler.fail = null

module.exports = handler
