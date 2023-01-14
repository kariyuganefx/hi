let handler  = async (m, { conn }) => {
 await conn.relayMessage(m.chat, { requestPaymentMessage: {
  noteMessage: { extendedTextMessage: { text: global.thumbt,
  currencyCodeIso4217: 'USD',
  requestFrom: '0@s.whatsapp.net',
  expiryTimestamp: 8600,
  amount: 10000,
  background: global.fsx
}}}}, {})
}

handler.command = /^pay$/i
module.exports = handler