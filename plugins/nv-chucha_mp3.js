import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/chucha.mp3'
conn.sendFile(m.chat, vn, 'chucha.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /chucha|a mi que|Chucha|A mi que|y yo que/
handler.command = new RegExp
export default handler
