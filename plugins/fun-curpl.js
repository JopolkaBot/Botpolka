let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*LA CURP DE LEO ES:*
_HEZL070511HTSRVBA9_
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['curp']
handler.tags = ['fun']
handler.command = /^(curpl)$/i
export default handler
