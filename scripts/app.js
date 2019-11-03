(function () {
  const gameElem = document.getElementById('game')

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

  function updateScore(scoreElem, gameState) {

  }

  function updateSnake(gameState) {

  }

  function setupGame(width, height, speed) {

  }

  function createGrid(width, height, cellSize) {

  }

  function setupGame(width, height, cellSize, speed) {
    let gameState
    let scoreElem
    let updateTimeout
    const startX = parseInt(width / 2, 10)
    const startY = parseInt(height / 2, 10)

    function onKeyDown(event) {

    }

    function start() {
      const grid = createGrid(width, height, cellSize)
      const snake = [{ x: startX, y: startY }]
      gameState = {
        score: 0,
        grid,
        direction: DIR_UP,
        snake
      }
      document.addEventListener('keydown', onKeyDown)
      updateTimeout = setTimeout(update, speed)
    }

    function update() {
      console.log('update')
      updateTimeout = setTimeout(update, speed)
    }

    function end() {
      gameState = undefined
      document.removeEventListener('keydown', onKeyDown)
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

  setupGame(11, 11, 20, 100).start()

})()

