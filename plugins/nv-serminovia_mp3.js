import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/serminovia.mp3'
conn.sendFile(m.chat, vn, 'serminovia.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /quieres ser mi|Quieres ser mi|Te lateria ser mi/
handler.command = new RegExp
export default handler
