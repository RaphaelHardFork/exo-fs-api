//Importation des packages
const fs = require('fs')


// Verification de l'input du terminal
if (process.argv.length < 3) {
  console.log('usage: node cat.js yourFile1.txt yourFile2.txt yourFileN.txt')
  process.exit(1)
}

// Verification des fichiers
for (let elem of process.argv.slice(2)) {
  if (!(fs.existsSync(elem))) {
    console.log(`The file ${elem} doesn't exist`)
    process.exit(1)
  }
}


// Programme
let fileContent = ''

for (let elem of process.argv.slice(2)) {
  fileContent += fs.readFileSync(elem, 'utf-8') + ' '
}

console.log(fileContent)utf-8