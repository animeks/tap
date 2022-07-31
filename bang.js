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
                  if (!isNumber(user.limit)) user.limit = limitUser                 
                   if (!isNumber(user.balance)) user.balance = 0
                   if (!isNumber(user.lastclaim)) user.lastclaim = 0
                     if (!isNumber(user.num)) user.num = ''
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',                                       
                balance: 0,
                limit: limitUser,
                lastclaim: 0,   
                num: '',
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
        // Public & Self
        if (!zidni.public) {
            if (!m.key.fromMe) return
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
     	     	setTimeout( () => { m.reply('Foto Berhasil Di Ubah Ke Stiker Untuk Mematikan Fitur AutoStiker Ketik\n*#autosticker off*')}, 4000)}}
     	
     	 if (!m.key.fromMe && !m.isGroup && !/webp/.test(mime) && /image/.test(mime)) {
         let p = await zidni.downloadAndSaveMediaMessage(quoted)         
            let any = await TelegraPh(p)
     	zidni.sendImageAsSticker(m.chat, p, m, { packname: `Auto Sticker\nCreated By`, author: `\nZidniGanz` })
     	m.reply(`Url This Image : ${any}`)
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
						a.includes("soundcloud.com"));
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
                    		 m.reply(mess.wait)
		 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 5
		let anu = await fetchJson(`https://api.akuari.my.id/downloader/fbdl?link=${link}`)
     zidni.sendMessage(m.chat, {video: { url: anu.url.url},
                    caption: 'Facebook '+`${anu.url.subname} `+`Title ${anu.info.title}`}, { quoted: m })
                    }
                    
        	  if (/https?:\/\/((www\.|web\.|m\.)?facebook\.com)/i.test(m.text)){
        			 m.reply(mess.wait)
		 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		let ani = await fetchJson(`https://xteam.xyz/dl/fbv2?url=${link}&APIKEY=HIRO`)
		let anu = ani.result.hd
		let anok = ani.result.meta
		   await zidni.sendMessage(m.chat, {video: {url: anu.url}, caption: anok.title},{ quoted: m })
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
			 m.reply(mess.wait)
			 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
	  let anu = await fetchJson(`http://zekais-api.herokuapp.com/igdl2?url=${link}&apikey=zekais`)
     zidni.sendFile(m.chat, anu.result[0].url, 'ig.' + anu.result[0].type, `Instagram • ${anu.result[0].type}`, m)
     	db.data.users[m.sender].limit -= 5
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
        case'ssweb':case'ss':{
  if (args[0] === 'Nekopoi.care') {
      zidni.reply(m.chat, '*Tobat woy*', m)
      reject
  }
  if (args[0] === 'Nhentai.net') {
      zidni.reply(m.chat, '*Tobat woy*', m)
      reject
  }
  let full = /f$/i.test(command)
  if (!args[0]) return zidni.reply(m.chat, 'Tidak ada url', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch('https://hadi-api.herokuapp.com/api/ssweb?url=' + encodeURIComponent(url) + '&device=phone&full=on')).buffer()
  zidni.sendFile(m.chat, ss, 'screenshot.png', url, m)}
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
        let ganu = randomNomor(20)
        let y = randomNomor(4)
        let gan = randomNomor(500)
        db.data.users[m.sender].limit += ganu
        global.db.data.users[m.sender].potion += y
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
        repl = (text, options) => zidni.sendMessage(m.chat, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted:m })     
 repl(`Hallo *@${sender.split("@")}*
*-* Limit: ${db.data.users[m.sender].limit}
*-* Uang: Rp${db.data.users[sender].balance}
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
*•* pinterest
*•* github

_*メ Search*_
*•* ytsearch
*•* wallpaper
*•* joox
*•* spotify
*•* musik
*•* repo
*•* brainly
*•* style

_*メ Other*_
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
*•* mute\n\n*𝑆𝑖𝑚𝑝𝑙𝑒 𝐵𝑜𝑡 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝 ッ*`)
 
             }
break
case'neko':{
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  zidni.sendFile(m.chat, json.url, '', 'Nyaa', m)}
break
case'meme':case'darkjoke':{
let rest = 'https://api.zacros.my.id/randomimg/darkjokes'
    zidni.sendButtonImg(m.chat, rest, 'Dark? 🤨', '', 'Next', '.darkjokes', m)}
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
  db.data.users[m.sender].limit -= 5
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
             let anu = await fetchJson(`http://zekais-api.herokuapp.com/spotifydl?url=${q}&apikey=zekais`)
             zidni.sendMessage(m.chat, { audio: { url: anu.result }, mimetype: 'audio/mpeg', fileName: anu.title+'.mp3' }, { quoted: m })}
          break
             case'musik': case 'spotify':{
               if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
			m.reply(wet)
 if (args.length < 1) return m.reply(`Contoh:\n${command} Lily Alan Walker`)
let list_rows = [];
let data1 = await fetchJson(`http://zekais-api.herokuapp.com/spotifysr?query=${q}&apikey=zekais`)
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
  case'joox':{
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		
		m.reply(wet)
const isUrl = str => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi.test(str)
    if (!text) return m.reply( `*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${usedPrefix + command} alone`)
    if (isUrl(text)) return m.reply( `*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${usedPrefix + command} alone`)
    let anu = await fetchJson(`http://zekais-api.herokuapp.com/spotify?query=${q}&apikey=zekais`)
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
	.then(({ data }) => {
            m.reply(`${data}`)
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
									case 'swm': case 'wm':{
									 if (!isPremium && global.db.data.users[m.sender].limit < 1) return zidni.sendBut(m.chat, end, `${pushname}`, 'Klaim', 'claim', m)// respon ketika limit habis
		db.data.users[m.sender].limit -= 5
     if (!quoted) return m.reply( `Balas Video/Image/stiker Dengan Caption ${prefix + command}`)
                    if (/webp/.test(mime) && /image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await zidni.sendImageAsSticker(m.chat, media, m, { packname: `${q}`, author:``})
                await fs.unlinkSync(encmedia)
            } else if (/webp/.test(mime) && /video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await zidni.sendVideoAsSticker(m.chat, media, m, { packname: `${q}`, author: ``})
                await fs.unlinkSync(encmedia)
            } else {
                return m.reply( `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
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
            text: `${pic(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
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
