let handler = async (m, { conn, text }) => {

let [number, message, amount] = text.split('|')
if (!number) throw '*[ ⚠️ ] PLEASE INCLUDE THE NUMBER THAT WOULD BE IN THE SPAM MESSAGE!*\n*CORRECT USE:*\n*—◉ #spamwa number|text|amount*\n*amount:*\n*—◉ #spamwa 5219999999999|hai :v|25*'
if (!message) throw '*[ ⚠️ ] PLEASE INCLUDE THE MESSAGE TO SPAM!*\n*USE THE CORRECT:*\n*—◉ #spamwa number|text|number*\n*EXAMPLE:*\n*—◉ #spamwa 5219999999999|respond :v|25*'
if (amount && isNaN(amount)) throw '*[ ⚠️ ] QUANTITY MUST BE A NUMBER!*\n*PROPER USE:*\n*—◉ #spamwa number|text|amount*\n*EXAMPLE:*\n*—◉ #spamwa 5219999999999|respond :v|25*'

let fixedNumber = number.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedAmount = amount ? amount * 1 : 10
if (fixedAmount > 50) throw '*[ ⚠️ ] TOO MANY MESSAGES! QUANTITY MUST BE LESS THAN 50 MESSAGES*️'
await m.reply(`*[❗] SPAM MESSAGE TO THE ${number} NUMBER IT WAS SUCCESSFULLY DONE*\n*NUMBER SENT:*\n*—◉ ${fixedAmount} time!*`)
for (let i = fixedAmount; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['tools']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true

module.exports = handler