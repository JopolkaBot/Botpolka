let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*LA CURP DE BRAYAN ES:*
_PEHB070303HTSRRRA0_
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['curp']
handler.tags = ['fun']
handler.command = /^(curpbryan)$/i
export default handler
