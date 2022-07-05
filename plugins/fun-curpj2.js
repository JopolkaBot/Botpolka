let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*LA CURP DE JONATHAN ES:*
_CALJ070924HTSLRNA1_
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['curp']
handler.tags = ['fun']
handler.command = /^(curpj2)$/i
export default handler
