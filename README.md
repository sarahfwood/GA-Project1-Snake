# GA-project-1

How to Play
  Snake is a single-player game where the player earns points by guiding the snake to eat food randomly placed on the game board. Each item of food the snake eats the longer it grows. The game is over if the snake hits the edge of the board, or itself. To make things even more challenging, the snake increases speed as the longer it gets!
  The aim of the game is to stay alive as long as possible.

Requirements
  The snake should be able to eat food to grow bigger
  The game should end when the snake hits the wall or itself
  Snake speeds up as it eats more

Features to add
  High Score Board
  Current player score
  Start Button

Initial State
  Empty grid and start button

Game Over State
  Snake collides with walls or body.

Variables
  Snake
  Food
  Direction of snake
  Speed
  High score
  Current score

Data Structures
  Create snake board object
  Create class 'snake' 

Event Listeners
  Add keyboard events for movement of snake
  Add event listener 'click' for start buttomn and to start a game. If time will add a pause button

setIntervals or setTimeout required
  setInterval to refresh and move snake by 1 grid in the direction it's facing

