// Verification de l'input du terminal
if (process.argv.length === 2) {
  console.log('There is nothing to display')
  process.exit(1)
}

// Rendu
let str = ''
for (let i = 2; i < process.argv.length; i++) {
  str += `${process.argv[i]} `
}

// Avec un slice / for of
str = ''
for (let elem of process.argv.slice(2)) {
  str += `${elem} `
}


console.log(str)