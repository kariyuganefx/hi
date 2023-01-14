let fs = require('fs')
let fetch = require('node-fetch')
let handler = m => m
handler.all = async function (m) {
	let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		global.axios = require('axios')
		global.request = require('request')
		global.users = global.db.data.users[m.sender]
		global.chats = global.db.data.chats[m.chat]
        
		global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		
        global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./KakashiMedia/kakashi.jpg'), thumbnail: require('fs').readFileSync('./KakashiMedia/kakashi.jpg'),sendEphemeral: true}}}
        
        global.fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "994403219940-1631515755@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "999999999999",
                 "ptt": "true"
                        }
	                  } 
                     }
        
         global.ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "994403219940-1631515755@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":wm,
                 "title": wm,
                 'jpegThumbnail': fs.readFileSync('./KakashiMedia/kakashi.jpg')
                        }
	                  } 
                     }
        
           global.fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"by : Turbo And Ajmal","h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./KakashiMedia/kakashi.jpg')}}
	}
        
	       global.fliveLoc2 = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "title": "Turbo And Ajmal","h": wm, 'jpegThumbnail': fs.readFileSync('./KakashiMedia/kakashi.jpg')}}
	}
	
	global.fpayment = {
				"key": {
					"remoteJid": "0@s.whatsapp.net",
					"fromMe": false,
					"id": "BAE595C600522C9C",
					"participant": "0@s.whatsapp.net"
				},
				"message": {
					"requestPaymentMessage": {
						"currencyCodeIso4217": global.WM,
						"amount1000": global.fsx,
						"requestFrom": "0@s.whatsapp.net",
						"noteMessage": {
							"extendedTextMessage": {
								"text": "Hai Bro"
							}
						},
						"expiryTimestamp": global.fsx,
						"amount": {
							"value": global.fsx,
							"offset": global.fsx,
							"currencyCode": global.WM
						}
					}
				}
			}
	
	global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				//isForwarded: true, // This is so that the writing is continued many times, if you want to remove it, change true to false
				externalAdReply: { // This part is for you to be creative :'v
                    showAdAttribution: true,
					title: global.titlink,
					body: global.bodlink,
					mediaUrl: global.linkig,
					description: global.WM,
					previewType: "PHOTO",
					thumbnail: fs.readFileSync('./KakashiMedia/kakashi.jpg'),
					sourceUrl: "https://github.com/TURBOHYPER",					
				}
			}
		}
		
		global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: global.linkig,
            mediaType: "VIDEO",
            description: global.WM, 
            title: global.titlink,
            body: global.bodlink,
            thumbnailUrl: fs.readFileSync('./KakashiMedia/kakashi.jpg'),
            sourceUrl: global.linkig
    }
    } }
global.fakefb = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: "https://Facebook.com/",
            mediaType: "VIDEO",
            description: "https://www.Facebook.com/", 
            title: global.titlink,
            body: global.bodlink,
            thumbnailUrl: fs.readFileSync('./KakashiMedia/kakashi.jpg'),
            sourceUrl: global.linkig
    }
    } }
        
            global.ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "2347086086722@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./KakashiMedia/kakashi.jpg') //Gambarnye
					},
					"title": wm, //your name
					"description": namabot, 
					"currencyCode": "USD",
					"priceAmount1000": "20000000",
					"retailerId": "Ghost",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
        
              global.fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: wm, 
                    jpegThumbnail: fs.readFileSync('./KakashiMedia/kakashi.jpg')
                          }
                        }
                      }
        
             global.fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "994403219940-1631515755@g.us",
			"inviteCode": "null",
			"groupName": "𝐓𝚯𝚾𝚰𝐂 ₪ 𝚨𝐋𝚵𝚾𝚨  ⷡ  ⷪ  ⷮⷮ 🪀", 
            "caption": `╭─${kki}RULES BOT${kka}
│
├❒ NO TOXIC
├❒ NO SPAM
├❒ DO NOT SEND VIRTEX
├❒ DO NOT SEND ANYTHING 18+
├❒ NO PHONE / VC
├❒ BOT DOES NOT ACCEPT SAVE CONTACTS
│
├❏ ANY VIOLATION WILL BE IMMEDIATELY BANNED AND BLOCKED WITHOUT THE LITTLE TOLERANCE
│
└─${kki}RULES BOT${kka}`, 
            'jpegThumbnail': fs.readFileSync('./KakashiMedia/kakashi.jpg')
		}
	}
}

             global.fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "994403219940-1631515755@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": wm,
                 "h": `Hmm`,
                 'seconds': '999999999', 
                 'gifPlayback': 'true', 
                 'caption': wm,
                 'jpegThumbnail': fs.readFileSync('./KakashiMedia/kakashi.jpg')
                        }
                       }
	                  }
       
        global.fake = pickRandom(global.fak)
        
        global.fak = [ fvn, fgif, ftroli, fgclink, fliveLoc, fliveLoc2, fdocs, ftoko, ftextt, fkontak, fakeig, fakefb, adReply, fpayment ]
		// Add it
	}
}

module.exports = handler
