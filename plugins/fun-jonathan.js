import { performance } from 'perf_hooks'
let handler = async (m, { conn, text }) => {
let start = `*☠ ¡¡𝙸𝙽𝙸𝙲𝙸𝙰𝙽𝙳𝙾 𝙳𝙾𝚇𝚇𝙴𝙾!! ☠*`
let boost = `*${pickRandom(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])}%*`
let boost2 = `*${pickRandom(['21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}%*`
let boost3 = `*${pickRandom(['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'])}%*`
let boost4 = `*${pickRandom(['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'])}%*`
let boost5 = `*${pickRandom(['81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'])}%*`
await m.reply(start)
await m.reply(boost)
await m.reply(boost3)
await m.reply(boost5)
let old = performance.now()
let neww = performance.now()
let speed = `${neww - old}`
let doxeo = `*[ ✔ ] 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝙳𝙾𝚇𝚇𝙴𝙰𝙳𝙰 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n*⏳ 𝙳𝙾𝚇𝚇𝙴𝙰𝙳𝙾 𝙴𝙽: ${speed} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜!*

*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙾𝙱𝚃𝙴𝙽𝙸𝙳𝙾𝚂:*

*Nombre:* Jonathan
*Ip:* 192.168.0.1
*LIGA DE FREE FIRE:* Diamante II
*EDAD:* 14 y creciendo
*NUMBER TELEPHONE:* +52 899 297 3056
*ESTADO:* Tamaulipas
*MUNICIPIO:* Reynosa
*COLONIA:* Balcones de Alcalá
*NO. INTERIOR:* 917
*CURP:* _CALJ070924HTSLRNA1_
*GENERO:* Blanco interracial
*ROUTER VENDEDOR:* IZZI
*DEVICE VENDEDOR:* WIN32-X
*CONNECTION TYPE:* W2P
*EXTERNAL MAC:* 6U:77:89:ER:O4
*MODEM JUMPS:* 64`
conn.reply(m.chat, doxeo, m)
}
handler.help = ['doxear <Jonathan> | <Jonathan>']
handler.tags = ['fun']
handler.command = /^Doxxear Jonathan|doxxeo Jonathan|Jonathan doxx|Info Jonathan|info Jonathan|/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
