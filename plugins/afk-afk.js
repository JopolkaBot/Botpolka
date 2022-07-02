let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] activaste el crasheo ${conn.getName(m.sender)} necesitamos otro insano sin miedo*\n\n*—◉ )${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^crash$/i
export default handler
