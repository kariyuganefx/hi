const limit = 2000
const potion = 500
const Spotion = 150 
const Bdiamond = 900
const Sdiamond = 750
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2000 
const Smythic = 500
const Blegendary = 7500 
const Slegendary = 3000
const Bsampah = 10
const Ssampah = 2
const Bkayu = 500
const Skayu = 200
const Bbatu = 500
const Sbatu = 200
const Bstring = 500
const Sstring = 200
const Biron = 800
const Siron = 500

let handler  = async (m, { conn, command, args, usedPrefix }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
${usedPrefix}shop <Buy|sell> <item> <jumlah>\n
Examples of use: *${usedPrefix}shop buy potion 1*\n\n
Item List:\n\n
*♻️Goods                       |💲Purchase price*\n` +
'```' + `
${rpg.emoticon('limit')}Limit          :  ${limit}
${rpg.emoticon('potion')}Potion         :  ${potion}
${rpg.emoticon('diamond')}Diamond        :  ${Bdiamond}
${rpg.emoticon('common')}Common         :  ${Bcommon}
${rpg.emoticon('uncommon')}Uncommon       :  ${Buncommon}
${rpg.emoticon('mythic')}Mythic         :  ${Bmythic}
${rpg.emoticon('legendary')}Legendary      :  ${Blegendary}
${rpg.emoticon('sampah')}Rubbish         :  ${Bsampah}
${rpg.emoticon('armor')}Armor          :  ${armor}
${rpg.emoticon('kayu')}Wood           :  ${Bkayu}
${rpg.emoticon('batu')}Rock           :  ${Bbatu}
${rpg.emoticon('string')}String         :  ${Bstring}
${rpg.emoticon('iron')}Iron           :  ${Biron}`.trim() +
'```'
+ '\n\n*♻️Goods                       | 💲Selling price*\n' +
'```' + `
${rpg.emoticon('potion')}Potion         :  ${Spotion}
${rpg.emoticon('diamond')}Diamond        :  ${Sdiamond}
${rpg.emoticon('common')}Common         :  ${Scommon}
${rpg.emoticon('uncommon')}Uncommon       :  ${Suncommon}
${rpg.emoticon('mythic')}Mythic         :  ${Smythic}
${rpg.emoticon('legendary')}Legendary      :  ${Slegendary}
${rpg.emoticon('sampah')}Rubbish         :  ${Ssampah}
${rpg.emoticon('kayu')}Wood           :  ${Skayu}
${rpg.emoticon('batu')}Rock           :  ${Sbatu}
${rpg.emoticon('string')}String         :  ${Sstring}
${rpg.emoticon('iron')}Iron           :  ${Siron}\n\n
`.trim() + '```'
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'limit':
                            if (global.db.data.users[m.sender].money >= limit * count) {
                                global.db.data.users[m.sender].money -= limit * count
                                global.db.data.users[m.sender].limit += count * 1
                                conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('limit')}Limit with price ${limit * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('limit')}Limit with price ${limit * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'potion':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('potion')}Potion with price ${potion * count} ${rpg.emoticon('money')}money\n\nGunakan ${rpg.emoticon('potion')}Potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, wm, `Gunakan ${rpg.emoticon('potion')}Potion`, usedPrefix + 'heal', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('potion')}Potion with price ${potion * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].money >= Bkayu * count) {
                                global.db.data.users[m.sender].kayu += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('kayu')}Kayu with price ${Bkayu * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('kayu')}Kayu with price ${Bkayu * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'batu':
                            if (global.db.data.users[m.sender].money >= Bbatu * count) {
                                global.db.data.users[m.sender].batu += count * 1
                                global.db.data.users[m.sender].money -= Bbatu * count
                                conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('batu')}Batu with price ${Bbatu * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('batu')}Batu with price ${Bbatu * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break    
                    case 'string':
                            if (global.db.data.users[m.sender].money >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].money -= Bstring * count
                                conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('string')}String with price ${Bstring * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('string')}String with price ${Bstring * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'iron':
                            if (global.db.data.users[m.sender].money >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].money -= Biron * count
                                conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('iron')}Iron with price ${Biron * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('iron')}Iron with price ${Biron * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('diamond')}Diamond with price ${Bdiamond * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('diamond')}Diamond with price ${Bdiamond * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].money -= Bcommon * count
                                conn.send2Button(m.chat, `Good luck buying ${count} ${rpg.emoticon('common')}Common with price ${Bbatu * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'rock common crate', usedPrefix + 'open common', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('common')}Common Crate with price ${Bcommon * count} ${rpg.emoticon('money')}money\n\nOpen the crate by typing: *${usedPrefix}open common*`, wm, 'inventory', usedPrefix + 'inv', 'rock common crate', usedPrefix + 'open common', m)
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].money -= Buncommon * count
                                conn.send2Button(m.chat, `Good luck buying ${count} ${rpg.emoticon('uncommon')}Uncommon with price ${Buncommon * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka uncommon crate', usedPrefix + 'open uncommon', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('uncommon')}Uncommon crate with price ${Buncommon * count} ${rpg.emoticon('money')}money\n\nOpen the crate by typing: *${usedPrefix}open uncommon*`, wm, 'inventory', usedPrefix + 'inv', 'buka uncommon crate', usedPrefix + 'open uncommon', m)
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].money -= Bmythic * count
                                conn.send2Button(m.chat, `Good luck buying ${count} ${rpg.emoticon('mythic')}Mythic with price ${Bmythic * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka mythic crate', usedPrefix + 'open mythic', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('mythic')}Mythic crate with price ${Bmythic * count} ${rpg.emoticon('money')}money\n\nOpen the crate by typing: *${usedPrefix}open mythic*`, wm, 'inventory', usedPrefix + 'inv', 'buka mythic crate', usedPrefix + 'open mythic', m)
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].money -= Blegendary * count
                                conn.send2Button(m.chat, `Good luck buying ${count} ${rpg.emoticon('legendary')}Legendary with price ${Blegendary * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka legendary crate', usedPrefix + 'open legendary', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('legendary')}Legendary crate with price ${Blegendary * count} ${rpg.emoticon('money')}money\n\nOpen the crate by typing: *${usedPrefix}open legendary*`, wm, 'inventory', usedPrefix + 'inv', 'buka legendary crate', usedPrefix + 'open legendary', m)                        
                        break
                    case 'sampah':
                            if (global.db.data.users[m.sender].money >= Bsampah * count) {
                                global.db.data.users[m.sender].sampah += count * 1
                                global.db.data.users[m.sender].money -= Bsampah * count
                                conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('sampah')}Sampah with price ${Bsampah * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('sampah')}Sampah with price ${Bsampah * count} money`.trim(), wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        
                        break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.sendButton(m.chat, `${rpg.emoticon('armor')}Armormu sudah *Level Max*`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('armor')}Armor with price ${armor} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                            } else conn.send2Button(m.chat, `uang mu tidak cukup untuk membeli ${rpg.emoticon('armor')}armor seharga ${armor} ${rpg.emoticon('money')}money`, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                        
                        break
                    default:
                        return conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes sell ${count} Potion with price ${Spotion * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Potion you are not enough`.trim(), m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].kayu >= count * 1) {
                            global.db.data.users[m.sender].money += Skayu * count
                            global.db.data.users[m.sender].kayu -= count * 1
                            conn.reply(m.chat, `Succes sell ${count} Kayu with price ${Skayu * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Kayu you are not enough`.trim(), m)
                        break    
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].money += Sbatu * count
                            global.db.data.users[m.sender].batu -= count * 1
                            conn.reply(m.chat, `Succes sell ${count} Batu with price ${Sbatu * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Batu you are not enough`.trim(), m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].money += Sstring * count
                            global.db.data.users[m.sender].string -= count * 1
                            conn.reply(m.chat, `Succes sell ${count} String with price ${Sstring * count} money`.trim(), m)
                        } else conn.reply(m.chat, `String you are not enough`.trim(), m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].money += Siron * count
                            global.db.data.users[m.sender].iron -= count * 1
                            conn.reply(m.chat, `Succes sell ${count} Iron with price ${Siron * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Iron you are not enough`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes sell ${count} Common Crate with price ${Scommon * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate you are not enough`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes sell ${count} Uncommon Crate with price ${Suncommon * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate you are not enough`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes sell ${count} Mythic Crate with price ${Smythic * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate you are not enough`.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes sell ${count} Legendary Crate with price ${Slegendary * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate you are not enough`.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Succes sell ${count} sampah, and you get ${Ssampah * count} money`, m)
                        } else conn.reply(m.chat, `Sampah you are not enough`, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Succes sell ${count} Diamond, and you get ${Sdiamond * count} money`, m)
                        } else conn.reply(m.chat, `Diamond you are not enough`, m)
                        break
                    default:
                        return conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
                }
                break
            default:
                return conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'limit':
                        if (global.db.data.users[m.sender].limit >= limit * count) {
                            global.db.data.users[m.sender].kayu += count * 1
                            global.db.data.users[m.sender].limit -= limit * count
                            conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('limit')}Limit with price ${limit * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('limit')}Limit with price ${limit * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break
                case 'potion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('potion')}Potion with price ${potion * count} ${rpg.emoticon('money')}money\n\nGunakan ${rpg.emoticon('potion')}Potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, wm, `Gunakan ${rpg.emoticon('potion')}Potion`, usedPrefix + 'heal', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('potion')}Potion with price ${potion * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break
                case 'kayu':
                        if (global.db.data.users[m.sender].money >= Bkayu * count) {
                            global.db.data.users[m.sender].kayu += count * 1
                            global.db.data.users[m.sender].money -= Bkayu * count
                            conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('kayu')}Kayu with price ${Bkayu * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('kayu')}Kayu with price ${Bkayu * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break
                case 'batu':
                        if (global.db.data.users[m.sender].money >= Bbatu * count) {
                            global.db.data.users[m.sender].batu += count * 1
                            global.db.data.users[m.sender].money -= Bbatu * count
                            conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('batu')}Batu with price ${Bbatu * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('batu')}Batu with price ${Bbatu * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break    
                case 'string':
                        if (global.db.data.users[m.sender].money >= Bstring * count) {
                            global.db.data.users[m.sender].string += count * 1
                            global.db.data.users[m.sender].money -= Bstring * count
                            conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('string')}String with price ${Bstring * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('string')}String with price ${Bstring * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break
                case 'iron':
                        if (global.db.data.users[m.sender].money >= Biron * count) {
                            global.db.data.users[m.sender].iron += count * 1
                            global.db.data.users[m.sender].money -= Biron * count
                            conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('iron')}Iron with price ${Biron * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('iron')}Iron with price ${Biron * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    break                
                case 'diamond':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('diamond')}Diamond with price ${Bdiamond * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('diamond')}Diamond with price ${Bdiamond * count} ${rpg.emoticon('money')}money`, wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            conn.send2Button(m.chat, `Good luck buying ${count} ${rpg.emoticon('common')}Common with price ${Bcommon * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'rock common crate', usedPrefix + 'open common', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('common')}Common Crate with price ${Bcommon * count} ${rpg.emoticon('money')}money\n\nOpen the crate by typing: *${usedPrefix}open common*`, wm, 'inventory', usedPrefix + 'inv', 'rock common crate', usedPrefix + 'open common', m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            conn.send2Button(m.chat, `Good luck buying ${count} ${rpg.emoticon('uncommon')}Uncommon with price ${Buncommon * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka uncommon crate', usedPrefix + 'open uncommon', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('uncommon')}Uncommon crate with price ${Buncommon * count} ${rpg.emoticon('money')}money\n\nOpen the crate by typing: *${usedPrefix}open uncommon*`, wm, 'inventory', usedPrefix + 'inv', 'buka uncommon crate', usedPrefix + 'open uncommon', m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            conn.send2Button(m.chat, `Good luck buying ${count} ${rpg.emoticon('mythic')}Mythic with price ${Bmythic * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka mythic crate', usedPrefix + 'open mythic', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('mythic')}Mythic crate with price ${Bmythic * count} ${rpg.emoticon('money')}money\n\nOpen the crate by typing: *${usedPrefix}open mythic*`, wm, 'inventory', usedPrefix + 'inv', 'buka mythic crate', usedPrefix + 'open mythic', m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            conn.send2Button(m.chat, `Good luck buying ${count} ${rpg.emoticon('legendary')}Legendary with price ${Blegendary * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', 'buka legendary crate', usedPrefix + 'open legendary', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('legendary')}Legendary crate with price ${Blegendary * count} ${rpg.emoticon('money')}money\n\nOpen the crate by typing: *${usedPrefix}open legendary*`, wm, 'inventory', usedPrefix + 'inv', 'buka legendary crate', usedPrefix + 'open legendary', m)
                    break
                case 'sampah':
                        if (global.db.data.users[m.sender].money >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].money -= Bsampah * count
                            conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('sampah')}Sampah with price ${Bsampah * count} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)
                        } else conn.send2Button(m.chat, `Your money is not enough to buy ${count} ${rpg.emoticon('sampah')}Sampah with price ${Bsampah * count} money`.trim(), wm, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)
                    
                    break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.sendButton(m.chat, `${rpg.emoticon('armor')}Armormu sudah *Level Max*`.trim(), wm, 'inventory', usedPrefix + 'inv', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            conn.sendButton(m.chat, `Good luck buying ${count} ${rpg.emoticon('armor')}Armor with price ${armor} ${rpg.emoticon('money')}Money`, wm, 'inventory', usedPrefix + 'inv', m)                          
                        } else conn.send2Button(m.chat, `uang mu tidak cukup untuk membeli ${rpg.emoticon('armor')}armor seharga ${armor} ${rpg.emoticon('money')}money`, 'inventory', usedPrefix + 'inv', 'claim', usedPrefix + 'claim', m)

                    break
                default:
                    return conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes sell ${count} Potion with price ${Spotion * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Potion you are not enough`.trim(), m)
                    break
                case 'kayu':
                    if (global.db.data.users[m.sender].kayu >= count * 1) {
                        global.db.data.users[m.sender].money += Skayu * count
                        global.db.data.users[m.sender].kayu -= count * 1
                        conn.reply(m.chat, `Succes sell ${count} Kayu with price ${Skayu * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Kayu you are not enough`.trim(), m)
                    break    
                case 'batu':
                    if (global.db.data.users[m.sender].batu >= count * 1) {
                        global.db.data.users[m.sender].money += Sbatu * count
                        global.db.data.users[m.sender].batu -= count * 1
                        conn.reply(m.chat, `Succes sell ${count} Batu with price ${Sbatu * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Batu you are not enough`.trim(), m)
                    break
                case 'string':
                    if (global.db.data.users[m.sender].string >= count * 1) {
                        global.db.data.users[m.sender].money += Sstring * count
                        global.db.data.users[m.sender].string -= count * 1
                        conn.reply(m.chat, `Succes sell ${count} String with price ${Sstring * count} money`.trim(), m)
                    } else conn.reply(m.chat, `String you are not enough`.trim(), m)
                    break
                case 'iron':
                    if (global.db.data.users[m.sender].iron >= count * 1) {
                        global.db.data.users[m.sender].money += Siron * count
                        global.db.data.users[m.sender].iron -= count * 1
                        conn.reply(m.chat, `Succes sell ${count} Iron with price ${Siron * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Iron you are not enough`.trim(), m)
                    break                
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes sell ${count} Common Crate with price ${Scommon * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate you are not enough`.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes sell ${count} Uncommon Crate with price ${Suncommon * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate you are not enough`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes sell ${count} Mythic Crate with price ${Smythic * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate you are not enough`.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes sell ${count} Legendary Crate with price ${Slegendary * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate you are not enough`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Succes sell ${count} sampah, and you get ${Ssampah * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Sampah you are not enough`.trim(), m)
                    break
                case 'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Succes sell ${count} Diamond, and you get ${Sdiamond * count} money`, m)
                    } else conn.reply(m.chat, `Diamond you are not enough`, m)
                    break
                default:
                    return conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
            }
        }
    } catch (e) {
        conn.send3Button(m.chat, Kchat, wm, `beli ${rpg.emoticon('potion')}potion`, usedPrefix + 'shop buy potion', `beli ${rpg.emoticon('limit')}limit`, usedPrefix + 'shop buy limit', `beli ${rpg.emoticon('armor')}armor`, usedPrefix + 'shop buy armor', m)
        console.log(e)
    }
}

handler.help = ['shop <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|toko|beli|sell|jual)$/i
handler.register = false

module.exports = handler