(function () {

  const CELL_EMPTY = 0
  const CELL_SNAKE = 1
  const CELL_FOOD = 2

  const DIR_UP = 0
  const DIR_RIGHT = 1
  const DIR_DOWN = 2
  const DIR_LEFT = 3

  function randomNumberBetween(start, end) {
    return Math.floor(Math.random() * (end - start + 1) * start)
  }

  function getNewFoodPosition(gameState, width, height) {

  }

  function updateSnake(gameState) {

  }

  function createGrid(width, height, game) {
    const grid = document.createElement('div')
    grid.className = 'grid'
    game.appendChild(grid)

    const cells = []
    for (let x = 0; x < width; x++) {
      // Make an array for Y
      if (cells[x] === undefined) {
        cells[x] = []
      }
      // Create row element
      for (let y = 0; y < width; y++) {
        // Ceate cell element
        // Append cell to row
      }
      // Append row to grid
    }

    function remove() {
      game.removeChild(grid)
    }

    return {
      remove
    }
  }

  function createScore(initialScore, game) {
    const scoreDiv = document.createElement('div')
    scoreDiv.className = 'score'
    game.appendChild(scoreDiv)

    const score = {
      value: initialScore,
      update,
      remove
    }

    function update(newValue) {
      score.value = newValue
      scoreDiv.textContent = newValue
    }

    function remove() {
      game.removeChild(scoreDiv)
    }

    update()
    return score
  }

  function setupGame(gameSelector, width, height, speed) {
    const game = document.querySelector(gameSelector)
    let gameState
    let updateTimeout
    const startX = parseInt(width / 2, 10)
    const startY = parseInt(height / 2, 10)

    function onKeyDown(event) {
      switch (event.key) {
        case 'ArrowUp':
          gameState.direction = DIR_UP
          return
        case 'ArrowRight':
          gameState.direction = DIR_RIGHT
          return
        case 'ArrowDown':
          gameState.direction = DIR_DOWN
          return
        case 'ArrowLeft':
          gameState.direction = DIR_LEFT
          return
      }
    }

    function start() {
      const grid = createGrid(width, height, game)
      const score = createScore(0, game)
      const snake = [{ x: startX, y: startY }]
      gameState = {
        score,
        grid,
        direction: DIR_UP,
        snake
      }
      document.addEventListener('keydown', onKeyDown)
      updateTimeout = setTimeout(update, speed)
    }

    function update() {
      console.log(gameState)
      updateTimeout = setTimeout(update, speed)
    }

    function end() {
      gameState = undefined
      document.removeEventListener('keydown', onKeyDown)
      gameState.grid.remove()
      gameState.score.remove()
    }

    function restart() {

    }

    function pause() {
      clearInterval(updateTimeout)
    }


    return {
      start,
      end,
      restart,
      pause
    }

  }

  document.addEventListener('DOMContentLoaded', () => {
    setupGame('#game', 11, 11, 20, 1000).start()
  })

})()

