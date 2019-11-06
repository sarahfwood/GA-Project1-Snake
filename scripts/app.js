//Add directional buttons
//Add score
//Make snake grow after food

const grid = document.querySelector('#game .grid')
const width = 11
const height = 11
const cells = {}

let snakeHeadX = 5
let snakeHeadY = 5
let foodX = getRandomX()
let foodY = getRandomY()
let direction = 0

//Utility function
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

function getRandomX() {
  let x
  do {
    x = Math.floor(Math.random() * width)
  } while ( x === snakeHeadX)
  return x
}

function getRandomY() {
  let y
  do {
    y = Math.floor(Math.random() * height)
  } while ( y === snakeHeadY)
  return y
}

//1.0 Make the grid for the game
for (let y = 0; y < width; y++) {
  const row = document.createElement('div')
  row.classList.add('row')
  for (let x = 0; x < height; x++) {
    const cell = document.createElement('div')
    const cellId = x + ':' + y
    setBlankCell(cell)
    // We can remove this once we're done. It is not used anywhere (cellId)
    cells[cellId] = cell
    row.appendChild(cell)
  }
  grid.appendChild(row)
}


//2.0 Make the snake starting position
//And tbe food starting position


const startingSnakeCell = getCell(snakeHeadX, snakeHeadY)
setSnakeCell(startingSnakeCell)

const startingFoodCell = getCell(foodX, foodY)
setFoodCell(startingFoodCell)

//3.0 Handle directions


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
  }
})

//4.0 Make uodate move snake
function moveSnake() {
  const currentCell = getCell(snakeHeadX, snakeHeadY)
  setBlankCell(currentCell)
  switch (direction) {
    case 0: {
      let nextSnakeHeadY = snakeHeadY - 1
      if (nextSnakeHeadY === -1) {
        nextSnakeHeadY = height - 1
      }
      const nextCell = getCell(snakeHeadX, nextSnakeHeadY)
      snakeHeadY = nextSnakeHeadY
      setSnakeCell(nextCell)
      break
    }
  }
}

setInterval(moveSnake, 1000)

// (function () {

//   const CELL_EMPTY = 0
//   const CELL_SNAKE = 1
//   const CELL_FOOD = 2

//   const DIR_UP = 0
//   const DIR_RIGHT = 1
//   const DIR_DOWN = 2
//   const DIR_LEFT = 3

//   function randomNumberBetween(start, end) {
//     return Math.floor(Math.random() * (end - start + 1) * start)
//   }

//   function getNewFoodPosition(gameState, width, height) {

//   }

//   function updateSnake(gameState) {

//   }

//   function createGrid(width, height, game) {
//     const grid = document.createElement('div')
//     grid.className = 'grid'
//     game.appendChild(grid)

//     const cells = []
//     for (let x = 0; x < width; x++) {
//       // Make an array for Y
//       if (cells[x] === undefined) {
//         cells[x] = []
//       }
//       // Create row element
//       const row = document.createElement('div')
//       row.className = 'row'
//       for (let y = 0; y < width; y++) {
//         // Ceate cell element
//         const cell = document.createElement('div')
//         cell.className = 'cell'
//         row.appendChild(cell)
//         // Append cell to row
//         cells[x][y] = {
//           element: cell
//         }
//       }
//       // Append row to grid
//       grid.appendChild(row)
//     }
//     console.log(cells)
//     cells[1][1].element.style.backgroundColour = 'red'

//     function remove() {
//       game.removeChild(grid)
//     }

//     return {
//       remove
//     }
//   }

//   function createScore(initialScore, game) {
//     const scoreDiv = document.createElement('div')
//     scoreDiv.className = 'score'
//     game.appendChild(scoreDiv)

//     const score = {
//       value: initialScore,
//       update,
//       remove
//     }

//     function update(newValue) {
//       score.value = newValue
//       scoreDiv.textContent = newValue
//     }

//     function remove() {
//       game.removeChild(scoreDiv)
//     }

//     update()
//     return score
//   }

//   function setupGame(gameSelector, width, height, speed) {
//     const game = document.querySelector(gameSelector)
//     let gameState
//     let updateTimeout
//     const startX = parseInt(width / 2, 10)
//     const startY = parseInt(height / 2, 10)

//     function onKeyDown(event) {
//       switch (event.key) {
//         case 'ArrowUp':
//           gameState.direction = DIR_UP
//           return
//         case 'ArrowRight':
//           gameState.direction = DIR_RIGHT
//           return
//         case 'ArrowDown':
//           gameState.direction = DIR_DOWN
//           return
//         case 'ArrowLeft':
//           gameState.direction = DIR_LEFT
//           return
//       }
//     }

//     function start() {
//       const grid = createGrid(width, height, game)
//       const score = createScore(0, game)
//       const snake = [{ x: startX, y: startY }]
//       gameState = {
//         score,
//         grid,
//         direction: DIR_UP,
//         snake
//       }
//       document.addEventListener('keydown', onKeyDown)
//       updateTimeout = setTimeout(update, speed)
//     }

//     function update() {
//       // console.log(gameState)
//       updateTimeout = setTimeout(update, speed)
//     }

//     function end() {
//       gameState = undefined
//       document.removeEventListener('keydown', onKeyDown)
//       gameState.grid.remove()
//       gameState.score.remove()
//     }

//     function restart() {

//     }

//     function pause() {
//       clearInterval(updateTimeout)
//     }


//     return {
//       start,
//       end,
//       restart,
//       pause
//     }

//   }

//   document.addEventListener('DOMContentLoaded', () => {
//     setupGame('#game', 11, 11, 20, 1000).start()
//   })

// })()

