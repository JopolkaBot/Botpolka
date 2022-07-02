import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_Jesus Uriel_`, author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
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
 ]
