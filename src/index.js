import Player from './player.js';
let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");


const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let player = new Player(GAME_WIDTH, GAME_HEIGHT)

//sets an initial lastTime
let lastTime = 0;

//adds event listeners for keypresses, function is then called in gameLoop()
var keyState = {};

window.addEventListener('keydown', function (e) {
    keyState[e.keyCode || e.which] = true;
}, true);

window.addEventListener('keyup', function (e) {
    keyState[e.keyCode || e.which] = false;
}, true);

function inputHandler() {
    if (keyState[38] || keyState[87]){
        player.jump(player.gravity);
    }
    if (keyState[37] || keyState[65]){
        player.moveLeft();
    }  
    else if (keyState[39] || keyState[68]){
        player.moveRight();
    }
    else {
        player.speed = 0;
    }  
}

// ************************************************

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, 800, 600);
    player.update(deltaTime);
    player.draw(ctx);
    inputHandler();
    requestAnimationFrame(gameLoop);
}

gameLoop();