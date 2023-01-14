let handler  = async (m, { conn, command, args, usedPrefix }) => {
    let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Wrong format cake  :v', 'error bro', 'funny error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dalah (emot stone) error']))
    try {
        let msgkurang = (pickRandom(['your potion is not enough', 'ciaa not enough potions  :v', 'wtf is not enough :v', 'buy potions first, potions are not enough', 'Two potions are not enough', 'eyyyy potionmu kurang', 'buy it first, cook, want to use potions but there are no potions :v', 'ask someone else to transfer the potion, so that the potion is not lacking :v', 'Belly Fashion Dulu Cake']))
        let msgpenuh = (pickRandom(['Your life is full', 'look at your inv, your life is already 100, why use potions again?', 'Your health is full wowy', 'its full :v', 'your life is full :v', 'uh huh, already full']))
        let kucing = global.db.data.users[m.sender].kucing
        let usepotion = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '')
        let healt = global.db.data.users[m.sender].healt
        if (/use|pakai/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                 let msgsucces = (pickRandom(['success wearing', 'Nice success using', 'managed to drink ', 'primitive you use', 'you wear', 'you use']) + ' *' + (count * 1) + `* ${rpg.emoticon('potion')}Potion`)
                 if (args[0] === 'potion') {
                    if (global.db.data.users[m.sender].healt < 100) {
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].potion -= count * 1
                            global.db.data.users[m.sender].healt += usepotion * count
                            conn.send2Button(m.chat, msgsucces, wm, 'inventory', usedPrefix + 'inv', 'adventurer', usedPrefix + 'work', m)
                        } else conn.send2Button(m.chat, msgkurang, wm, 'beli potion', usedPrefix + 'buy potions', 'cek inv', usedPrefix + 'inv', m)
                    } else conn.send2Button(m.chat, msgpenuh, wm, 'inventory', usedPrefix + 'inv', 'adventurer', usedPrefix + 'work', m)
                } else if (args.length > 2 && args[0] === !'potion') conn.send2Button(m.chat, pickRandom(['Can only use potions', 'What do you want to use? Can only use potions :v', 'Wow, what do you want to use, you can only do potions', 'Wow, only potions', 'Well, what do you want to use?, you can only do potions']) + '\nExamples of use: *' + usedPrefix + 'use potion 1*', wm, 'Use 1 potion', usedPrefix + 'use potion 1', 'gunakan 2 potion', usedPrefix + 'use potion 2', m)
            } catch (e) {
                console.log(e)
                throw msgerror
            }
        } else if (/heal/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                let msgsucces = (pickRandom(['success wearing', 'Nice success using', 'managed to drink ', 'primitive you use', 'you wear', 'you use']) + ' *' + (count * 1) + `* ${rpg.emoticon('potion')}Potion`)
                if (global.db.data.users[m.sender].healt < 100) {
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].potion -= count * 1
                        global.db.data.users[m.sender].healt += usepotion * count
                        conn.send2Button(m.chat, msgsucces, wm, 'inventory', usedPrefix + 'inv', 'adventurer', usedPrefix + 'work', m)
                    } else conn.send2Button(m.chat, msgkurang, wm, 'beli potion', usedPrefix + 'buy potions', 'cek inv', usedPrefix + 'inv', m)
                } else conn.send2Button(m.chat, msgpenuh, wm, 'inventory', usedPrefix + 'inv', 'adventurer', usedPrefix + 'work', m)
            } catch (e) {
                console.log(e)
                throw msgerror
            }
        }
    } catch (e) {
        console.log(e)
        throw msgerror
    }
}

handler.help = ['use <item> <amount>', 'heal']
handler.tags = ['rpg']
handler.command = /^(use|heal)$/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
