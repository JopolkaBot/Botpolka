import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let url = bryan[Math.floor(Math.random() * bryan.length)]
conn.sendButton(m.chat, `_Brayan Pérez_`, author, url, [['🛐 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🛐', `/${command}`]], m)
}
handler.help = ['Bryan']
handler.tags = ['internet']
handler.command = /^(Bryan)$/i
export default handler

global.bryan = [
  "https://telegra.ph/file/71da5381c26c46ba17263.jpg",
  "https://telegra.ph/file/41fb81c0e60fb73ed7425.jpg",
  "https://telegra.ph/file/e5a0a4f1b68158e9d9e49.jpg",
   ]
