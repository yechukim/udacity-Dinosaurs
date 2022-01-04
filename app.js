// Create Dino Constructor
function Dino(dino) {
  this.weight = dino.wieght,
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


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array
let dinoTiles = []
function makeTile(dinos) {

  dinos.map(dino =>
  //console.log(dino)
  {
    const tile =
      `<div id="grid-item">
        <h3>${dino.species}</h3>
        <img src=${dino.img} />
        <p>${dino.fact}</p>
      </div>`
    dinoTiles.push(tile)
  }
  )
  console.log(dinoTiles)
  addTiles(dinoTiles)
}

// Add tiles to DOM

const grid = document.getElementById('grid')
let gridItem

function addTiles(tiles) {

  tiles.map(tile => grid.innerHTML += tile)

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
  humanData()

})