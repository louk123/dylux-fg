import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['212661809542', 'FG98', true],
  ['212661809542'], 
  ['212661809542'] 
] //Numeros de owner 

global.mods = ['212661809542'] 
global.prems = ['212661809542', '5219631769130', '573125484672']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.onrender.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = '@/ابـلـيـس الـمـلـڪـي🤴🏻⃟⃢🌹' 
global.author = 'insta:lo9mane.lmalaki' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/lo9mane.lmalaki\n' 
global.dygp = 'https://chat.whatsapp.com/BX9xbtdP1e832q6NxhFMsT'
global.fgsc = 'https://github.com/louk123' 
global.fgyt = 'https://youtube.com/@Al--malaki'
global.fgpyp = 'https://paypal.me/'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
