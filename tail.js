//Importation des packages
const fs = require('fs')

// Fonction du programme
const tailDisplay = (file, nb) => {
  let fileTab = (fs.readFileSync(file, 'utf-8')).split('\n')
  fileTab = fileTab.slice(fileTab.length - nb)
  fileTab = fileTab.join('\n')
  console.log(fileTab)
}

// Verification de l'input du terminal
if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('usage: node tail.js file.txt\nOr: node tail.js -n numberOfLine file.txt\nDefault option: 10 lines')
  process.exit(1)
}

if (process.argv.length === 5) {
  // Verification de l'option
  if (process.argv[2] !== '-n') {
    console.log(`usage with option: node tail.js -n numberOfLine file.txt`)
  } else if (isNaN(process.argv[3])) {
    console.log(`Your number of line "${process.argv[3]}" is not a number`)
  } else {
    if (!(fs.existsSync(process.argv[4]))) {
      console.log(`The file "${process.argv[4]}" doesn't exist`)
      process.exit(1)
    } else {
      // Programme avec option
      tailDisplay(process.argv[4], process.argv[3])
    }
  }
} else {
  if (!(fs.existsSync(process.argv[2]))) {
    console.log(`The file "${process.argv[2]}" doesn't exist`)
    process.exit(1)
  }
  // Programme par default
  tailDisplay(process.argv[2], 10)
}