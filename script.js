// Define html elements
const board = document.getElementById("game-board");

// Define variables
let snake = [{x: 10, y: 10}];


// Draw map, snake, food
function draw() {
    board.innerHTML = '';
    drawSnake();
}

// Draw snake
function drawSnake() {
    snake.forEach((segmant) => {
        const snakeElement = createGameElement('div', 'snake');
    })
}

// Create a snake or food div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}
