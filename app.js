// Create Dino Constructor
function Dino(dino) {
  this.species = dino.species,
    this.height = dino.height,
    this.weight = dino.weight,
    this.diet = dino.diet,
    this.where = dino.where,
    this.when = dino.when,
    this.fact = dino.fact,
    this.imgSrc = `/images/${dino.species.toLowerCase()}.png`
}

// Create Dino Objects
let dinosArray = []
let singleDino
fetch('dino.json')
  .then(res => res.json())
  .then(dinos =>
    dinos['Dinos'].map(dino =>
      dinosArray.push(new Dino(dino))

    ))

// Create Human Object
let human = {}

// Use IIFE to get human data from form

function getValue(id) {
  return document.getElementById(id).value

}
const human = (function () {
  const name = getValue('name')
  const feet = getValue('feet')
  const inches = getValue('inches')
  const weight = getValue('weight')
  const diet = getValue('diet')

}())

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
function compareDiet(human, dino) {
  if (human.diet === dino.diet)
    return dino.species
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareWeight(human, dino) {

}


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function getPigeonFact() {

}

// Generate Tiles for each Dino in Array
const tile = `<div></div>`
// Add tiles to DOM

const grid = document.getElementById('grid')

// Remove form from screen
const form = document.getElementById('form-container')


// On button click, prepare and display infographic
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  console.log(dinosArray)

})