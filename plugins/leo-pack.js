import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_Jesus Uriel_`, author, url, [['🛐 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🛐', `/${command}`]], m)
}
handler.help = ['leo']
handler.tags = ['internet']
handler.command = /^(Leo)$/i
export default handler

global.pack = [
"https://telegra.ph/file/0fdb16bd310fa6e3cf75d.jpg",
"https://telegra.ph/file/3dc821f37bccff1c6864a.jpg",
"https://telegra.ph/file/c617cda9b38eec774afb2.jpg",
"https://telegra.ph/file/c84fdb227f09deab320bf.jpg",
 "https://telegra.ph/file/6b991cec3bc79e9b10ce7.jpg",
 ]
