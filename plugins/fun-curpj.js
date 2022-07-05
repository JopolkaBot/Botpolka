let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*LA CURP DE JOHAN ES:*
_HEVJ070921HTSRGHA5_
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['curp']
handler.tags = ['fun']
handler.command = /^(curpj)$/i
export default handler
