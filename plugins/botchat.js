let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command, text }) => {
let emot = conn.pickRandom(["👋","🇮🇳","🐧","🐦","😁"])
let img = await (await fetch('https://i.imgur.com/4rRZ4c7.jpeg')).buffer()
let user = global.db.data.users[m.sender]
conn.sendMessage(m.chat, {
    	react: {
    		text: emot,
    		key: m.key
    	}
    })	
conn.sendButton(m.chat, `hello too bro/sis @${m.sender.split`@`[0]} There Is Any Help I Can Do For ${await conn.getName(conn.user.jid)}?`, wm, 'Menu', '#Menu', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: img
}}})
}
handler.customPrefix = /^(Hallo|halo|Halo|hallo|hi|helo|hai|hi|Hai|Helo|Hello)$/i
handler.command = new RegExp

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Good morning 🎑"
    if (time >= 4) {
        res = "Good Morning 🌅"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Evening 🌃"
    }
    return res
}
