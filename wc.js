/*
node wc.js file.txt
279    1211   13376 file.txt
Affiche le nombre de lignes, mots et caractères du fichier file.txt.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion l'erreur si file.txt n'existe pas.

wc.js
Améliorer l'exercice précédent en ajoutant la possibilité de passer des paramètres optionnels: -l: pour afficher le nombre de lignes uniquement.
-w: pour afficher le nombre de mots uniquement.
-c: pour afficher le nombre de caractères uniquement.
Pour simplifier l'exercice nous supposerons que seulement 1 seul paramètres optionnel peut être passé en même temps.

node wc.js file.txt
279    1211   13376 file.txt
node wc.js -l file.txt
279 file.txt
node wc.js -w file.txt
1211 file.txt
node wc.js -c file.txt
13376 file.txt
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si le paramètre optionnel passé n'existe pas.
Gestion l'erreur si file.txt n'existe pas.
*/

//Importation des packages
const fs = require('fs')

// Fonctions


const nbLine = (file) => {
  let fileLineTab = (fs.readFileSync(file, 'utf-8')).split('\n')
  return fileLineTab.length
}

const nbWord = (file) => {
  let fileLineTab = (fs.readFileSync(file, 'utf-8')).split('\n')
  let fileWordTab = fileLineTab.map((elem) => elem.split(' '))
  let count = 0
  for (let elem of fileLineTab) {
    count += fileWordTab.length
  }
  return count
}

const nbChar = (wordTab) => {
  let fileCharTab = wordTab.map

}

let tab1 = nbLine('longText.txt')
let tab2 = nbWord('longText.txt')

console.log(tab1.length)
console.log(tab2.length)