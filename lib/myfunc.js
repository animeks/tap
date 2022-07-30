const { default: makeWASocket, BufferJSON, MessageType, MessageOptions, Mimetype, generateWAMessageFromContent, downloadContentFromMessage, proto } = require('@adiwajshing/baileys')
const chalk = require('chalk')
const fs = require('fs')
const Crypto = require('crypto')
const axios = require('axios')
const moment = require('moment-timezone')
const { sizeFormatter } = require('human-readable')
const util = require('util')
const jimp = require('jimp')
const { defaultMaxListeners } = require('stream')
const cheerio = require('cheerio')

const downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
        let extension = mime.split('/')[1]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
}

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)

exports.unixTimestampSeconds = unixTimestampSeconds

exports.generateMessageTag = (epoch) => {
    let tag = (0, exports.unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch; // attach epoch if provided
    return tag;
}

exports.processTime = (timestamp, now) => {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " h, " : " h, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " j, " : " j, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " m, " : " m, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? "d" : "d") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.clockString = (ms) => {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
exports.msToDate = (ms) => {
      let days = Math.floor(ms / (24 * 60 * 60 * 1000));
      let daysms = ms % (24 * 60 * 60 * 1000);
      let hours = Math.floor((daysms) / (60 * 60 * 1000));
      let hoursms = ms % (60 * 60 * 1000);
      let minutes = Math.floor((hoursms) / (60 * 1000));
      let minutesms = ms % (60 * 1000);
      let sec = Math.floor((minutesms) / (1000));
      return days + " D " + hours + " H " + minutes + " M";
      // +minutes+":"+sec;
    }
exports.getTime = (format, date) => {
	if (date) {
		return moment(date).locale('id').format(format)
	} else {
		return moment.tz('Asia/Jakarta').locale('id').format(format)
	}
}
exports.apk = async (query) => {
	return new Promise((resolve) => {
		axios.get('https://rexdl.com/?s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const jenis = [];
				const date = [];
				const desc = [];
				const link = [];
				const thumb = [];
				const result = [];
				$('div > div.post-content').each(function(a, b) {
					judul.push($(b).find('h2.post-title > a').attr('title'))
					jenis.push($(b).find('p.post-category').text())
					date.push($(b).find('p.post-date').text())
					desc.push($(b).find('div.entry.excerpt').text())
					link.push($(b).find('h2.post-title > a').attr('href'))
				})
				$('div > div.post-thumbnail > a > img').each(function(a, b) {
					thumb.push($(b).attr('data-src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						creator: 'Fajar Ihsana',
						judul: judul[i],
						kategori: jenis[i],
						upload_date: date[i],
						deskripsi: desc[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				resolve(result)
			})
	})
}
exports.apkdown = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const total = []
$(`div.entry-inner`).each(function(e,hasil){
let desc = $(hasil).find('p').text()

let title = $('div.post-inner.group').find('h1.post-title').text()

let size = $('div#dlbox1').find('ul > li > span').text().split('size: ')[1].split('Update')[0]

let vers = $('div#dlbox1').find('ul > li > span').text().split('Version: ')[1].split('File')[0]

let up = $('div#dlbox1').find('ul > li > span').text().split('Update: ')[1]

let link = $('div#dlbox12').find('li > a').attr('href')

let thumb = $('div#dlbox').find('img').attr('data-src')

total.push({title,size,vers,up,link,thumb,desc})
console.log(total)
})
return (total)
}
exports.userLeveling = (levelRole) => {
	var role = `Newbie ㋡`
                   if (levelRole <= 2) {
            return role = `Newbie ㋡`
        } else if (levelRole <= 4) {
            return role = `Beginner Grade 1 ⚊¹`
        } else if (levelRole <= 6) {
            return role = `Beginner Grade 2 ⚊²`
        } else if (levelRole <= 8) {
            return role = `Beginner Grade 3 ⚊³`
        } else if (levelRole <= 10) {
            return role = `Beginner Grade 4 ⚊⁴`
        } else if (levelRole <= 12) {
            return role = `Private Grade 1 ⚌¹`
        } else if (levelRole <= 14) {
            return role = `Private Grade 2 ⚌²`
        } else if (levelRole <= 16) {
            return role = `Private Grade 3 ⚌³`
        } else if (levelRole <= 18) {
            return role = `Private Grade 4 ⚌⁴`
        } else if (levelRole <= 20) {
            return role = `Private Grade 5 ⚌⁵`
        } else if (levelRole <= 22) {
            return role = `Corporal Grade 1 ☰¹`
        } else if (levelRole <= 24) {
            return role = `Corporal Grade 2 ☰²`
        } else if (levelRole <= 26) {
            return role = `Corporal Grade 3 ☰³`
        } else if (levelRole <= 28) {
            return role = `Corporal Grade 4 ☰⁴`
        } else if (levelRole <= 30) {
            return role = `Corporal Grade 5 ☰⁵`
        } else if (levelRole <= 32) {
            return role = `Sergeant Grade 1 ≣¹`
        } else if (levelRole <= 34) {
            return role = `Sergeant Grade 2 ≣²`
        } else if (levelRole <= 36) {
            return role = `Sergeant Grade 3 ≣³`
        } else if (levelRole <= 38) {
            return role = `Sergeant Grade 4 ≣⁴`
        } else if (levelRole <= 40) {
            return role = `Sergeant Grade 5 ≣⁵`
        } else if (levelRole <= 42) {
            return role = `Staff Grade 1 ﹀¹`
        } else if (levelRole <= 44) {
            return role = `Staff Grade 2 ﹀²`
        } else if (levelRole <= 46) {
            return role = `Staff Grade 3 ﹀³`
        } else if (levelRole <= 48) {
            return role = `Staff Grade 4 ﹀⁴`
        } else if (levelRole <= 50) {
            return role = `Staff Grade 5 ﹀⁵`
        } else if (levelRole <= 52) {
            return role = `Sergeant Grade 1 ︾¹`
        } else if (levelRole <= 54) {
            return role = `Sergeant Grade 2 ︾²`
        } else if (levelRole <= 56) {
            return role = `Sergeant Grade 3 ︾³`
        } else if (levelRole <= 58) {
            return role = `Sergeant Grade 4 ︾⁴`
        } else if (levelRole <= 60) {
            return role = `Sergeant Grade 5 ︾⁵`
        } else if (levelRole <= 62) {
            return role = `2nd Lt. Grade 1 ♢¹ `
        } else if (levelRole <= 64) {
            return role = `2nd Lt. Grade 2 ♢²`
        } else if (levelRole <= 66) {
            return role = `2nd Lt. Grade 3 ♢³`
        } else if (levelRole <= 68) {
            return role = `2nd Lt. Grade 4 ♢⁴`
        } else if (levelRole <= 70) {
            return role = `2nd Lt. Grade 5 ♢⁵`
        } else if (levelRole <= 72) {
            return role = `1st Lt. Grade 1 ♢♢¹`
        } else if (levelRole <= 74) {
            return role = `1st Lt. Grade 2 ♢♢²`
        } else if (levelRole <= 76) {
            return role = `1st Lt. Grade 3 ♢♢³`
        } else if (levelRole <= 78) {
            return role = `1st Lt. Grade 4 ♢♢⁴`
        } else if (levelRole <= 80) {
            return role = `1st Lt. Grade 5 ♢♢⁵`
        } else if (levelRole <= 82) {
            return role = `Major Grade 1 ✷¹`
        } else if (levelRole <= 84) {
            return role = `Major Grade 2 ✷²`
        } else if (levelRole <= 86) {
            return role = `Major Grade 3 ✷³`
        } else if (levelRole <= 88) {
            return role = `Major Grade 4 ✷⁴`
        } else if (levelRole <= 90) {
            return role = `Major Grade 5 ✷⁵`
        } else if (levelRole <= 92) {
            return role = `Colonel Grade 1 ✷✷¹`
        } else if (levelRole <= 94) {
            return role = `Colonel Grade 2 ✷✷²`
        } else if (levelRole <= 96) {
            return role = `Colonel Grade 3 ✷✷³`
        } else if (levelRole <= 98) {
            return role = `Colonel Grade 4 ✷✷⁴`
        } else if (levelRole <= 100) {
            return role = `Colonel Grade 5 ✷✷⁵`
        } else if (levelRole <= 102) {
            return role = `Brigadier Early ✰`
        } else if (levelRole <= 104) {
            return role = `Brigadier Silver ✩`
        } else if (levelRole <= 106) {
            return role = `Brigadier gold ✯`
        } else if (levelRole <= 108) {
            return role = `Brigadier Platinum ✬`
        } else if (levelRole <= 110) {
            return role = `Brigadier Diamond ✪`
        } else if (levelRole <= 112) {
            return role = `Major General Early ✰`
        } else if (levelRole <= 114) {
            return role = `Major General Silver ✩`
        } else if (levelRole <= 116) {
            return role = `Major General gold ✯`
        } else if (levelRole <= 118) {
            return role = `Major General Platinum ✬`
        } else if (levelRole <= 120) {
            return role = `Major General Diamond ✪`
        } else if (levelRole <= 122) {
            return role = `Lt. General Early ✰`
        } else if (levelRole <= 124) {
            return role = `Lt. General Silver ✩`
        } else if (levelRole <= 126) {
            return role = `Lt. General gold ✯`
        } else if (levelRole <= 128) {
            return role = `Lt. General Platinum ✬`
        } else if (levelRole <= 130) {
            return role = `Lt. General Diamond ✪`
        } else if (levelRole <= 132) {
            return role = `General Early ✰`
        } else if (levelRole <= 134) {
            return role = `General Silver ✩`
        } else if (levelRole <= 136) {
            return role = `General gold ✯`
        } else if (levelRole <= 138) {
            return role = `General Platinum ✬`
        } else if (levelRole <= 140) {
            return role = `General Diamond ✪`
        } else if (levelRole <= 142) {
            return role = `Commander Early ★`
        } else if (levelRole <= 144) {
            return role = `Commander Intermediate ⍣`
        } else if (levelRole <= 146) {
            return role = `Commander Elite ≛`
        } else if (levelRole <= 148) {
            return role = `The Commander Hero ⍟`
        } else if (levelRole <= 152) {
            return role = `Legends I 忍`
        } else if (levelRole <= 154) {
            return role = `Legends I 忍`
        } else if (levelRole <= 156) {
            return role = `Legends I 忍`
        } else if (levelRole <= 158) {
            return role = `Legends I 忍`
        } else if (levelRole <= 160) {
            return role = `Legends I 忍`
        } else if (levelRole <= 162) {
            return role = `Legends I 忍`
        } else if (levelRole <= 164) {
            return role = `Legends I 忍`
        } else if (levelRole <= 166) {
            return role = `Legends II 忍`
        } else if (levelRole <= 168) {
            return role = `Legends II 忍`
        } else if (levelRole <= 170) {
            return role = `Legends II 忍`
        } else if (levelRole <= 172) {
            return role = `Legends II 忍`
        } else if (levelRole <= 174) {
            return role = `Legends II 忍`
        } else if (levelRole <= 176) {
            return role = `Legends II 忍`
        } else if (levelRole <= 178) {
            return role = `Legends II 忍`
        } else if (levelRole <= 180) {
            return role = `Legends II 忍`
        } else if (levelRole <= 182) {
            return role = `Legends II 忍`
        } else if (levelRole <= 184) {
            return role = `Legends II 忍`
        } else if (levelRole <= 186) {
            return role = `Legends II 忍`
        } else if (levelRole <= 188) {
            return role = `Legends II 忍`
        } else if (levelRole <= 190) {
            return role = `Legends II 忍`
        } else if (levelRole <= 192) {
            return role = `Legends I 忍`
        } else if (levelRole <= 194) {
            return role = `Legends II 忍`
        } else if (levelRole <= 196) {
            return role = `Legends II 忍`
        } else if (levelRole <= 198) {
            return role = `Legends II 忍`
        } else if (levelRole <= 200) {
            return role = `Legends III 忍`
        } else if (levelRole <= 210) {
            return role = `Legends III 忍`
        } else if (levelRole <= 220) {
            return role = `Legends III 忍`
        } else if (levelRole <= 230) {
            return role = `Legends III 忍`
        } else if (levelRole <= 240) {
            return role = `Legends III 忍`
        } else if (levelRole <= 250) {
            return role = `Legends III 忍`
        } else if (levelRole <= 260) {
            return role = `Legends III 忍`
        } else if (levelRole <= 270) {
            return role = `Legends III 忍`
        } else if (levelRole <= 280) {
            return role = `Legends III 忍`
        } else if (levelRole <= 290) {
            return role = `Legends III 忍`
        } else if (levelRole <= 300) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 310) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 320) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 330) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 340) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 350) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 360) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 370) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 380) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 390) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 400) {
            return role = `Legends V 忍`
        } else if (levelRole <= 410) {
            return role = `Legends V 忍`
        } else if (levelRole <= 420) {
            return role = `Legends V 忍`
        } else if (levelRole <= 430) {
            return role = `Legends V 忍`
        } else if (levelRole <= 440) {
            return role = `Legends V 忍`
        } else if (levelRole <= 450) {
            return role = `Legends V 忍`
        } else if (levelRole <= 460) {
            return role = `Legends V 忍`
        } else if (levelRole <= 470) {
            return role = `Legends V 忍`
        } else if (levelRole <= 480) {
            return role = `Legends V 忍`
        } else if (levelRole <= 490) {
            return role = `Legends V 忍`
        } else if (levelRole <= 500) {
            return role = `Legends VI 忍`
        } else if (levelRole <= 600) {
            return role = `Legends VII 忍`
        } else if (levelRole <= 700) {
            return role = `Legends VIII 忍`
        } else if (levelRole <= 800) {
            return role = `Legends IX 忍`
        } else if (levelRole <= 900) {
            return role = `Legends X 忍`
        } else if (levelRole <= 1000) {
            return role = `Mythic I 上帝`
        } else if (levelRole <= 2000) {
            return role = `Mythic II 上帝`
        } else if (levelRole <= 3000) {
            return role = `Mythic III 上帝`
        } else if (levelRole <= 4000) {
            return role = `Mythic IV 上帝`
        } else if (levelRole <= 5000) {
            return role = `Mythic V 上帝`
        } else if (levelRole <= 6000) {
            return role = `Mythic VII 上帝`
        } else if (levelRole <= 7000) {
            return role = `Mythic VIII 上帝`
        } else if (levelRole <= 8000) {
            return role = `Mythic IX 上帝`
        } else if (levelRole <= 9000) {
            return role = `Mythic X 上帝`
        } else if (levelRole <= 10000) {
            return role = `Awakened Mythic 特尔邦贡`
	    } else if (levelRole <= 99999999999) {
   	         return role = `End level 程度❗`
        }
}
	
	
	exports.userXp = (jumlahXp) => {
	       var bars = `[▒▒▒▒▒▒▒▒▒▒]`
	      if (jumlahXp <= 5) {
				return bars = `[▒▒▒▒▒▒▒▒▒▒]`
			} else if (jumlahXp <= 10) {
				return bars = `[█▒▒▒▒▒▒▒▒▒]`
			} else if (jumlahXp <= 20) {
				return bars = `[██▒▒▒▒▒▒▒▒]`
			} else if (jumlahXp <= 30) {
				return bars = `[███▒▒▒▒▒▒▒]`
			} else if (jumlahXp <= 40) {
				return bars = `[████▒▒▒▒▒▒]`
			} else if (jumlahXp <= 50) {
				return bars = `[█████▒▒▒▒▒]`
			} else if (jumlahXp <= 60) {
				return bars = `[██████▒▒▒▒]`
			} else if (jumlahXp <= 70) {
				return bars = `[███████▒▒▒]`
			} else if (jumlahXp <= 80) {
				return bars = `[████████▒▒]`
			} else if (jumlahXp <= 90) {
				return bars = `[█████████▒]`
			} else if (jumlahXp <= 100) {
				return bars = `[██████████]`
			} else if (jumlahXp <= 1000) {
				return bars = `[██████████]`
			} 
	}
	
