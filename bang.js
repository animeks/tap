/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const hx = require('./lib/hxz')
const fetch = require('node-fetch')
const { performance } = require('perf_hooks')
const { color, bgcolor } = require('./lib/color')
const uploadFile = require('./lib/uploadFile')
const uploadImage = require('./lib/uploadImage')
const hikki = require('hikki-me')
const yts = require("yt-search")
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg,getGroupAdmins,igdl,igstory,pin,fb, joox,msToDate,formatp,calender, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')

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
	    const randomNomor = (angka) => {
        return Math.floor(Math.random() * angka) + 5}
        const math = (teks) => {
            return Math.floor(teks)}  
	
        // Group
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
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
       if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                   if (!('pasangan' in user)) user.pasangan = ''
                     if (!('registered' in user)) user.registered = false
                if (!user.registered) {
                    if (!('name' in user))
                        user.name = m.pushName
                    if (!isNumber(user.age))
                        user.age = -1
                    if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                  if (!isNumber(user.limit)) user.limit = limitUser                 
                   if (!isNumber(user.balance)) user.balance = 0
                   if (!isNumber(user.lastclaim)) user.lastclaim = 0
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',                                       
                balance: 0,
                limit: limitUser,
                lastclaim: 0,   
    }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = true
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: true,
            }
	
        } catch (err) {
            console.error(err)
        }
	      if (isCmd) {
				   anune =`100`
susu = randomNomor(math(anune))
db.data.users[m.sender].balance += susu}

if (m.sender.startsWith('212' || '212')) {
let users = m.sender
zidni.updateBlockStatus(users, 'block')
   }
