let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu2.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭─[ *𝙱𝚘𝚝𝚙𝚘𝚕𝚔𝚊* ]
│ *➤ 𝙷𝙾𝙻𝙰 ${name}*
│
│ *¿QUE CURP DESEAS?*
│ 1.Johan
│ 2.Leo
│ 3.Uriel
│ 4.Jonathan
╰───────────────
`.trim()

conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', 'https://github.com/JopolkaBot/Botpolka', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['1', '/curpj']
['2', '/curpl'],
['3', '/curpu'],
['4', '/curpj2']
], m)}

handler.help = ['curp']
handler.tags = ['fun']
handler.command = /^(curp|curp)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