exports.formatDate = (n, locale = 'id') => {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
}

exports.tanggal = (numer) => {
	myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
				myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
				return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

exports.formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

function delay(ms) {
	return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

function format(...args) {
	return util.format(...args)
}

exports.logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('Input and Output must have same length')
	for (let i in inp)
		if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}

exports.generateProfilePicture = async (buffer) => {
	const jimp = await jimp_1.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG)
	}
}

exports.parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

exports.getGroupAdmins = (participantes) => {
    var admins = []
    for (let i of participantes) {
        i.admin === "admin" ? admins.push(i.id) : ''
    }
    return admins
}

/**
 * Serialize Message
 * @param {WAConnection} conn 
 * @param {Object} m 
 * @param {Boolean} hasParent 
 */
exports.smsg = (conn, m, store) => {
    if (!m) return m
    let M = proto.WebMessageInfo
    if (m.key) {
        m.id = m.key.id
        m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
        m.chat = m.key.remoteJid
        m.fromMe = m.key.fromMe
        m.isGroup = m.chat.endsWith('@g.us')
        m.sender = m.fromMe ? (conn.user.id.split(":")[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
    }
    if (m.message) {
        m.mtype = Object.keys(m.message)[0]
        m.body = m.message.conversation || m.message[m.mtype].caption || m.message[m.mtype].text || (m.mtype == 'listResponseMessage') && m.message[m.mtype].singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.message[m.mtype].selectedButtonId || m.mtype
        m.msg = m.message[m.mtype]
        if (m.mtype === 'ephemeralMessage') {
            exports.smsg(alpha, m.msg)
            m.mtype = m.msg.mtype
            m.msg = m.msg.msg
        }
        let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
        m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
        if (m.quoted) {
            let type = Object.keys(m.quoted)[0]
			m.quoted = m.quoted[type]
            if (['productMessage'].includes(type)) {
				type = Object.keys(m.quoted)[0]
				m.quoted = m.quoted[type]
			}
            if (typeof m.quoted === 'string') m.quoted = {
			text: m.quoted
		}
            m.quoted.mtype = type
            m.quoted.id = m.msg.contextInfo.stanzaId
			m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
            m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
			m.quoted.sender = m.msg.contextInfo.participant.split(":")[0] || m.msg.contextInfo.participant
			m.quoted.fromMe = m.quoted.sender === (conn.user && conn.user.id)
            m.quoted.text = m.quoted.text || m.quoted.caption || ''
			m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
            m.getQuotedObj = m.getQuotedMessage = async () => {
			if (!m.quoted.id) return false
			let q = await store.loadMessage(m.chat, m.quoted.id, conn)
 			return exports.smsg(conn, q, store)
            }
            let vM = m.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: m.quoted.chat,
                    fromMe: m.quoted.fromMe,
                    id: m.quoted.id
                },
                message: quoted,
                ...(m.isGroup ? { participant: m.quoted.sender } : {})
            })

            /**
             * 
             * @returns 
             */
            m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })

   /**
	* 
		* @param {*} jid 
		* @param {*} forceForward 
		* @param {*} options 
		* @returns 
	   */
            m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options)

            /**
              *
              * @returns
            */

            m.quoted.download = () => downloadMediaMessage(m.quoted)
        }
    }
    if (m.msg.url) m.download = () => downloadMediaMessage(m.msg)
    m.text = (m.mtype == 'listResponseMessage' ? m.msg.singleSelectReply.selectedRowId : '') || m.msg.text || m.msg.caption || m.msg || ''
    /**
	* Reply to this message
	* @param {String|Object} text 
	* @param {String|false} chatId 
	* @param {Object} options 
	*/
	m.reply = (text, chatId, options) => conn.sendMessage(chatId ? chatId : m.chat, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),showAdAttribution: true }, ...options }, { quoted:m })
    
    /**
* Copy this message
	*/
	m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} forceForward 
	 * @param {*} options 
	 * @returns 
	 */

m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)

    return m
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})