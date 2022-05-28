
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const cheerio = require('cheerio')
const FormData = require('form-data')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const yts = require( 'yt-search')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
const imageToBase64 = require("image-to-base64");
const hx = require('./lib/hxz')
const { color, bgcolor } = require('./lib/color')
let xfar = require('./lib/xfarr-api')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const uploadFile = require('./lib/uploadFile')
const uploadImage = require('./lib/uploadImage')
const bent = require('bent')
const { Apkdl } = require('./lib/func')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg,apk,apkdown, userXp,getGroupAdmins, msToDate,userLeveling,formatp,calender, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')

module.exports = zidni = async (zidni, m, chatUpdate, store) => {
    try {
             var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await zidni.decodeJid(zidni.user.id)
        const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const from = mek.key.remoteJid	
        const groupMetadata = m.isGroup ? await zidni.groupMetadata(from) : ''
        const groupId = m.isGroup ? groupMetadata.id : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const groupMembers = m.isGroup ? await groupMetadata.participants : ''
       	const isPremium = isOwner || global.premi.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
         	const buttonsDefault = [{ urlButton: { displayText: `Whatsapp`, url : `https://wa.me/6281215205433` } },]
		const pickRandom = (arr) => {return arr[Math.floor(Math.random() * arr.length)]}
		const randomNomor = (angka) => {
        return Math.floor(Math.random() * angka) + 1}
        	const math = (teks) => {
            return Math.floor(teks)}  
     	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
              let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
          let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                  if (!isNumber(user.limit)) user.limit = limitUser
                   if (!isNumber(user.level)) user.level = 1
                   if (!isNumber(user.xp)) user.xp = 0
                   if (!isNumber(user.balance)) user.balance = 0
                   if (!isNumber(user.lastclaim)) user.lastclaim = 0
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                level: 1,
                xp: 0,                            
                balance: 0,
                limit: limitUser,
                lastclaim: 0,   
                  
            }  
        } catch (err) {
            console.error(err)
        }
	               if(autorecording){
	if(autorecording== false) return
	await zidni.sendPresenceUpdate('recording', m.chat)
	} else if(autoketik){
		if(autoketik == false) return
		await zidni.sendPresenceUpdate('composing', m.chat)
		} else if(available){
			if(available == false) return
			zidni.sendPresenceUpdate('available', m.chat)
			}
			const sen = (teks) => {
            zidni.sendMessage(`${owner}@s.whatsapp.net`, {text: teks})}
 let d1 = new Date(new Date + 3600000)
       let locale = 'id'
       let islam = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {day: 'numeric',month: 'long', year: 'numeric' }).format(d1)
				   		   if (isCmd) {
				   anune =`400`
susu = randomNomor(math(anune))
db.data.users[m.sender].balance += susu
}
    // Public & Self
        if (!zidni.public) {
            if (!m.key.fromMe) return
        }
        // Reply
          let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"})
        // Push Message To Console && Auto Read
     	if (!m.isGroup && isCmd ) {
		console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (m.isGroup && isCmd ) {
		console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}
		//OTHER
		badword = ["anjing","memek","kontol","bangsat","goblok","tolol","peler","pler","ajg","asw","asu","gblk","mmk","bgst","bngst"]
	    salam = ["assalamualaikum","assalamu'alaikum"]
	    humor = ["wkwkwk","wkwk","haha","awokawok","awok"]
	// AUTO
    	if (!m.key.fromMe && badword.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://d.top4top.io/m_2248jzsk00.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})}
	if (!m.key.fromMe && salam.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://f.top4top.io/m_22521bnrt0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})}		
	if (!m.key.fromMe && humor.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://a.uguu.se/vWsOLCBL.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})}	
	 if (m.isGroup && !m.key.fromMe  && !isOwner && !isGroupAdmins && !isGroupOwner){
        	if (budy.match(`https://chat.whatsapp.com`)) {
        	zidni.sendMessage(m.chat, {text: `*Link Group Terdeteksi*\n\nKamu akan dikick dari group ini`}, {quoted:m})
        	setTimeout( () => {
 zidni.groupParticipantsUpdate(m.chat, [sender], 'remove') }, 4000) 			}}    
     if (!m.key.fromMe && !m.isGroup && !/webp/.test(mime) && /image/.test(mime)) {
         let p = await zidni.downloadAndSaveMediaMessage(quoted)         
     	zidni.sendImageAsSticker(m.chat, p, m, { packname: `Auto Sticker\nCreated By`, author: `\nZidniGanz` })}     
     	if (!m.key.fromMe && !m.isGroup && !/webp/.test(mime) && /video/.test(mime)) {
         let p = await zidni.downloadAndSaveMediaMessage(quoted)         
     	zidni.sendVideoAsSticker(m.chat, p, m, { packname: `Auto Sticker\nCreated By`, author: `\nZidniGanz` })}          	  	
if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : wa.me/${sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
        💫 *MessageType* : ${m.mtype}`
			m.reply(teks)
			await sleep(500)
			m.copyNForward(m.chat, true, {readViewOnce: true}, {
				quoted: mek
			}).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
		}
	
		var bod = m.body.split(" ");
				var link = bod.find(
					(a) =>
						a.includes("tiktok.com") ||
						a.includes("facebook.com") ||
						a.includes("github.com") ||
						a.includes("youtu.be") ||
				        a.includes("www.instagram.com") ||
						a.includes("youtube.com/shorts") ||
				        a.includes("mediafire.com") ||
						a.includes("www.icocofun.com") ||
						a.includes("twitter.com") ||
						a.includes("soundcloud.com"));
					if (budy.match(`youtu.be`)){
				m.reply(mess.wait)
				if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
				const { y2mateA, y2mateV } = require('./lib/y2mate4')
    let res = await y2mateV(link).catch(e => {
            m.reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')})
            zidni.sendMessage(m.chat, {video: { url:res[0].link },
                    caption: `Youtube Quality 480p\n\n`+res[0].judul}, { quoted: m })
                }
                if(budy.match('youtube.com/shorts/')){
                m.reply(wet)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/yt1?link=${link}`)
                zidni.sendMessage(m.chat, {video: { url: anu.mp4.result},
                    caption: 'Youtube Shrots Quality '+anu.mp4.quality+'\n\n'+anu.mp4.title}, { quoted: m })
                    }
if (/^.*mediafire.com/i.test(m.text)){
if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 30
const { mediafiredl } = require('@bochilteam/scraper')
   let res = await mediafiredl(link)
   m.reply(wet)
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*Name:* ${filename}
*Size:* ${filesizeH}
*Extension:* ${ext}
*Uploaded:* ${aploud}
`.trim()
    m.reply(caption)
    zidni.sendMessage(from, { document: { url: url }, fileName: filename, mimetype: ext}, { quoted: m })
}
if (/^.*twitter.com/i.test(m.text)){
 let anu= await fetchJson(`https://yx-api.herokuapp.com/api/download/twitterdl?url=${link}`)
m.reply(wet)
let anuu = await getBuffer (anu.result.SD)
    await zidni.sendMessage(m.chat, { video: anuu,caption: `High Quality\n${anu.result.desc}`  }, { quoted: m })    }
      if (budy.match(`tiktok.com/`)){
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
 m.reply(mess.wait)
 	   zidni.sendMessage(m.chat, {video: { url: `https://api.akuari.my.id/downloader/tiktoknowm?link=${link}` },
                    caption: 'Tiktok No Watermark'}, { quoted: m })
                    }
        	  if (/https?:\/\/(fb\.watch|(www\.|web\.|m\.)?facebook\.com)/i.test(m.text)){
		 m.reply(mess.wait)
		 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
		let anu = await fetchJson(`https://api.akuari.my.id/downloader/fbdl?link=${link}`)
	
     zidni.sendMessage(m.chat, {video: { url: anu.medias[0].url || anu.medias[0].url },
                    caption: 'Facebook '+`${anu.medias[0].quality} `+`Size ${anu.medias[0].formattedSize}`}, { quoted: m })
                    }
			if (budy.match(`www.icocofun.com`)) {
		m.reply(mess.wait)
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
       let waw = await fetchJson(`https://zenzapis.xyz/downloader/cocofun?apikey=286af65979&url=${link}`) 	
			   let p = waw.result
			   let qp = await getBuffer(p.url)
			   await zidni.sendMessage(m.chat, {video: qp, caption: waw.result.title},{ quoted: m })					 				  }
	if (/^.*github/i.test(m.text)) {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
	m.reply(mess.wait)
	let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = command.match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
  zidni.sendMessage(from, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m })}
			  if (/^.*instagram.com\/(p|reel|tv)/i.test(m.text)) {
			 m.reply(mess.wait)
			 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  let anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${link}`)
     zidni.sendFile(m.chat, anu.medias[0].url, 'ig.' + anu.medias[0].fileType, `Instagram • ${anu.medias[0].type}`, m) }

if (/ssweb/i.test(command)){
  let full = /f$/i.test(command)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch(api('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  zidni.sendFile(m.chat, ss, 'screenshot.png', url, m, 0, { thumbnail: ss })}
      if (/limit/i.test(command)){
   zidni.sendTextWithMentions(m.chat, `Limit @${sender.split('@')[0]} Tersisa ${global.db.data.users[m.sender].limit}\nAnd Balance ${db.data.users[sender].balance}`, m)}

  switch(command) {
case'help':case'menu':{
const more = String.fromCharCode(8206)
        const read = more.repeat(4001)
anu = `
Hallo *${pushname}* Silahkan Kirimkan Link Tanpa Command Untuk Menggunakan Fitur Paste Link!!
${read}
_*メ Paste Link*_
*•* youtube
*•* ytshorts
*•* facebook
*•* twitter
*•* instagram
*•* tiktok
*•* cocofun
*•* mediafire
*•* github

_*メ Search*_
*•* ytsearch
*•* stikersearch
*•* wallpaper
*•* joox
*•* repo

_*メ Tools*_
*•* stiker
*•* smeme
*•* smeme2
*•* swm
*•* toimg
*•* tomp4
*•* tomp3
*•* tourl
*•* ssweb
*•* waifu2x
*•* play
*•* ytmp3
*•* ttaudio
*•* add
*•* kick
*•* promote
*•* demote
*•* hidetag\n\n*𝑆𝑖𝑚𝑝𝑙𝑒 𝐵𝑜𝑡 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝 ッ*`
 let pp = await zidni.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
        let { data } = await zidni.getFile(await(await require('node-fetch')(pp)).buffer())  
zidni.sendMessage(from,{
	caption: anu,
	document:data,
	mimetype: 'image/jpeg', 
	fileName: `${islam}`,
	fileLength: 999999999,
	templateButtons: buttonsDefault,footer: `${ucapanWaktu}` })
	
             }
break
           case'stiker':case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return m.reply( `Balas Video/Image Dengan Caption ${prefix + command}`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await zidni.sendImageAsSticker(m.chat, media, m, { packname: `Stiker By:\nCreated by:`, author: `${pushname}\nZidniGanz` })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await zidni.sendVideoAsSticker(m.chat, media, m, { packname: `Stiker By:\nCreated by:`, author: `${pushname}\nZidniGanz` })
                await fs.unlinkSync(encmedia)
            } else {
                return m.reply( `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break

        case'wallpaper':case'wallq':case'wallpaperq':{
        if(!args[0]) return m.reply('Masukan Parameter Query')
        m.reply( wet)
          if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  let res 
  if (text) res = await fetch(
    global.api("https://wall.alphacoders.com/api2.0", "/get.php", {
      auth: "3e7756c85df54b78f934a284c11abe4e",
      method: "search",
      term: text,
    })
  )
    else res = await fetch(
    global.api("https://wall.alphacoders.com/api2.0", "/get.php", {
      auth: "3e7756c85df54b78f934a284c11abe4e",
      method: "latest",
    })
  )

  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.wallpapers) throw json
  let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)];
  await zidni.sendFile(m.chat, img.url_image, text + `.${img.file_type}`, img.url_page, m);};
  break
 case'waifu2x': case'hd':{
  m.reply(wet)
  const fs = require('fs')
const deepai = require('deepai')
deepai.setApiKey('31c3da72-e27e-474c-b2f4-a1b685722611')
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (!mime) return m.reply( 'Tidak ada foto')
let img = mime.split('/')[1]
	img = Date.now() + '.' + img
	fs.writeFileSync(`./${img}`, await q.download())
	let resp = await deepai.callStandardApi('waifu2x', {
		image: fs.readFileSync(`./${img}`)
	})
	await zidni.sendFile(m.chat, resp.output_url, 'hd.jpg', 'Nih, klo kurang hd reply foto ini', m).then(() => fs.unlinkSync(`./${img}`))
}
break
        	case 'kick': {
		if (!m.isGroup) return m.reply( mess.group)
                if (!isBotAdmins) return m.reply( mess.botAdmin)
                 if (!(isGroupAdmins || isGroupOwner )) return m.reply( mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return m.reply( mess.group)
                if (!isBotAdmins) return m.reply( mess.botAdmin)
                if (!(isGroupAdmins || isGroupOwner )) return m.reply( mess.admin)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return m.reply( mess.group)
                if (!isBotAdmins) return m.reply( mess.botAdmin)
                 if (!(isGroupAdmins || isGroupOwner )) return m.reply( mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return m.reply( mess.group)
                if (!isBotAdmins) return m.reply( mess.botAdmin)
                 if (!(isGroupAdmins || isGroupOwner )) return m.reply( mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        
                case 'hidetag': {
                 if (!(isGroupAdmins || isGroupOwner )) throw mess.admin                  
            zidni.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return m.reply( 'Pesan tersebut bukan dikirim oleh bot!')
                zidni.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'leave': {
                if (!isOwner) return m.reply( mess.owner)
                await zidni.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
   
  case'joox':{
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
const { joox } = require('./lib/scrape_joox')
const isUrl = str => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi.test(str)
    if (!text) return m.reply( `*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${usedPrefix + command} alone`)
    if (isUrl(text)) return m.reply( `*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${usedPrefix + command} alone`)
    let json = await joox(text)
    let result = json.data[Math.floor(Math.random() * json.data.length)]
    let pesan = `
*Penyanyi:* ${result.penyanyi}
*Judul:* ${result.lagu}
*Album:* ${result.album}
*Diterbitkan:* ${result.publish}
*Link:* ${result.mp3}
\n_Tunggu Upload Musiknya ya.._`.trim()
    zidni.sendFile(m.chat, result.img, 'error.jpg', pesan, m, false, { thumbnail: Buffer.alloc(0) })
  zidni.sendMessage(from, { audio: {url : result.mp3}, mimetype: 'audio/mp4'}, {quoted: m})}
      break
    
  case 'tinyurl':{
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (!isUrl(args[0])) return m.reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/tinyurl?url=${q}&APIKEY=cristian9407`)
			    m.reply(`Link : ${datta.result}`)}
				break
case 'gg':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (!isUrl(args[0])) return m.reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/gg?url=${q}&nama=st4rz&APIKEY=cristian9407`)
			    m.reply(`Link : ${datta.result}`)}
				break
case 'bitly':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (!isUrl(args[0])) return m.reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/bitly?url=${q}&APIKEY=cristian9407`)
			    m.reply(`Link : ${datta.result.id}`)}
				break
case 'cutly': 
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  if (!isUrl(args[0])) return m.reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/cuttly?url=${q}&APIKEY=cristian9407`)
			    m.reply(`Link : ${datta.result.shortLink}`)
				break				
			
                   			case 'get': case 'komik':{
            axios.get(q)
	.then(({ data }) => {
            m.reply(`${data}`)
            })}
            break
          
case 'github':case 'repo':{
 if (!args[0]) return m.reply( 'Cari apa?')
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
    let res = await fetch(global.api('https://api.github.com', '/search/repositories', {
        q: text
    }))
    let json = await res.json()
    if (res.status !== 200) throw json
    let str = json.items.map((repo, index) => {
        return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👀  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}`.trim()
    }).join('\n\n')
    m.reply(str)}
    break
        case 'tourl':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return m.reply( 'Tidak ada media yang ditemukan')
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Tidak diketahui)'}`)}
break

              case'mp4':case 'togif': case 'tomp4': case 'tovideo': {
               if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
                if (!quoted) return m.reply( 'Reply Image')
                if (!/webp/.test(mime)) return m.reply( `balas stiker dengan caption *${prefix + command}*`)
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zidni.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: `Nih Gan` } }, { quoted: m })
                await fs.unlinkSync(media)}
            break
            case 'mp3':case 'tomp3':  case 'toaud': case 'toaudio': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
            if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply( `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            if (!quoted) return m.reply( `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zidni.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m }) }
            break   
           

              case 'ytsearch': case 'yts':{
               if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
 if (args.length < 1) return m.reply(`Contoh:\n${command} Lily Alan Walker`)
let list_rows = [];
let yts = require("yt-search")
            const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Durasi: ${a.duration} | views: ${a.views}\n\nUrl : ${a.url}`, rowId: `yt5 ${a.url}`})}
const sections = [
    {
	title: "Type Video | Quality 480p",
	rows: list_rows
	 },]
     
   const listMessage = {
  text: `Hasil Pencarian Dari ${q}`,
  footer: `${pushname}`,
  title: "",
  buttonText: "Chose One",
  sections
}
       
     zidni.sendMessage(from, listMessage,{ quoted: m })}
break

			    
  
case 'ttaud':	case 'ttaudio': case 'tiktokaudio':{
	 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
			     if (!args[0]) return m.reply('Masukan Parameter Url')
			    if (!args[0].includes('tiktok')) return m.reply(mess.error.Iv)
			    m.reply(mess.wait)
			    hxz.ttdownloader(args[0]).then( data => {
			      zidni.sendMessage(from, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: m})			     
				}).catch(() => m.reply(mess.error.api))
		       }
		         break                     
             case'ythd':case 'yt5':{
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 3
	            m.reply(mess.wait)	       
                    const { y2mateA, y2mateV } = require('./lib/y2/y2mate5')
    let res = await y2mateV(q).catch(e => {
         m.reply('_[ ! ] Error Gagal Memasuki Web Y2mate_') })
             let buttons = [{buttonId: `ytmp33 ${q}`, buttonText: {displayText: 'Audio'}, type: 1} ]
                let buttonMessage = {video: { url: res[0].link },caption: `Nih Gann`,footer: res[0].judul,buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
             break           
             case 'yt6':{
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
	            m.reply(mess.wait)	       
                    const { y2mateA, y2mateV } = require('./lib/y2/y2mate6')
    let res = await y2mateV(q).catch(e => {
         m.reply('_[ ! ] Error Gagal Memasuki Web Y2mate_') })
             let buttons = [{buttonId: `ytmp33 ${q}`, buttonText: {displayText: 'Audio'}, type: 1} ]
                let buttonMessage = {video: { url: res[0].link },caption: `Nih Gann`,footer: res[0].judul,buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
             break  
      
                    case 'play':{
                     if (!args[0])return m.reply('Masukan Paramater Query')
                     if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 5
                 const { y2mateA, y2mateV } = require('./lib/y2mate4') 
			m.reply(wet)
			 res = await yts(text)
			  resu = await y2mateV(res.all[0].url).catch(e => {
            m.reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')  })
         let buttons = [
                    {buttonId: `ytmp33 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: resu[0].link  },
                    caption: `Youtube Video Quality 480p`,
                    footer: `${resu[0].judul}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })  }
			                break	       
             case'ytmp3':case'mp3': case 'ytmp33': {
             if (!args[0])return m.reply('Masukan Paramater Url')
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
    		var mulaikah = args.join(' ')
		m.reply(wet)
                  const { y2mateA, y2mateV } = require('./lib/y2mate3')
         teks = args.join(' ')    
           let res = await y2mateA(teks).catch(e => {
            m.reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
           zidni.sendMessage(from, { audio: { url: res[0].link },mimetype: 'audio/mp4', }, { quoted : m})}
                  break
                         	case 'setpp':
			case 'setppbot': {
                if (!isOwner) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                 let media = await zidni.downloadAndSaveMediaMessage(quoted)
                await zidni.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success) }
                break
            case 'public': {
                if (!isOwner) throw mess.owner
                zidni.public = true
                m.reply('Sukse Change To Public Usage') }
            break
            case 'self': {
                if (!isOwner) throw mess.owner
                zidni.public = false
                m.reply('Sukses Change To Self Usage') }
            break
           case 'radi': case 'ping': case 'botstatus': case 'statusbot': 
         case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)  } }
            break
                   case 'parner':case 'owner': case 'creator': {
                zidni.sendContact(m.chat, global.owner, m) }
            break
            		case 'join': case 'masuk':{
            		  if (!isPremium)return m.reply("Khusus Pengguna Premium")		
				let result = args[0].split('https://chat.whatsapp.com/')[1]
                await zidni.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))            }
				break
				
case 'stikersearch':case 'stickersearch': case'stikerq':case 'stickers':{
 if (args.length < 1) return m.reply(`Contoh:\n${command} ZidniGanz`)
let list_rows = [];
let data1 = await fetchJson(`https://api.akuari.my.id/search/sticker?query=${q}`)
let data = data1.result
for(let a of data) {
list_rows.push({
title: a.title, rowId: `sdownload ${a.url}`
})
}
    const button = {
        title: `Hasil Pencarian Dari ${q}`,
        description: "Pilih Salah Satu",
        footerText: ``,
        buttonText: 'Chose One',
        listType: 'SINGLE_SELECT',
        sections: [
            {
                title: "Hasil Pencarian", 
                rows: list_rows
            }
        ]
        }
        const templateList = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "listMessage": button }), {});
        zidni.relayMessage(m.chat, templateList.message, { messageId: templateList.key.id });}
