import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let url = uriel[Math.floor(Math.random() * uriel.length)]
conn.sendButton(m.chat, `_Rawr💛_`, author, url, [['🛐 RAWR🛐', `/${command}`]], m)
}
handler.help = ['Rawr']
handler.tags = ['internet']
handler.command = /^(Rawr)$/i
export default handler

global.rawr = [
  "https://telegra.ph/file/2967de6294592d736592d.mp4",
 ]
