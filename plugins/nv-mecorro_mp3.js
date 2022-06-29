import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/mecorro.mp3'
conn.sendFile(m.chat, vn, 'mecorro.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /me corro|ahhhg me corro|Me corro|Ahhhg me corro/
handler.command = new RegExp
export default handler
