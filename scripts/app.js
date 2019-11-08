const grid = document.querySelector('#game .grid')
const score = document.querySelector('#game .score')
const gameover = document.querySelector('#game .gameover')
const width = 13
const height = 11
const cells = {}
// Snake is an array of parts of snake
// each part of snake has its own x and y
const snake = [{
  x: 5,
  y: 5
}]

let totalScore = 0
let direction = 0

//Utility functions
function getCell(x, y) {
  return cells[x + ':' + y]
}

function getSnakeHead() {
  return snake[0]
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

function isSnakeCell(cell) {
  return cell.className === 'cell snake'
}

function growSnake(snakeTail) {
  snake.push(snakeTail)
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
for (let y = 0; y < height; y++) {
  const row = document.createElement('div')
  row.classList.add('row')
  for (let x = 0; x < width; x++) {
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

const snakeHead = getSnakeHead()
const startingSnakeCell = getCell(snakeHead.x, snakeHead.y)
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

document.querySelector('#game .nokia-button.two')
  .addEventListener('click', () => {
    direction = 0
  })

document.querySelector('#game .nokia-button.four')
  .addEventListener('click', () => {
    direction = 3
  })

document.querySelector('#game .nokia-button.six')
  .addEventListener('click', () => {
    direction = 1
  })

document.querySelector('#game .nokia-button.eight')
  .addEventListener('click', () => {
    direction = 2
  })

document.querySelector('#game .nokia-button.nine')
addEventListener('click', function (evt) {
  if (evt.detail === 3) {
    alert('Nee Naw Nee Naw...joking no emergency service is on the way. You need a real phone for that!')
  }
})

// 4. Make update move snake
function moveSnake() {
  const snakeHead = getSnakeHead()
  // Move the snake parts
  const snakeSize = snake.length
  const lastSnakePart = snake[snakeSize - 1]
  // We make a new object as we mutate the snake head
  // below and the snake head might be the same if the
  // size of the snake is only 1.
  const snakeTail = { x: lastSnakePart.x, y: lastSnakePart.y }
  for (let i = snakeSize - 1; i > 0; i--) {
    snake[i].x = snake[i - 1].x
    snake[i].y = snake[i - 1].y
  }
  switch (direction) {
    case 0: {
      let nextSnakeHeadY = snakeHead.y - 1
      if (nextSnakeHeadY === -1) {
        nextSnakeHeadY = height - 1
      }
      snakeHead.y = nextSnakeHeadY
      break
    }
    case 1: {
      let nextSnakeHeadX = snakeHead.x + 1
      if (nextSnakeHeadX === width) {
        nextSnakeHeadX = 0
      }
      snakeHead.x = nextSnakeHeadX
      break
    }
    case 2: {
      let nextSnakeHeadY = snakeHead.y + 1
      if (nextSnakeHeadY === height) {
        nextSnakeHeadY = 0
      }
      snakeHead.y = nextSnakeHeadY
      break
    }
    case 3: {
      let nextSnakeHeadX = snakeHead.x - 1
      if (nextSnakeHeadX === -1) {
        nextSnakeHeadX = width - 1
      }
      snakeHead.x = nextSnakeHeadX
      break
    }
    default:
  }
  const nextCell = getCell(snakeHead.x, snakeHead.y)
  if (isSnakeCell(nextCell)) {
    gameover.style.display = 'block'
    grid.classList.add('end')
    clearInterval(gamInterval)
  } else if (isFoodCell(nextCell)) {
    // add a new snake part to snake
    growSnake(snakeTail)
    totalScore += 5
    updateScore()
    createRandomFood()
  } else {
    const snakeTailCell = getCell(snakeTail.x, snakeTail.y)
    setBlankCell(snakeTailCell)
  }
  const nextSnakeHeadCell = getCell(snakeHead.x, snakeHead.y)
  setSnakeCell(nextSnakeHeadCell)
}

const gamInterval = setInterval(moveSnake, 100)
