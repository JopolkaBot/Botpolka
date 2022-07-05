let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*LA CURP DE URIEL ES:*
_HIMJ070323HTSDRSA6_
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['curpu']
handler.tags = ['fun']
handler.command = /^(curpu)$/i
export default handler
