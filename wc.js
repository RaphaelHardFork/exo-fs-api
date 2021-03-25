//Importation des packages
const fs = require('fs')

// Fonction
const counter = (file) => {
  // Nombre de caractères
  let fileContent = fs.readFileSync(file, 'utf-8')
  let charCount = fileContent.length
  // Nombre de lignes
  let fileLineTab = (fs.readFileSync(file, 'utf-8')).split('\n')
  let lineCount = fileLineTab.length
  // Nombre de mots
  let fileWordTab = fileLineTab.map((elem) => elem.split(' '))
  let wordCount = 0
  for (let elem of fileWordTab) {
    wordCount += elem.length
  }
  return [lineCount, wordCount, charCount]
}


// Verification de l'input
if (process.argv.length < 3) {
  console.log('usage: node wc.js file.txt\nor use one or several option:\n-c\n-w\n-l')
  process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
  console.log(`The file "${process.argv[2]}" doesn't exist`)
  process.exit(1)
}

// Options ?
let c = false
let w = false
let l = false

if (process.argv.length !== 3) {
  for (let elem of process.argv.slice(3)) {
    if (elem === '-c') {
      c = true
    } else if (elem === '-w') {
      w = true
    } else if (elem === '-l') {
      l = true
    } else {
      console.log(`The option "${elem}" is not defined.`)
      process.exit(1)
    }
  }
} else {
  c = true
  w = true
  l = true
}

// Programme
result = counter(process.argv[2])
console.log(`${l ? result[0] + ' ' : ''}${w ? result[1] + ' ' : ''}${c ? result[2] + ' ' : ''}${process.argv[2]}`)