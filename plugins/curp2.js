let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*https://github.com/JopolkaBot/Botpolka*`
let buttonMessage= {
'document': { url: `https://github.com/JopolkaBot/Botpolka` },
'mimetype': `application/${document}`,
'fileName': `「  CURPS 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/JopolkaBot/Botpolka',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}curpj2`, buttonText: {displayText: 'JONATHAN'}, type: 1}, 
{buttonId: `${usedPrefix}curpu`, buttonText: {displayText: 'URIEL'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['curp2','curp3']
export default handler