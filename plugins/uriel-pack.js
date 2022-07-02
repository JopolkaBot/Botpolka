import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_Jesus Uriel_`, author, url, [['🛐 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🛐', `/${command}`]], m)
}
handler.help = ['uriel']
handler.tags = ['internet']
handler.command = /^(Uriel)$/i
export default handler

global.pack = [
  "https://telegra.ph/file/0cfa9a0d6d118badece2d.jpg",
  "https://telegra.ph/file/0127ce2d867ece9249c3d.jpg",
  "https://telegra.ph/file/a731c6b8e5d797e47830f.jpg",
  "https://telegra.ph/file/f36607b51a79a3cbce489.jpg",
  "https://telegra.ph/file/a99c75a664b2fb96e7199.jpg",
  "https://telegra.ph/file/2ac16fa7f3d7267530d3a.jpg",
  "https://telegra.ph/file/30415a337e84a7456803c.jpg",
  "https://telegra.ph/file/eea9d4522eb88235cf08e.jpg",
  "https://telegra.ph/file/575666388f5052760e23c.jpg",
  "https://telegra.ph/file/8433a15be804dd8349868.jpg",
  "https://telegra.ph/file/eeda2ea4058c3245bac19.jpg",
  "https://telegra.ph/file/f92d6d8bbf83d6f051fd5.jpg",
  "https://telegra.ph/file/f2af6a3e916143a6e0566.mp4",
  "https://telegra.ph/file/649b10a120a72fdd4c4fe.jpg",
  "https://telegra.ph/file/ddf861c9b50babcaea602.jpg",
 ]
