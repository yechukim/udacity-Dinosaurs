// Create Dino Constructor
function Dino(dino) {
  this.weight = dino.weight,
    this.where = dino.where,
    this.when = dino.when,
    this.height = dino.height,
    this.fact = dino.fact,
    this.species = dino.species,
    this.img = `/images/${dino.species.toLowerCase()}.png`
}

// Create Dino Objects
let dinosArray = []
async function createDinos() {
  const res = await fetch('dino.json')
    .then(res => res.json())
    .then(dinos =>
      dinos['Dinos'].map(dino => new Dino(dino)
      ))
  dinosArray = res
  pushHuman(humanData())
  makeTile(dinosArray)
}

// Create Human Object
let humanData = {}
// Use IIFE to get human data from form
humanData = (function () {

  return function () {
    const name = getValue('name')
    const feet = getValue('feet')
    const inches = getValue('inches')
    const weight = getValue('weight')
    const diet = getValue('diet')

    return {
      name,
      feet,
      inches,
      weight,
      diet,
      img: `/images/human.png`
    }
  }

}())

function getValue(id) {
  return document.getElementById(id).value
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
Dino.prototype.compareDiet = function (dino) {
  if (humanData.diet === dino.diet) return `${dino.species} has a same taste with you!`
  return `${dino.species} does not have a same taste with you!`
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function (dino) {
  if (humanData.weight < dino.weight) return `${dino.species} is heavier than you`
  return `${dino.species} is strong enough like you`
}
// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareHeight = function (dino) {
  if (humanData.feet) {
    return compareInches(dino, humanData.feet)
  }
  if (humanData.inches) {
    return compareInches(dino, humanData.feet)
  }
  return `${dino.species} is ${dino.height} in inches`
}

//change feet to inches 
function compareInches(dino, human) {
  const humanInches = human * 12
  if (humanInches > dino.inches) return `you are super tall`
  return `dino is super tall`
}

// get randomFacts
function getRandom() {

}
// Generate Tiles for each Dino in Array
let dinoTiles = []
function makeTile(dinos) {

  dinos.map(dino => {
    //human
    if (dino.constructor !== Dino) {
      const tile =
        `<div class="grid-item">
        <h3>${dino.name}</h3>
        <img src=${dino.img} />
      </div>`
      dinoTiles.push(tile)

    } else if (dino.species === 'Pigeon') {//pigeon
      const tile =
        `<div class="grid-item">
      <h3>${dino.species}</h3>
      <img src=${dino.img} />
      <p>${dino.fact}</p>
    </div>`
      dinoTiles.push(tile)

    } else {  //etc
      const tile =
        `<div class="grid-item">
        <h3>${dino.species}</h3>
        <img src=${dino.img} />
        <p>${dino.fact}</p>
      </div>`
      dinoTiles.push(tile)
    }
  }
  )
  addTiles(dinoTiles)
}

// Add tiles to DOM

const grid = document.getElementById('grid')
let gridItem

function addTiles(tiles) {
  tiles.map(tile => grid.innerHTML += tile)
}

//push human to array 
function pushHuman(human) {
  let start = dinosArray.length / 2
  dinosArray.splice(start, 0, human)
}
// Remove form from screen
function hideForm() {
  const form = document.querySelector('.form-container')
  form.style.display = 'none'
}

// On button click, prepare and display infographic
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  hideForm()
  createDinos()
})