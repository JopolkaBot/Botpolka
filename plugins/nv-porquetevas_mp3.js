import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/porquetevas.mp3'
conn.sendFile(m.chat, vn, 'porquetevas.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Porque te vas|Te extraño|te extraño|porque te vas|promesas/
handler.command = new RegExp
export default handler
