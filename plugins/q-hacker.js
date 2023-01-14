let handler = async (m, { conn, usedPrefix, command }) => {
  let hekerr = pickRandom(global.heker)
  conn.sendButton(m.chat, hekerr, wm, `Hacker`, `${usedPrefix + command}`, m)
}
handler.help = ['hacker']
handler.tags = ['quotes']
handler.command = /^(heker|hacker|hekel)$/i
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.heker = [
  "Dear you are written on my defacement page, When will you be my girlfriend?", "I'm willing to be a hot processor, as long as you're the heatsink that can cool me down at any time.", "You don't have to look for an xss gap, because when you click on my heart, a pop up will appear with your name.", "Hopefully after I successfully login in your heart there will be no logout button, and my session will never expire.", "When I have to use the symlink bypass technique to open your heart folder which is open_basedir enabled.", "Me and You are like PHP and MySQL that are not connected.", "Don't just inject the heart, but you have to be able to patch it too. So that you don't cheat with other hackers.", "I'm a PHP programmer, but I won't php-in you anyway.", "Eneeeng. | Apache? | You're the most Unix woman I've ever known |", "Honey, is your capslock on? | No, why is it? | Because your name is written so big in my heart | zzz! smile", "I approached you just to redirect to your friend's heart.", "Domains can park, my love can't park in your heart?", "Can I be your girlfriend? | 400(Bad Request) | Can I kiss you? | 401(Authorization Required) | I'll take your shirt off ok | 402(Payment Required) sad", "You know it's not different between you and PHP syntax, PHP syntax is hard to memorize, you're hard to forget", "What vocational school did you take? | Network Computer Engineering | So what can you do now? | Capture your heart through my computer | biggrin", "If love is an Array, then, my love for you is never empty if unset().", "SQLI (Structured Query Love Injection)", "I want you to rm -rf all ex's in your brain, I am the root of your heart", "Your smile is like a cooler that cools my heart when it's overclocked.", "You are my terminal, where I spend my time typing thousands of lines of love code for you smile", "I like hanging out in zone-h, because that's where I archive several websites with photos of you.", "my heart is like a vps only for you, not shared hosting that can stack various love domains.", "I'm not a VNC Server Without Authentication that you can monitor anytime.", "Don't dualboot my heart to you.", "My love I'll Ctrl+A then I'll Ctrl+C and I'll Ctrl+V right in the system folder of your heart.", "KDE lost to Beauty, GNOME lost to Simple, FluxBox lost to Light, basically All DEs Lose to You.", "Your love is like TeamViewer always controlling my heart", "Our love can't be separated no matter how thick the firewall is...!!"
]
