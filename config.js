/**
   Maksih Buat Dika Ardnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
  amel: 'https://melcanz.com',
  xteam: 'https://api.xteam.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = {
  'https://melcanz.com': 'melcantik',
     'https://api.xteam.xyz': 'HIRO',
     'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Other
global.zekais = 'Ddglle8M'
global.premi = []
hit_today = []
global.autorecording = true
global.autoketik = false
global.available = true
global.autoLevel = true,
global.limitawal = {
    premium: "unlimited",
    free: "100",
    }
global.owner = ['6281215205433']
global.packname = 'Loli-Mdོ'
global.author = 'By Zidni Ganz'
global.usedPrefix = ['']
global.prefa = ['','!','.','🐦','🐤','🗿']
global.wet = '*Scraping Metadata...*'
global.end ='Limit Harian Kamu Sudah Habis Silikan Claim Harian Atau Buy Limit Atau Tunggu Sampai Limit Di riset(Jam 12 Malam)!'
global.mess = {
    success: '*Status 200*',
    admin: 'Lu Admin!',
    botAdmin: 'Gua Bukan Admin Gann',
    owner: 'Lu Bukan Owner Gua Gann',
    group: 'Khusus Group Gan',
    wait: '*Scraping Metadata...*',
    }
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