break
case 'sdownload':{
									let ani = await fetchJson(`https://api.akuari.my.id/downloader/stickerpack?link=${q}`)
									let anu = ani.result
									 let r = anu[Math.floor(Math.random() * anu.length)]
									 let get = await getBuffer(r)
									 zidni.sendImageAsSticker(m.chat, get, m, { packname: `By`, author: "Zidni Ganz"})}
									 break
                  case 'bc': case 'broadcast':{
                   if (args[0] === '1') {
			    if (!isOwner) return m.reply(mess.OnlyOwner)
		                 var data = await store.chats.all()
		                    for (let i of data) {
                              zidni.sendMessage(i.id, { text : args[1] ? args[1] : '' , mentions: participants.map(a => a.id)}, { quoted: m })}                         
                           } else if (args[0] === '2'){
			    if (!isOwner) return m.reply(mess.OnlyOwner)
		                 var data = await store.chats.all()
		                 m.reply(`Mengirim Broadcast Ke ${data.length} Chat`)
		                 let rep = await zidni.downloadAndSaveMediaMessage(quoted)
		                 let anu = await TelegraPh(rep)
		                 let repl = await getBuffer(anu)
                            for (let i of data) {
                             zidni.sendMessage(i.id, {image: repl, caption: `*「 Broadcast Bot 」*\n\n${text}`})}
                             } else if (args[0] === '3'){
			    if (!isOwner) return m.reply(mess.OnlyOwner)
		                 var data = await store.chats.all()
		                 m.reply(`Mengirim Broadcast Ke ${data.length} Chat`)
		                 let rep = await zidni.downloadAndSaveMediaMessage(quoted)
		                 let anu = await TelegraPh(rep)
		                 let repl = await getBuffer(anu)
                            for (let i of data) {
                             zidni.sendMessage(i.id, {video: repl, caption: `*「 Broadcast Bot 」*\n\n${text}`})}}}
                            break
                            case 'buy':{
                            let q = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 4 ? 1 :Math.min(1, count)
                            if (args[0] === 'limit') {
                            let limit = 500
                            let potion = 800
                               if (global.db.data.users[m.sender].balance >= limit * q) {
                                global.db.data.users[m.sender].balance -= limit * q
                                global.db.data.users[m.sender].limit += q * 1
                                zidni.m.reply(m.chat, `Succes membeli ${q} Limit dengan harga ${limit * q} money`, m)
                            } else zidni.m.reply(m.chat, `Uang anda tidak cukup untuk membeli ${q} limit dengan harga ${limit * q} money`,)
                            } else if (args[0] === 'potion'){
                              if (global.db.data.users[m.sender].balance >= potion * q) {
                                global.db.data.users[m.sender].balance -= potion * q
                                global.db.data.users[m.sender].potion += q * 1
                                zidni.m.reply(m.chat, `Succes membeli ${q} potion dengan harga ${potion * q} money`, m)
                            } else zidni.m.reply(m.chat, `Uang anda tidak cukup untuk membeli ${q} potion dengan harga ${potion * q} money`,)}
                            }
                            break
                               
         case 'smeme2':
          if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
								if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (args.length < 2) return m.reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!quoted) return m.reply(`Reply Gambar!`)									
															          
             let media = await quoted.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let aaa = await (isTele ? uploadImage : uploadFile)(media)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${args[0]}/${args[1]}.png?background=${aaa}`)
								zidni.sendImageAsSticker(m.chat, resu, m, { packname: global.packname, author: global.author })										
										} catch (e) {
											console.log(e)}
									break
									case 'smeme': case 'stickermeme': case 'stickmeme': {																		 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
arg = args.join(' ')
let media = await quoted.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${link}`
memek = await zidni.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)}
break
			  
            case 'toimage': case 'toimg': {
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
                if (!quoted) return m.reply( 'Reply Image')
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    zidni.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
									case 'swm': case 'wm':{
									 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
     if (!quoted) return m.reply( `Balas Video/Image/stiker Dengan Caption ${prefix + command}`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await zidni.sendImageAsSticker(m.chat, media, m, { packname: `${q}`, author:``})
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await zidni.sendVideoAsSticker(m.chat, media, m, { packname: `${q}`, author: ``})
                await fs.unlinkSync(encmedia)
            } else {
                return m.reply( `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
case 'getcase':
if (!isOwner) return m.reply(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("bang.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
break
         
            default:
                if (budy.startsWith('=>')) {
                    if (!isOwner) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }
                if (budy.startsWith('>')) {
                    if (!isOwner) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isOwner) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    zidni.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
     const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)    
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const sen = (teks) => {
            zidni.sendMessage(`${owner}@s.whatsapp.net`, {text: teks}, {quoted: m})}
        m.reply(`*⚠️ Internal Server Eror️*
${readmore}
Please Report The Bug to the Owner ( @6281215205433 )`)
        sen(`Command *${command}*\nEror\n\n\n`+util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
