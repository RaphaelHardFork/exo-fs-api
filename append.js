//Importation des packages
const fs = require('fs')


// Verification de l'input du terminal
if (process.argv.length < 3) {
  console.log('usage: node cat.js sourceFile1.txt sourceFileN.txt destinationFile.txt  ')
  process.exit(1)
}

// Verification des fichiers
for (let elem of process.argv.slice(2)) {
  if (!(fs.existsSync(elem))) {
    console.log(`The file "${elem}" doesn't exist`)
    process.exit(1)
  }
}

// Programme
let appendContent = ''

for (let elem of process.argv.slice(2, -1)) {
  appendContent += fs.readFileSync(elem, 'utf-8') + ' '
}

fs.writeFileSync(process.argv[process.argv.length - 1], appendContent)