let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`Eh hola 😅 aña 😼, perdón por encarar Messi 😓, es que te vi 😍 y dije 🙈 ig de la minita 😝, queremos la Champions 👻, soy un lobo solitario 😼 en busca de una loba 🐺🐺 Auuuuuuuu 🐺👻😼 soy heroico en fri fayer 👻 y los dejo 7-0 a todos 😝 GUASAAA 👻📞, quieres ser mi bebita fui fui?🙈 Es que te veo🤩 y digo😳, jijijija 😜 pasa pack 👻`)}
handler.help = ['hola [alasan]']
handler.tags = ['main']
handler.command = /^Hola$/i
export default handler
