let handler = async (m, { conn, command, text }) => {
let text = `*Eh hola 😅 aña 😼, perdón por encarar Messi 😓, es que te vi 😍 y dije 🙈 ig de la minita 😝, queremos la Champions 👻, soy un lobo solitario 😼 en busca de una loba 🐺🐺 Auuuuuuuu 🐺👻😼 soy heroico en fri fayer 👻 y los dejo 7-0 a todos 😝 GUASAAA 👻📞, quieres ser mi bebita fui fui?🙈 Es que te veo🤩 y digo😳, jijijija 😜 pasa pack 👻*
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['hola']
handler.tags = ['fun']
handler.customPrefix = /hola|Hola|ola/
handler.command = /^(Hola|hola|ola)/
export default handler
