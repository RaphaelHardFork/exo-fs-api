//Importation des packages
const fs = require('fs')

// Verification de l'input du terminal
if (process.argv.length !== 4) {
  console.log('usage: node cat.js sourceFile.txt destination.txt')
  process.exit(1)
}

if (!(fs.existsSync(process.argv[2]))) {
  console.log(`The file "${process.argv[2]}" doesn't exist`)
  process.exit(1)
}

if (fs.existsSync(process.argv[3])) {
  console.log(`The destination file "${process.argv[3]}" already exist`)
}

// Programme
let copy = fs.readFileSync(process.argv[2], 'utf-8')
fs.writeFileSync(process.argv[3], copy)