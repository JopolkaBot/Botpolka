let handler = async (m, { conn }) => {
let emot = pickRandom(["👻", "👻", "👻", "👻", "👻", "👻", "👻", "👻", "👻", "👻"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
}})}
handler.customPrefix = /(Wazaaa|wazaaa|Wazaa|wazaa|👻)/i
handler.command = new RegExp
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