if (m.sender.startsWith('7' || '7')) {
let users = m.sender
zidni.updateBlockStatus(users, 'block')
   }
   if (m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
let key = m.message.protocolMessage.key
let msg = await zidni.serializeM(await store.loadMessage(key.remoteJid, key.id))
let teks = `   「 Anti Delete Message 」
▸ User : @${sender.split("@")[0]}
▸ Date : ${moment.tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Type : ${msg.mtype}
            `
zidni.sendText(m.chat, teks, msg, { mentions: [msg.sender] })
await zidni.relayMessage(m.chat, msg.message, { messageId: msg.id })
}

        // Public & Self
        if (!zidni.public) {
            if (!m.key.fromMe) return
        }
        // Push Message To Console && Auto Read
        	if (!m.isGroup && isCmd ) {
		console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (m.isGroup && isCmd ) {
		console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))}
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        		badword = ["anjing","memek","kontol","bangsat","goblok","tolol","peler","pler","ajg","asw","asu","gblk","mmk","bgst","bngst"]
	    salam = ["assalamualaikum","assalamu'alaikum"]
	    humor = ["wkwkwk","wkwk","haha","awokawok","awok"]
	// AUTO
    	if (!m.key.fromMe && badword.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://d.top4top.io/m_2248jzsk00.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})}
	if (!m.key.fromMe && salam.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://f.top4top.io/m_22521bnrt0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})}				
	 if (m.isGroup && !m.key.fromMe  && !isOwner && !isGroupAdmins && !isGroupOwner){
        	if (budy.match(`https://chat.whatsapp.com`)) {
        	zidni.sendMessage(m.chat, {text: `*Link Group Terdeteksi*\n\nKamu akan dikick dari group ini`}, {quoted:m})
        	setTimeout( () => {
 zidni.groupParticipantsUpdate(m.chat, [sender], 'remove') }, 5000)}}    
 
     if (db.data.chats[m.chat].antilink){
      if (!m.key.fromMe && m.isGroup && !/webp/.test(mime) && /image/.test(mime)) {
         let p = await zidni.downloadAndSaveMediaMessage(quoted)         
     	zidni.sendImageAsSticker(m.chat, p, m, { packname: `Auto Sticker\nCreated By`, author: `\nZidniGanz` })
     	}}
     	 if (!m.key.fromMe && !m.isGroup && !/webp/.test(mime) && /image/.test(mime)) {
         let p = await zidni.downloadAndSaveMediaMessage(quoted)         
            let any = await TelegraPh(p)
     	zidni.sendImageAsSticker(m.chat, p, m, { packname: `Auto Sticker\nCreated By`, author: `\nZidniGanz` })
     	}
  	 if (!m.key.fromMe && !m.isGroup && !/webp/.test(mime) && /video/.test(mime)) {
         let p = await zidni.downloadAndSaveMediaMessage(quoted)         
     	zidni.sendVideoAsSticker(m.chat, p, m, { packname: `Auto Sticker\nCreated By`, author: `\nZidniGanz` })
     	}

      // Mute Chat
      if (db.data.chats[m.chat].mute && !groupAdmins && !isCreator) {
      return
      }
var bod = m.body.split(" ");
				var link = bod.find(
					(a) =>
						a.includes("tiktok.com") ||
						a.includes("facebook.com") ||
						a.includes("github.com") ||
						a.includes("youtu.be") ||
						a.includes("fb.watch") ||
				        a.includes("youtube.com/watch?v=") ||
				        a.includes("www.instagram.com") ||
						a.includes("youtube.com/shorts") ||
				        a.includes("mediafire.com") ||
				        a.includes("www.icocofun.com") ||
						a.includes("twitter.com") ||
					    a.includes("pinterest.com") ||
					    a.includes("pin.it") ||
						a.includes("drive.google.com"));
						
						if (budy.match('drive.google.com')){
const { sizeFormatter } = require('human-readable')
let formatSize = sizeFormatter({
	std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})
m.reply(wet)
async function GDriveDl(url) {
	let id
	if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
	id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
	if (!id) throw 'ID Not Found'
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) throw 'Link Download Limit!'
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}
	GDriveDl(link).then(async (res) => {
		if (!res) throw res
		await m.reply(JSON.stringify(res, null, 2))
		zidni.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	})
}
					if (budy.match(`youtu.be`)){
				m.reply(mess.wait)
				if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		const { y2mateA, y2mateV } = require('./lib/y2mate4')
    let res = await y2mateV(link).catch(e => {
            m.reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')})
            zidni.sendMessage(m.chat, {video: { url:res[0].link },
                    caption: `Youtube Quality 480p\n\n`+res[0].judul}, { quoted: m })
             	db.data.users[m.sender].limit -= 5			
                   }
                if(budy.match('pinterest.com')){
                m.reply(wet)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/pindl?link=${link}`)
                zidni.sendMessage(m.chat, {image: { url: anu.result},
                    caption: 'Pinterest Downloader'}, { quoted: m })
                    }
                if(budy.match('pin.it')){
                m.reply(wet)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/pindl?link=${link}`)
                zidni.sendMessage(m.chat, {image: { url: anu.result},
                    caption: 'Pinterest Downloader'}, { quoted: m })
                    }
                if(budy.match('youtube.com/shorts/')){
                m.reply(wet)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/yt1?link=${link}`)
                zidni.sendMessage(m.chat, {video: { url: anu.mp4.result},
                    caption: 'Youtube Shrots Quality '+anu.mp4.quality+'\n\n'+anu.mp4.title}, { quoted: m })
                    }
                    if (budy.match(`youtube.com/watch?v=`)){                   
                    m.reply(mess.wait)
				if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		const { y2mateA, y2mateV } = require('./lib/y2mate4')
    let res = await y2mateV(link).catch(e => {
            m.reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')})
            zidni.sendMessage(m.chat, {video: { url:res[0].link },
                    caption: `Youtube Quality 480p\n\n`+res[0].judul}, { quoted: m })
            	db.data.users[m.sender].limit -= 5			
                    }
if (/^.*mediafire.com/i.test(m.text)){
if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
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
	db.data.users[m.sender].limit -= 10
}
if (/^.*twitter.com/i.test(m.text)){
 let anu= await fetchJson(`https://yx-api.herokuapp.com/api/download/twitterdl?url=${link}`)
m.reply(wet)
let anuu = await getBuffer (anu.result.SD)
    await zidni.sendMessage(m.chat, { video: anuu,caption: `High Quality\n${anu.result.desc}`  }, { quoted: m })    }
      if (budy.match(`tiktok.com/`)){
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		 m.reply(mess.wait)
 	   zidni.sendMessage(m.chat, {video: { url: `https://api.akuari.my.id/downloader/tiktoknowm?link=${link}` },
                    caption: 'Tiktok No Watermark'}, { quoted: m })
                 db.data.users[m.sender].limit -= 5
                       }
                    if (budy.match(`fb.watch`)){
                    			 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
	 m.reply(mess.wait)
	const { facebookdl, facebookdlv2 } = require('@bochilteam/scraper')
    const { result } = await facebookdl(link).catch(async _ => await facebookdlv2(link))
    for (const { url, isVideo } of result.reverse()) zidni.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `Facebook Downloader`, m)
   		db.data.users[m.sender].limit -= 5
         }
                    
        	  if (budy.match('facebook.com')){       			 
		 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)
		 m.reply(mess.wait)
const { facebookdl, facebookdlv2 } = require('@bochilteam/scraper')
    const { result } = await facebookdl(link).catch(async _ => await facebookdlv2(link))
    for (const { url, isVideo } of result.reverse()) zidni.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `Facebook Downloader`, m)
  db.data.users[m.sender].limit -= 5		
                      }                                                                                                                                                       
			if (budy.match(`www.icocofun.com`)) {
		m.reply(mess.wait)
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 5
       let waw = await fetchJson(`https://zenzapis.xyz/downloader/cocofun?apikey=c3d07f852d&url=${link}`) 	
			   let p = waw.result
			   let qp = await getBuffer(p.url)
			   await zidni.sendMessage(m.chat, {video: qp, caption: waw.result.title},{ quoted: m })					 				  }
	if (/^.*github.com/i.test(m.text)) {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		m.reply(mess.wait)
	let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = link.match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
  zidni.sendMessage(from, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m })
  	db.data.users[m.sender].limit -= 5
}
			  if (/^.*instagram.com\/(p|reel|tv)/i.test(m.text)) {
			  if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
			 m.reply(mess.wait)
				 const { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } = require('@bochilteam/scraper')
  const results = await instagramdlv4(link)
        .catch(async _ => await instagramdlv2(link))
        .catch(async _ => await instagramdlv3(link))
        .catch(async _ => await instagramdl(link))
    for (const { url, ext} of results) await zidni.sendFile(m.chat, url, 'instagram.mp4.'+ext, `Instagram Downloader`, m)
	db.data.users[m.sender].limit -= 5
 }
       //Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
