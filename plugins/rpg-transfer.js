let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    if (args.length < 3) {
        return conn.reply(m.chat, `Use format ${usedPrefix}transfer <type> <amount> <@tag>\nusage example: *${usedPrefix}transfer money 100 @${m.sender.split`@`[0]}*`.trim(), m, { mentions: m.sender })
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if(!m.mentionedJid || !args[2]) throw 'Tag one, or type the number!!'
        let users = global.db.data.users
        switch (type) {
            case 'money':
                if (global.db.data.users[m.sender].money >= count * 1) {
                    try {
                        global.db.data.users[m.sender].money -= count * 1
                        global.db.data.users[who].money += count * 1
                        conn.sendButton(m.chat, `Transfer successfully ${rpg.emoticon('money')}money of ${count}`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                    } catch (e) {
                        global.db.data.users[m.sender].money += count * 1
                        m.reply('Transfer Failed ')
                        console.log(e)
                    }
                } else conn.sendButton(m.chat, `Your money is not enough to transfer ${rpg.emoticon('money')}Money of ${count}`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                break
            case 'potion':
                if (global.db.data.users[m.sender].potion >= count * 1) {
                    try {
                        global.db.data.users[m.sender].potion -= count * 1
                        global.db.data.users[who].potion += count * 1
                        conn.sendButton(m.chat, `Transfer successfully ${count} ${rpg.emoticon('potion')}Potion`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                    } catch (e) {
                        global.db.data.users[m.sender].potion += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                    }
                } else conn.sendButton(m.chat, `${rpg.emoticon('potion')}Your potions are not enough`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                break
            case 'sampah':
                if (global.db.data.users[m.sender].sampah >= count * 1) {
                    try {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[who].sampah += count * 1
                        conn.sendButton(m.chat, `Transfer successfully ${count} ${rpg.emoticon('sampah')}Rubbish`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                    } catch (e) {
                        global.db.data.users[m.sender].sampah += count * 1
                        m.reply('Transfer Failed')
                        console.log(e)
                    }
                } else conn.sendButton(m.chat, `${rpg.emoticon('sampah')}Your trash is not enough`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                break
            case 'diamond':
                if (global.db.data.users[m.sender].diamond >= count * 1) {
                    try {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[who].diamond += count * 1
                        conn.sendButton(m.chat, `Berhasil mentransfer ${count} ${rpg.emoticon('diamond')}Diamond`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                    } catch (e) {
                        global.db.data.users[m.sender].diamond += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                    }
                } else conn.sendButton(m.chat, `${rpg.emoticon('diamond')}Your diamond you are not enough`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                break
            case 'common':
                if (global.db.data.users[m.sender].common >= count * 1) {
                    try {
                        global.db.data.users[m.sender].common -= count * 1
                        global.db.data.users[who].common += count * 1
                        conn.sendButton(m.chat, `Berhasil mentransfer ${count} ${rpg.emoticon('common')}Common Crate`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                    } catch (e) {
                        global.db.data.users[m.sender].common += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                    }
                } else conn.sendButton(m.chat, `${rpg.emoticon('common')}Your common crate you are not enough`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                break
            case 'uncommon':
                if (global.db.data.users[m.sender].uncommon >= count * 1) {
                    try {
                        global.db.data.users[m.sender].uncommon -= count * 1
                        global.db.data.users[who].uncommon += count * 1
                        conn.sendButton(m.chat, `Transfer successfully ${count} ${rpg.emoticon('uncommon')}Uncommon Crate`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                    } catch (e) {
                        global.db.data.users[m.sender].uncommon += count * 1
                        m.reply('Transfer Failed')
                        console.log(e)
                    }
                } else conn.sendButton(m.chat, `${rpg.emoticon('uncommon')}Uncommon crate you you are not enough`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                break
            case 'mythic':
                if (global.db.data.users[m.sender].mythic >= count * 1) {
                    try {
                        global.db.data.users[m.sender].mythic -= count * 1
                        global.db.data.users[who].mythic += count * 1
                        conn.sendButton(m.chat, `Berhasil mentransfer ${count} ${rpg.emoticon('mythic')}Mythic Crate`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                    } catch (e) {
                        global.db.data.users[m.sender].mythic += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                    }
                } else conn.sendButton(m.chat, `${rpg.emoticon('mythic')}Mythic crate you you are not enough`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                break
            case 'legendary':
                if (global.db.data.users[m.sender].legendary >= count * 1) {
                    try {
                        global.db.data.users[m.sender].legendary -= count * 1
                        global.db.data.users[who].legendary += count * 1
                        conn.sendButton(m.chat, `Berhasil mentransfer ${count} ${rpg.emoticon('legendary')}Legendary Crate`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                    } catch (e) {
                        global.db.data.users[m.sender].legendary += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                    }
                } else conn.sendButton(m.chat, `${rpg.emoticon('legendary')}Your legendary crate you are not enough`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                break
            default:
                return conn.reply(m.chat, `Use format ${usedPrefix}transfer <type> <amount> <@tag>\nusage example: *${usedPrefix}transfer money 100 @${m.sender.split`@`[0]}*\n\n*Transferable list*\n${rpg.emoticon('money')}Money\n${rpg.emoticon('potion')}Potion\n${rpg.emoticon('sampah')}Rubbish\n${rpg.emoticon('diamond')}Diamond\n${rpg.emoticon('common')}Common\n${rpg.emoticon('uncommon')}Uncommon\n${rpg.emoticon('mythic')}Mythic\n${rpg.emoticon('legendary')}Legendary`.trim(), m, { mentions: m.sender })
        }
    } catch (e) {
        conn.reply(m.chat, `The format you are using is wrong\n\nUse format ${usedPrefix}transfer <type> <amount> <@tag>\nusage example: *${usedPrefix}transfer money 100 @${m.sender.split`@`[0]}*`.trim(), m, { mentions: m.sender })
        console.log(e)
    }
}

handler.help = ['transfer <Args>']
handler.tags = ['rpg']
handler.command = /^(transfer|tf)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
