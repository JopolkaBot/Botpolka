import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/bum.m4a'
conn.sendFile(m.chat, vn, 'bum.m4a', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /bum|Bum|pitufo|Pitufo|Shakalaka/
handler.command = new RegExp
export default handler