zidni.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
zidni.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) zidni.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) zidni.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) zidni.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
zidni.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) zidni.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) zidni.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
zidni.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	         if (/limit/i.test(command)){
   zidni.sendTextWithMentions(m.chat, `Limit ${pushname} Tersisa ${global.db.data.users[m.sender].limit}\nAnd Balance ${db.data.users[sender].balance}`, m)}
        switch(command) {
       
case'topupff':{
if (!args[0]) return reply('Masukan Id Game Kamu')
if (!Number(args[0])) return m.reply("Hanya Angka")
const sections = [
	    {title: "List Diamond",
	   rows: [
	    {title: `5 Diamond`, rowId: `topupff ${args[0]} 5`,description: `Harga Rp : 1.261`},
	     {title: `12 Diamond`, rowId: `topupff ${args[0]} 12`,description: `Harga Rp : 2.523`},
	      {title: `70 Diamond`, rowId: `topupff ${args[0]} 70`,description: `Harga Rp : 12.164`},
	       {title: `140 Diamond`, rowId: `topupff ${args[0]} 140`,description: `Harga Rp : 25.227`},
	        {title: `355 Diamond`, rowId: `topupff ${args[0]} 355`,description: `Harga Rp : 63.068`},
	         {title: `720 Diamond`, rowId: `topupff ${args[0]} 720`,description: `Harga Rp : 126.136`}] },]
const listMessage = { text: `Top Up Game Free Fire ID ${args[0]}`, title: pushname, buttonText: "Chose One",sections}
if(!args[1]) return zidni.sendMessage(from, listMessage,{ quoted: m })
  async function topupFreeFire() {
const makeSession = await hikki.game.topupFreeFire(args[0], args[1]) // support nominal 5 12 70 140 355 720'

// console.log(makeSession) if get more property

return await hikki.game.payDiamond(makeSession, '08953225697662')

}
ff = await hikki.game.topupFreeFire(args[0], args[1])
let teks = `TOP UP GAME FREE FIRE\n\nID : ${args[0]}\nName : ${ff.data.userNameGame}\nJumlah : ${args[1]} Diamond\nHarga : ${ff.data.price}\nTransaksi ID : ${ff.data.transactionId}\nPayment : ${ff.data.paymentName}\n\n_*Note :*_\n_Silahkan Scan Qr Code Dan Transfer Ke Qris Sesuai Nominal Di Atas, Qrcode Expired 5 Menit_\n`
      
topupFreeFire()	.then(({ qrCode }) => {
      zidni.sendFile(m.chat, qrCode, '', teks, m)
            })
            
            }
break
case 'suitpvp': case 'suit': {
if (isBan) return m.reply(mess.ban)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await zidni.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) zidni.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
        case'akar':{
        if(!text) return reply('Masukan Angkanya')
        let anu = await fetchJson(`https://api.akuari.my.id/edukasi/akar?angka=${q}`)
        reply(`Akar Dari Angka *${q}* adalah *${anu.hasil}*`)}
        break
        case'kbbi':{
        if(!q) return reply('Masukan Angkanya')
        let anu = await fetchJson(`https://api.zekais.com/kbbi?query=${q}&apikey=zekais`)
        reply(`*Arti:* ${anu.arti}`)}
        break
case 'registrasi': case'reg':case'registerasi':case 'regist':case'daftar':case'regis':{
const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
  let user = global.db.data.users[m.sender]
  if (user.registered === true) return reply( `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`)
  if (!Reg.test(text)) return reply(`Format salah\n*${usedPrefix}daftar nama.umur*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return reply( 'Nama tidak boleh kosong (Alphanumeric)')
  if (!age) return reply( 'Umur tidak boleh kosong (Angka)')
  age = parseInt(age)
  if (age > 120) return reply('Umur terlalu tua 😂')
  if (age < 5) return reply('Bayi bisa ngetik sesuai format bjir ._.')
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  reply(`
Daftar berhasil!

╭─「 Info 」
│ Nama: ${name}
│ Umur: ${age} tahun 
╰────
Serial Number: 
${sn}
`.trim())}
break
case 'unreg':{
const { createHash } = require('crypto')
  if (!args[0]) throw 'Serial Number kosong'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number salah'
  user.registered = false
  reply(`Unreg berhasil!`)}
  break
       case'daily':case'klaim': case 'claim':{
              function kol(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':') }
        let __timers = (new Date - global.db.data.users[m.sender].lastclaim)
        let _timers = (86400000 - __timers) 
        let timer = kol(_timers)
        if (new Date - global.db.data.users[m.sender].lastclaim > 86400000){
        let ganu = randomNomor(50)
        let gan = randomNomor(500)
        db.data.users[m.sender].limit += ganu
        db.data.users[m.sender].balance += gan
        reply(`Selamat Kamu Mendapatkan ${ganu} Limt Dan Balance ${gan}`)
        } else zidni.sendBut(m.chat, `Kamu sudah mengklaim klaim harian hari ini\ntunggu selama ${timer} lagi`, `${pushname}`, 'ok', 'ok', m)
  db.data.users[m.sender].lastclaim = new Date * 1}
  break
        case 'buy':{
        if (!args[0]) return m.reply('Contoh: Buy Limit Jumlah')
                            let q = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 4 ? 1 :Math.min(1, count)
                            if (args[0] === 'limit') {
                            let limit = 500
                               if (global.db.data.users[m.sender].balance >= limit * q) {
                                global.db.data.users[m.sender].balance -= limit * q
                                global.db.data.users[m.sender].limit += q * 1
                                zidni.reply(m.chat, `Succes membeli ${q} Limit dengan harga ${limit * q} money`, m)
                            } else zidni.reply(m.chat, `Uang anda tidak cukup untuk membeli ${q} limit dengan harga ${limit * q} money`,m)
                                  }}
                            break

	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
            case 'info':{
            reply(`Total User: ${Object.keys(global.db.data.users).length}\nRuntime: ${runtime(process.uptime())}`)}
            break

         case'papal':case'akakkaka':case'help':case'menu':{
const more = String.fromCharCode(8206)
        const read = more.repeat(4001)
        let pacar = db.data.users[sender].pasangan
let men = [sender,pacar]
        teks = `Hallo *@${sender.split("@")[0]}*
*-* Limit: ${db.data.users[m.sender].limit}
*-* Uang: Rp${db.data.users[sender].balance}
*•* Pacar: ${db.data.users[sender].pasangan ? `@${pacar.split("@")[0]}` :"Jomblo"}
*•* Total User: ${Object.keys(global.db.data.users).length}
*•* Runtime: ${runtime(process.uptime())}
*•* Web: https://m.zidni.xyz
${read}
_*メ Auto Download*_
*•* youtube
*•* ytshorts
*•* facebook
*•* twitter
*•* instagram
*•* tiktok
*•* cocofun
*•* mediafire
*•* gdrive
*•* pinterest
*•* github

_*メ Search*_
*•* ytsearch
*•* wallpaper
*•* joox
*•* spotify
*•* musik
*•* sfile
*•* apk
*•* repo
*•* brainly
*•* google
*•* gimage
*•* pinterest
*•* style

_*メ Rpg*_
*•* jadian
*•* terima
*•* tolak
*•* putus
*•* cekpacar
*•* registrasi
*•* unreg

_*メ Other*_
*•* topupff
*•* smeme
*•* smeme2
*•* swm
*•* toimg
*•* tomp4
*•* tomp3
*•* tourl
*•* ssweb
*•* waifu
*•* neko
*•* meme
*•* storyanime
*•* storyml
*•* storyff
*•* patrick
*•* spongebob
*•* doge
*•* gura
*•* waifu2x
*•* hd
*•* play
*•* ytmp3
*•* ttaudio
*•* bitly
*•* cutly
*•* claim
*•* buy
*•* afk
*•* add
*•* kick
*•* promote
*•* demote
*•* hidetag
*•* autostiker
*•* mute\n\n*𝑆𝑖𝑚𝑝𝑙𝑒 𝐵𝑜𝑡 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝 ッ*`,
prep = generateWAMessageFromContent(m.chat, { liveLocationMessage: { 
degreesLatitude:-7.6331314, 
degreesLongitude: 109.6471820,
caption: teks,
sequenceNumber: 1656662972682001, 
timeOffset: 8600,
jpegThumbnail: null, 
contextInfo: { mentionedJid: men} }}, { quoted: m
					})

return zidni.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
 
             }
break
case'pin':case'pinterest':{
reply(wet)
  if (!text) return reply(`Example use ${usedPrefix + command} minecraft`)
  hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
 zidni.sendButtonImg(m.chat, imgnyee,`*Hasil pencarian*
${text}
`, '', 'Next', command, m)})
}
break
case'gimage':{
reply(wet)
if (!args[0]) return m.reply("Mau cari gambar apa kak?")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
zidni.sendButtonImg(m.chat, images,`*Hasil pencarian*
${text}
`, '', 'Next', command, m)
})}
break

case'neko':{
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
     zidni.sendButtonImg(m.chat, json.url, 'Kyaaa><', '', 'Next', command, m)}
break
case'meme':case'darkjoke':{
let rest = 'https://api.zacros.my.id/randomimg/darkjokes'
    zidni.sendButtonImg(m.chat, rest, '🤨', '', 'Next', '.darkjokes', m)}
    break
case 'bc':{
			    if (!isOwner) return m.reply(mess.OnlyOwner)
		                 var data = await db.data.users
		                   m.reply(`Mengirim Broadcast Ke ${Object.keys(global.db.data.users).length} Chat`)
		                    for (let i of data) {
                              zidni.sendMessage(i.num, { text : q ? q : '' })}                         
                           } 
                           break
case 'bc1': case 'broadcast':{
			    if (!isOwner) return m.reply(mess.OnlyOwner)
		                 var data = await store.chats.all()
		                   m.reply(`Mengirim Broadcast Ke ${data.length} Chat`)
		                    for (let i of data) {
                              zidni.sendMessage(i.id, { text : q ? q : '' , mentions: participants.map(a => a.id)})}                         
                           } 
                           break
                           case 'bc2':{
			    if (!isOwner) return m.reply(mess.OnlyOwner)
		                 var data = await store.chats.all()
		                 m.reply(`Mengirim Broadcast Ke ${data.length} Chat`)
		                 let rep = await zidni.downloadAndSaveMediaMessage(quoted)
		                 let anu = await TelegraPh(rep)
		                 let repl = await getBuffer(anu)
                            for (let i of data) {
                             zidni.sendMessage(i.id, {image: repl, caption: `${q}`})}
                             } 
                             break
                             case'bc3':{
			    if (!isOwner) return m.reply(mess.OnlyOwner)
		                 var data = await store.chats.all()
		                 m.reply(`Mengirim Broadcast Ke ${data.length} Chat`)
		                 let rep = await zidni.downloadAndSaveMediaMessage(quoted)
		                 let anu = await TelegraPh(rep)
		                 let repl = await getBuffer(anu)
                            for (let i of data) {
                             zidni.sendMessage(i.id, {video: repl, caption: `${q}`})}}
                            break
case 'shaun':{
m.reply(wet)
let rep = await zidni.downloadAndSaveMediaMessage(quoted)
 let anu = await TelegraPh(rep)
zidni.sendMessage(m.chat, {video: {url:`https://xteam.xyz/videomaker/shaunthesheep?url=${anu}&APIKEY=HIRO`}, caption: `Nih`})}
break
case'brainly':{
    if (!text) return m.reply( `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} kapan indonesia merdeka`)
    let res = await fetch(`https://api.xteam.xyz/brainly?soal=${text}&APIKEY=cristian9407`)
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    m.reply(json.jawaban)
}
break
case 'owner': case 'creator': {
                zidni.sendContact(m.chat, global.owner, m) }
            break
            		case 'join': case 'masuk':{
            		  if (!isPremium)return m.reply("Khusus Pengguna Premium")		
				let result = args[0].split('https://chat.whatsapp.com/')[1]
                await zidni.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))            }
				break
case 'waifu':{			
					 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
			m.reply(mess.wait)
						    let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1} ]
                let buttonMessage = {image: {url: `https://yx-api.herokuapp.com/api/sfw/${command}`},caption: `Nih bang`,footer: '',buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})		  
               	db.data.users[m.sender].limit -= 5			
                       }
                   		break		
                   		case 'zero':{
                   		let yo = await getBuffer(`https://api.akuari.my.id/search/konachan?query=${q}`)
                   		reply(wet)
                   		    let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1} ]
                let buttonMessage = {image: yo,caption: `Nih bang`,footer: '',buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
            break
case 'chat': {
if (!isOwner) return m.reply(mess.owner)
if (!args.join(" ")) return m.reply(`Example :\n${prefix + command} 62813xxxx|Woi`)
const cpes = args.join(" ")
const cpese = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args.join(" ") ? args.join(" ") + "@s.whatsapp.net" : false
const nony = cpese.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT FITUR |*

Pesan dari admin bot
Nomor : @${m.sender.split("@")[0]}
Pesan : ${pesny}`
zidni.sendMessage(nony, {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await m.reply("Succes")
break
                   		    case 'storyanim': case 'storyanime':{
        m.reply(wet)
        let yo = await fetchJson(`https://api-kaysa.herokuapp.com/api/jjanime?apikey=UjgqsMTs`)        
          let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1} ]
                let buttonMessage = {video:{url: yo.video},caption: `Nih bang`,footer: '',buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})
                	db.data.users[m.sender].limit -= 5
			}
            break
           case 'storyff':{
        m.reply(wet)
        let yo = await fetchJson(`https://api-kaysa.herokuapp.com/api/jjfreefire?apikey=UjgqsMTs`)        
          let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1} ]
                let buttonMessage = {video:{url: yo.video},caption: `Nih bang`,footer: '',buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
            break
case 'storyml':{
        m.reply(wet)
        let yo = await fetchJson(`https://api-kaysa.herokuapp.com/api/jjml?apikey=UjgqsMTs`)        
          let buttons = [{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1} ]
                let buttonMessage = {video:{url: yo.video},caption: `Nih bang`,footer: '',buttons: buttons,headerType: 4 }
                zidni.sendMessage(from, buttonMessage, { quoted: m})}  
            break
        case'wallpaper':case'wallq':case'wallpaperq':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		      if (!text) return zidni.reply(m.chat, 'Silahkan masukan query', m)
let tetete = `https://api.zacros.my.id/search/alphacoders?query=${text}`
zidni.sendButtonImg(m.chat, tetete, `Hasil Dari ${text}`, '', 'Next', `wallq ${q}`, m) 
  db.data.users[m.sender].limit -= 5
  }
  break
 case'waifu2x': case'hd':{
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		
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
db.data.users[m.sender].limit -= 5
}
break
case'doge':case'spongebob':case'patrick':case 'gura':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 5
let data1 = await fetchJson(`https://api.akuari.my.id/search/sticker?query=${command}`)
let data = data1.result
 let dat = data[Math.floor(Math.random() * data.length)].url
					let ani = await fetchJson(`https://api.akuari.my.id/downloader/stickerpack?link=${dat}`)
									let anu = ani.result
									 let r = anu[Math.floor(Math.random() * anu.length)]
									 let get = await getBuffer(r)
									let nn = await zidni.sendImageAsSticker(m.chat, get, m, { packname: `By`, author: "Zidni Ganz"})}
									  
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
                 if (!(isGroupAdmins || isGroupOwner )) return m.reply( mess.admin)              
            zidni.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) return m.reply('false')
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
     case 'autosticker': case 'autostiker': {
                if (!m.isGroup) return m.reply( mess.group)
               
                if (!groupAdmins) return m.reply( mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Autosticker Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Autosticker Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await zidni.sendButtonText(m.chat, buttons, `Mode Autosticker`, zidni.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) return m.reply(mess.group)                
                if (!groupAdmins) return m.reply( mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${zidni.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${zidni.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await zidni.sendButtonText(m.chat, buttons, `Mute Bot`, zidni.user.name, m)
                }
             }
             break
             case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return m.reply( `Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return m.reply( `Example : ${prefix + command} 😅+🤔`)
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await zidni.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emoji': {
	    if (!text) return m.reply( `Example : ${prefix + command} 😅`)
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await zidni.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) return m.reply( `Example : ${prefix + command} text`)
           await zidni.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})
         }
         break
             case 'yti':{
             m.reply(wet)
             let anu = await fetchJson(`https://api.neoxr.my.id/api/rexdl-get?url=${q}&apikey=VMaYT37h`)
             let yu = `Name: ${anu.name}\nUpdate: ${anu.update}\nVersi: ${anu.version}\nSize: ${anu.size}\nPasword: ${anu.password}\n_Tunggu Upload Appnya Yaa.._`
               zidni.sendMessage(m.chat, { image: {url:anu.thumb}, caption: yu, quoted: m })}
               break
             case'apk':{
               if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 5		
 if (args.length < 1) return m.reply(`Contoh:\n${command} vpn`)
let list_rows = [];
let dat1 = await fetchJson(`https://api.neoxr.my.id/api/rexdl?q=${q}&apikey=VMaYT37h`)
 m.reply(wet)
let datu = dat1.data
for(let a of datu) {
list_rows.push({
title: a.title, description: `Name: ${a.name} | Upload: ${a.publish}\nDeskripsi: ${a.desc}`, rowId: `yti ${a.url}`})}
const sections = [
    {
	title: "App Search",
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
case 'style': case 'styletext': {
if (!args.join(" ")) return m.reply('Masukkan Query text!')
const {  styletext} = require('./lib/scraper.js')
let anu = await styletext(text)
let list_rows = [];
for(let a of anu) {
list_rows.push({
title: a.name, description: `${a.result}`, rowId: `jaksbs ${a.result}`})}
const sections = [
    {
	title: "Style Text",
	rows: list_rows
	 },]
   const listMessage = {
  text: `Style text For *${q}*`,
  footer: `${pushname}`,
  title: "",
  buttonText: "Chose One",
  sections
}
     zidni.sendMessage(from, listMessage,{ quoted: m })
     db.data.users[m.sender].limit -= 5
	}
break			 
case 'jaksbs':{
m.reply(`${q}`)}
break
             case 'ytt':{
             m.reply(wet)
             let anu = await fetchJson(`http://api.zekais.com/spotifydl?url=${q}&apikey=zekais`)
             zidni.sendMessage(m.chat, { audio: { url: anu.result }, mimetype: 'audio/mpeg', fileName: anu.title+'.mp3' }, { quoted: m })}
          break
case'sfile':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
			m.reply(wet)
 if (args.length < 1) return m.reply(`Contoh:\n${command} WhatsApp`)
let list_rows = [];
let data1 = await fetchJson(`https://api.akuari.my.id/search/sfilesearch?query=${q}`)
let data = data1.result
for(let a of data) {
list_rows.push({
title: a.nama, description: `Ukuran: ${a.size}`, rowId: `sdl ${a.link}`})}
const sections = [
    {
	title: "Sfile Search",
	rows: list_rows
	 },]
   const listMessage = {
  text: `Hasil Pencarian Dari ${q}`,
  footer: `${pushname}`,
  title: "",
  buttonText: "Chose One",
  sections
}
     zidni.sendMessage(from, listMessage,{ quoted: m })
     db.data.users[m.sender].limit -= 5
	}
break			 
case'sdl': {
const cheerio = require( 'cheerio')
reply(wet)
async function sfileDl(url) {
	let res = await fetch(url)
	let $ = cheerio.load(await res.text())
	let filename = $('div.w3-row-padding').find('img').attr('alt')
	let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
	let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
	let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10)
	return { filename, filesize, mimetype, download }
}
		let res = await sfileDl(args[0])
		if (!res) return reply( 'Error :/')
	zidni.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype: res.mimetype }, { quoted: m })
	
}
break
    
             case'musik': case 'spotify':{
               if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
			m.reply(wet)
 if (args.length < 1) return m.reply(`Contoh:\n${command} Lily Alan Walker`)
let list_rows = [];
let data1 = await fetchJson(`http://api.zekais.com/spotifysr?query=${q}&apikey=zekais`)
let data = data1.result
for(let a of data) {
list_rows.push({
title: a.title, description: `Penyanyi: ${a.artists} | Upload: ${a.release_date}`, rowId: `ytt ${a.url}`})}
const sections = [
    {
	title: "Spotify Search",
	rows: list_rows
	 },]
   const listMessage = {
  text: `Hasil Pencarian Dari ${q}`,
  footer: `${pushname}`,
  title: "",
  buttonText: "Chose One",
  sections
}
     zidni.sendMessage(from, listMessage,{ quoted: m })
     db.data.users[m.sender].limit -= 5
	}
break			 
 case'apk': case 'apks':{
               if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
			m.reply(wet)
 if (args.length < 1) return m.reply(`Contoh:\n${command} WhatsApp`)
let list_rows = [];
let data1 = await fetchJson(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${q}&apikey=dappakntlll`)
let data = data1.result
for(let a of data) {
list_rows.push({
title: a.title, description: `Update: ${a.update_on} | Deskripsi: ${a.desc}`, rowId: `appdl ${a.url}`})}
const sections = [
    {
	title: "App Search",
	rows: list_rows
	 },]
   const listMessage = {
  text: `Hasil Pencarian Dari ${q}`,
  footer: `${pushname}`,
  title: "",
  buttonText: "Chose One",
  sections
}
     zidni.sendMessage(from, listMessage,{ quoted: m })
     db.data.users[m.sender].limit -= 50
	}
break			 
case'ggh':{
m.reply(`${q}`)}
break
case'ggs':case'google':{
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
			m.reply(wet)
 if (args.length < 1) return m.reply(`Contoh:\n${command} Anime`)
let list_rows = [];
let data1 = await fetchJson(`https://api.akuari.my.id/search/google?query=${q}`)
let data = data1.result
for(let a of data) {
list_rows.push({
title: a.title, description: `${a.snippet}`, rowId: `ggh *Name:* ${a.title}\n*Link:* ${a.link}\n*Sinopsis:* ${a.snippet}`})}
const sections = [
    {
	title: "Google Search",
	rows: list_rows
	 },]
   const listMessage = {
  text: `Hasil Pencarian Dari ${q}`,
  footer: `${pushname}`,
  title: "",
  buttonText: "Chose One",
  sections
}
     zidni.sendMessage(from, listMessage,{ quoted: m })
     db.data.users[m.sender].limit -= 5
	}
break			
  case'joox':{
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		
		m.reply(wet)
const isUrl = str => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi.test(str)
    if (!text) return m.reply( `*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${usedPrefix + command} alone`)
    if (isUrl(text)) return m.reply( `*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${usedPrefix + command} alone`)
    let anu = await fetchJson(`http://api.zekais.com/spotify?query=${q}&apikey=zekais`)
     let pesan = `
*Penyanyi:* ${anu.artists}
*Judul:* ${anu.title}
*Durasi:* ${anu.duration}
\n_Tunggu Upload Musiknya ya.._`.trim()
     zidni.sendMessage(m.chat, { image: {url:anu.thumb}, caption: pesan, quoted: m })
      zidni.sendMessage(m.chat, { audio: { url: anu.result }, mimetype: 'audio/mpeg', fileName: anu.title+'.mp3' }, { quoted: m })
      db.data.users[m.sender].limit -= 5
      }
          break
    
  case 'tinyurl':{
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (!isUrl(args[0])) return m.reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/tinyurl?url=${q}&APIKEY=HIRO`)
			    m.reply(`Link : ${datta.result}`)}
				break
case 'gg':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (!isUrl(args[0])) return m.reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/gg?url=${q}&nama=st4rz&APIKEY=HIRO`)
			    m.reply(`Link : ${datta.result}`)}
				break
case 'bitly':{
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
if (!isUrl(args[0])) return m.reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/bitly?url=${q}&APIKEY=HIRO`)
			    m.reply(`Link : ${datta.result.id}`)}
				break
case 'cutly': 
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
  if (!isUrl(args[0])) return m.reply("Masukan Link")
  				var datta = await fetchJson(`https://xteam.xyz/shorturl/cuttly?url=${q}&APIKEY=HIRO`)
			    m.reply(`Link : ${datta.result.shortLink}`)
				break				
			
                   			case 'get': case 'komik':{
            axios.get(q)
	.then(({ qrCode }) => {
            m.reply(`${qrCode}`)
            })}
            break          
case 'github':case 'repo':{
 if (!args[0]) return m.reply( 'Cari apa?')
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
	
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
    m.reply(str)
    	db.data.users[m.sender].limit -= 3
    	}
    break
        case 'tourl':{
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 5
		const uploadFile = require('./lib/uploadFile')
const uploadImage = require('./lib/uploadImage')
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
		db.data.users[m.sender].limit -= 5
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
            case 'ytnya':{
                   m.reply(mess.wait)
				if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
				const { y2mateA, y2mateV } = require('./lib/y2mate4')
    let res = await y2mateV(q).catch(e => {
            m.reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')})
            zidni.sendMessage(m.chat, {video: { url:res[0].link },
                    caption: `Youtube Quality 480p\n\n`+res[0].judul}, { quoted: m })
                }
                break
              case 'ytsearch': case 'yts':{
               if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis		
 if (args.length < 1) return m.reply(`Contoh:\n${command} Lily Alan Walker`)
let list_rows = [];
let yts = require("yt-search")
            const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Durasi: ${a.duration} | views: ${a.views}`, rowId: `ytnya ${a.url}`})}
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
     zidni.sendMessage(from, listMessage,{ quoted: m })
     db.data.users[m.sender].limit -= 5
     }
break			 
case 'ttaud':	case 'ttaudio': case 'tiktokaudio':{
	 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
	     if (!args[0]) return m.reply('Masukan Parameter Url')
			    if (!args[0].includes('tiktok')) return m.reply(mess.error.Iv)
			    m.reply(mess.wait)
			    hx.ttdownloader(args[0]).then( data => {
			      zidni.sendMessage(from, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: m})			     
				}).catch(() => m.reply(mess.error.api))
		     	db.data.users[m.sender].limit -= 5
					         }
		         break                     
             case 'play':{
                     if (!args[0])return m.reply('Masukan Paramater Query')
                     if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
	    const { y2mateV } = require('./lib/y2mate4') 
			m.reply(wet)
			 res = await yts(text)
			  resu = await y2mateV(res.all[0].url).catch(e => {
            m.reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')  })
            const { y2mateA } = require('./lib/y2mate4')    
           let resi = await y2mateA(res.all[0].url)
            zidni.sendMessage(m.chat, {video: { url:resu[0].link },
                    caption: `Youtube Quality 480p\n`+resu[0].judul}, { quoted: m })
        zidni.sendMessage(from, { audio: { url: resi[0].link },mimetype: 'audio/mp4', }, { quoted : m})
        	db.data.users[m.sender].limit -= 5
             }
			                break	       
             case'ytmp3':case 'ytmp33': {
             if (!args[0])return m.reply('Masukan Paramater Url')
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 1
    		var mulaikah = args.join(' ')
		m.reply(wet)
                  const { y2mateA, y2mateV } = require('./lib/y2mate4')
         teks = args.join(' ')    
           let res = await y2mateA(teks).catch(e => {
            m.reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
           zidni.sendMessage(from, { audio: { url: res[0].link },mimetype: 'audio/mp4', }, { quoted : m})}
                  break
                         	case 'setpp':
			case 'setppbot': {
                if (!isOwner) return m.reply(mess.owner)
                if (!quoted) return m.reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
                 let media = await zidni.downloadAndSaveMediaMessage(quoted)
                await zidni.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success) }
                break
            case 'public': {
                if (!isOwner) return m.reply(mess.owner)
                zidni.public = true
                m.reply('Sukse Change To Public Usage') }
            break
            case 'self': {
                if (!isOwner) return m.reply(mess.owner)
                zidni.public = false
                m.reply('Sukses Change To Self Usage') }
            break
             case 'smeme2':
          if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 5
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
										m.reply('Eror')}
									break
									case 'smeme': case 'stickermeme': case 'stickmeme': {																		 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 5
		if (!q) return m.reply('Reply Foto Atau Stiker Dengan Caption\nSmeme Name')
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
		db.data.users[m.sender].limit -= 5
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
									
       case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis		
                if (!q) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1 teks2`)
              m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await zidni.downloadMediaMessage(quoted)
                    let encmedia = await zidni.sendImageAsSticker(m.chat, media, m, { packname: q, author: '' })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await zidni.downloadMediaMessage(quoted)
                    let encmedia = await zidni.sendVideoAsSticker(m.chat, media, m, { packname: q, author: '' })
                    await fs.unlinkSync(encmedia)
                } else {
                    return m.reply( `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
                db.data.users[m.sender].limit -= 5
            }
            break
case'tembak':case'jadian':{
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return zidni.reply(m.chat, `Masukan nomor, tag target atau balas pesan target`, m)
  
  if(isNaN(number)) return zidni.reply(m.chat, `_*Nomor tidak valid.*_`, m)
  if(number.length > 15) return zidni.reply(m.chat, `*_Format Tidak Valid.*_`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await zidni.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.id == user) : {}
    if(!users) return zidni.reply(m.chat, `*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`, m)
    if(user === m.sender) return zidni.reply(m.chat, `_*Tidak bisa berpacaran dengan diri sendiri.*_`, m)
    if(user === zidni.user.jid) return zidni.reply(m.chat, `_*Tidak bisa berpacaran dengan saya. :')*_`, m)

    if (typeof global.db.data.users[user] == "undefined") return m.reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")
    
    if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
      zidni.sendText(m.chat,`Kamu sudah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\nSilahkan putus dulu (ketik .putus untuk memutuskan hubungan) untuk menembak @${user.split('@')[0]}\n\nBtw yang setia dikit banget!`,m, {
        mentions: [user,global.db.data.users[m.sender].pasangan]
      })
    }else if(global.db.data.users[user].pasangan != ""){
      var pacar = global.db.data.users[user].pasangan
      if (global.db.data.users[pacar].pasangan == user){
        if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return zidni.reply(m.chat,`Anda sudah berpacaran dengan @${beb.split('@')[0]}`,m,{contextInfo: {
          mentions: [beb]
        }})
        zidni.sendText(m.chat,`Maaf, @${user.split('@')[0]} sudah berpacaran dengan @${pacar.split('@')[0]}\nSilahkan cari pasangan lain!`,m,{
          mentions: [user,pacar]
        })
      }else{
        global.db.data.users[m.sender].pasangan = user
        zidni.sendText(m.chat,`Anda baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${usedPrefix}terima @user* untuk menerima\n*${usedPrefix}tolak @user untuk menolak*`,m,{
          mentions: [user]
        })
      }
    }else if (global.db.data.users[user].pasangan == m.sender){
      global.db.data.users[m.sender].pasangan = user
      zidni.sendText(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu 🥳🥳🥳`,m, {
        mentions: [user]
      })
    }else {
      global.db.data.users[m.sender].pasangan = user
      zidni.sendText(m.chat,`Kamu baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${usedPrefix}terima @user* untuk menerima\n*${usedPrefix}tolak @user untuk menolak*`,m,{
        mentions: [user]
      })
    }
	}	
}
break
case'terima':{
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return zidni.reply(m.chat, `Berikan nomor, tag atau balas pesan target.`, m)
  
  if(isNaN(number)) return zidni.reply(m.chat, `Nomor yang anda masukan tidak salah!`, m)
  if(number.length > 15) return zidni.reply(m.chat, `Format salah!`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await zidni.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.id == user) : {}
    if(!users) return zidni.reply(m.chat, `Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`, m)
    if(user === m.sender) return zidni.reply(m.chat, `Tidak bisa berpacaran dengan diri sendiri!`, m)
    if(user === zidni.user.jid) return zidni.reply(m.chat, `Tidak bisa berpacaran dengan saya t_t`, m)
    
    if(global.db.data.users[user].pasangan != m.sender){
      zidni.sendText(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m, {
        mentions: [user]
      })
    }else{
      global.db.data.users[m.sender].pasangan = user
      zidni.sendText(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu @${user.split('@')[0]} 💓 @${m.sender.split('@')[0]} 🥳🥳🥳`,m, {
        mentions: [m.sender,user]
      })
    }
	}	
}
break
case 'putus':{
  ayg = global.db.data.users[m.sender]

  if(ayg.pasangan == ""){
    return zidni.reply(m.chat,`Anda tidak memiliki pasangan.`,m)
  }
  
  beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

  if (typeof beb == "undefined"){
    zidni.sendText(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m, {
        mentions: [global.db.data.users[m.sender].pasangan]
    })
    ayg.pasangan = ""
  }

  if (m.sender == beb.pasangan){
    zidni.sendText(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m, {
        mentions: [global.db.data.users[m.sender].pasangan]
    })
    ayg.pasangan = ""
    beb.pasangan = ""
  }else {
    zidni.reply(m.chat,`Anda tidak memiliki pasangan.`,m)
  }
}
break
case'tolak':{
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return zidni.reply(m.chat, `Masukan nomor, tag atau balas pesan target.`, m)
  
  if(isNaN(number)) return zidni.reply(m.chat, `Nomor yang anda masukan salah!`, m)
  if(number.length > 15) return zidni.reply(m.chat, `Format salah!`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await zidni.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.id == user) : {}
    if(!users) return zidni.reply(m.chat, `Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`, m)
    if(user === m.sender) return zidni.reply(m.chat, `Tidak bisa berpacaran dengan diri sendiri!`, m)
    if(user === zidni.user.jid) return zidni.reply(m.chat, `*Tidak bisa berpacaran dengan saya t_t`, m)
    
    if(global.db.data.users[user].pasangan != m.sender){
      zidni.sendText(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m, {
        mentions:[user]
      })
    }else{
      global.db.data.users[user].pasangan = ""
      zidni.sendText(m.chat,`Anda baru saja menolak @${user.split('@')[0]} untuk menjadi pasangan anda!`,m, {
        mentions:[user]
      })
    }
	}	
}
break
case'cekpacar':{
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return zidni.reply(m.chat, `Maaf, Nomor yang anda masukan salah!`, m)

  if (!text && !m.quoted){
    user = m.sender
    orang = "Kamu"
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    orang = "Orang yang kamu tag"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    orang = "Orang yang kamu balas"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    orang = "Orang yang kamu tag"
  }

  if (typeof global.db.data.users[user] == "undefined"){
    return m.reply("Target tidak terdaftar di dalam database!")
  }

  if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
    return m.reply("Target tidak terdaftar di dalam database!")
  }

  if (global.db.data.users[user].pasangan == "") {
    zidni.reply(m.chat, `${orang} tidak memiliki pasangan dan tidak sedang menembak siapapun\n\n*Ketik .tembak @user untuk menembak seseorang*`, m)
  }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
    zidni.sendText(m.chat, `${orang} sedang menunggu jawaban dari @${global.db.data.users[user].pasangan.split('@')[0]} karena sedang tidak diterima atau di tolak\n\nKetik *${usedPrefix}ikhlasin* untuk mengikhlaskan!`, m, {
        mentions:[global.db.data.users[user].pasangan]
    })
  }else {
    zidni.sendText(m.chat, `${orang} sedang menjalani hubungan dengan @${global.db.data.users[user].pasangan.split('@')[0]} 💓💓💓`, m, {
        mentions:[global.db.data.users[user].pasangan]
    })
  }
}
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
        function pic(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
    zidni.sendMessage(m.chat, {
          react: {
            text: `${pic(['😨','😅','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
          }})
      const sen = (teks) => {
            zidni.sendMessage(`${owner}@s.whatsapp.net`, {text: teks}, {quoted: m})}
        m.reply(`*⚠️ Internal Server Eror️*`)
        sen(`Command \nEror\n\n\n`+util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
