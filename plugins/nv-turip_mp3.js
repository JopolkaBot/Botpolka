import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/turip.mp3'
conn.sendFile(m.chat, vn, 'turip.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Turi ip ip ip|turi ip ip ip||Turi|turi/
handler.command = new RegExp
export default handler
