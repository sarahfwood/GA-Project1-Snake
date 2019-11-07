const grid = document.querySelector('#game .grid')
const score = document.querySelector('#game .scre')
const width = 13
const height = 11
const cells = {}

let totalScore = 0
let snakeHeadX = 5
let snakeHeadY = 5
let direction = 0

//Utility functions
function getCell(x, y) {
  return cells[x + ':' + y]
}

function setSnakeCell(cell) {
  cell.className = 'cell snake'
}

function setBlankCell(cell) {
  cell.className = 'cell blank'
}

function setFoodCell(cell) {
  cell.className = 'cell food'
}

function isFoodCell(cell) {
  return cell.className === 'cell food'
}

function isBlankCell(cell) {
  return cell.className === 'cell blank'
}

function updateScore() {
  score.textContent = totalScore
}

function createRandomFood() {
  let foodX
  let foodY
  let cell
  do {
    foodX = createRandomNumber(width)
    foodY = createRandomNumber(height)
    cell = getCell(foodX, foodY)
  } while (!isBlankCell(cell))
  setFoodCell(cell)
}

function createRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

// 1. Make the grid for the game
for (let y = 0 ; y < height ; y++) {
  const row = document.createElement('div')
  row.classList.add('row')
  for (let x = 0 ; x < width ; x++) {
    const cell = document.createElement('div')
    const cellId = x + ':' + y
    setBlankCell(cell)
    cell.id = cellId
    cells[cellId] = cell
    row.appendChild(cell)
  }
  grid.appendChild(row)
}

// 2. Make the snake starting position
// and the food srarting position

const startingSnakeCell = getCell(snakeHeadX, snakeHeadY)
setSnakeCell(startingSnakeCell)
createRandomFood()

// 3. Handle directions

// Direction:
// 0 = UP
// 1 = RIGHT
// 2 = DOWN
// 3 = LEFT

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      direction = 0
      return
    case 'ArrowRight':
      direction = 1
      return
    case 'ArrowDown':
      direction = 2
      return
    case 'ArrowLeft':
      direction = 3
      return
    default:
  }
})

// 4. Make update move snake
function moveSnake() {
  const currentCell = getCell(snakeHeadX, snakeHeadY)
  switch (direction) {
    case 0: {
      let nextSnakeHeadY = snakeHeadY - 1
      if (nextSnakeHeadY === -1) {
        nextSnakeHeadY = height - 1
      }
      snakeHeadY = nextSnakeHeadY
      break
    }
    case 1: {
      let nextSnakeHeadX = snakeHeadX + 1
      if (nextSnakeHeadX === width) {
        nextSnakeHeadX = 0
      }
      snakeHeadX = nextSnakeHeadX
      break
    }
    case 2: {
      let nextSnakeHeadY = snakeHeadY + 1
      if (nextSnakeHeadY === height) {
        nextSnakeHeadY = 0
      }
      snakeHeadY = nextSnakeHeadY
      break
    }
    case 3: {
      let nextSnakeHeadX = snakeHeadX - 1
      if (nextSnakeHeadX === -1) {
        nextSnakeHeadX = width - 1
      }
      snakeHeadX = nextSnakeHeadX
      break
    }
    default:
  }
  const nextCell = getCell(snakeHeadX, snakeHeadY)
  if (isFoodCell(nextCell)) {
    totalScore += 5
    updateScore()
    createRandomFood()
  }
  setSnakeCell(nextCell)
  setBlankCell(currentCell)
}

setInterval(moveSnake, 100)
