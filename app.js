// Create Dino Constructor
function Dino(dino) {
  this.species = dino.species,
    this.height = dino.height,
    this.weight = dino.weight,
    this.diet = dino.diet,
    this.where = dino.where,
    this.when = dino.when,
    this.fact = dino.fact,
    this.img = `/images/${dino.species.toLowerCase()}.png`
}
Dino.prototype.getWhere = getWhere()
Dino.prototype.getDiet = getDiet()
Dino.prototype.getWeight = getWeight()


// Create Dino Objects
let dinosArray = []
async function createDinos() {
  const res = await fetch('dino.json')
    .then(res => res.json())
    .then(dinos =>
      dinos['Dinos'].map(dino => new Dino(dino)
      ))
  dinosArray.push(res)
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

humanData.prototype.getWhere = getWhere()
humanData.prototype.getDiet = getDiet()
humanData.prototype.getWeight = getWeight()

function getValue(id) {
  return document.getElementById(id).value
}


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
function getWhere(kind) {
  if (kind === typeof (Dino)) return kind.fact
  return 'humans are from earth'
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function getDiet(kind) {
  //return kind.diet
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function getWeight(kind) {
  //return kind.weight
}
// Generate Tiles for each Dino in Array
function makeTile(dino) {
  return (
    `<div id='grid-item'>
  <img src=${dino.img}/>
  <p>${dino.species}</p>
  <p>${dino.fact}</p>
  </div>`
  )
}

// Add tiles to DOM

const grid = document.getElementById('grid')
let gridItem

function addTiles() {
  console.log(dinosArray)
  dinosArray.map(dino => {
    gridItem = makeTile(dino)
    grid.append(gridItem)

    console.log(gridItem)
  }
  )

}

// Remove form from screen
const form = document.querySelector('.form-container')

// On button click, prepare and display infographic
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  form.style.display = 'none'
  createDinos()

})