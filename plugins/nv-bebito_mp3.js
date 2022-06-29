import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/bebito.m4a'
conn.sendFile(m.chat, vn, 'bebito.m4a', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Bebito fiu fiu|bebito fiu fiu|Bebitofiufiu|bebitofiufiu|caramelo de chocolate/
handler.command = new RegExp
export default handler
