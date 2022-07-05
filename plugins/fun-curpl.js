let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*CURP DE LEO*
*HEZL070511HTSRVBA9*
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['curp']
handler.tags = ['fun']
handler.command = /^(curpl)$/i
export default handler
