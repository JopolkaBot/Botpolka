import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let text = 'Eh hola 😅 aña 😼, perdón por encarar Messi 😓, es que te vi 😍 y dije 🙈 ig de la minita 😝, queremos la Champions 👻, soy un lobo solitario 😼 en busca de una loba 🐺🐺 Auuuuuuuu 🐺👻😼 soy heroico en fri fayer 👻 y los dejo 7-0 a todos 😝 GUASAAA 👻📞, quieres ser mi bebita fui fui?🙈 Es que te veo🤩 y digo😳, jijijija 😜 pasa pack 👻'
conn.text(m.chat, vn, 'Eh hola 😅 aña 😼, perdón por encarar Messi 😓, es que te vi 😍 y dije 🙈 ig de la minita 😝, queremos la Champions 👻, soy un lobo solitario 😼 en busca de una loba 🐺🐺 Auuuuuuuu 🐺👻😼 soy heroico en fri fayer 👻 y los dejo 7-0 a todos 😝 GUASAAA 👻📞, quieres ser mi bebita fui fui?🙈 Es que te veo🤩 y digo😳, jijijija 😜 pasa pack 👻', null, m, true, {
type: 'text', 
ptt: true 
})
}
handler.customPrefix = /Hola|ola|hola|Ola|Holi/
handler.command = new RegExp
export default handler
